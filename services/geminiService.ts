import { GoogleGenAI, Type, Modality } from "@google/genai";
import type { VerseData, Verse } from '../types';

// Fix: Switched to using a responseSchema for more robust JSON generation.
// This ensures the API returns a predictable structure and simplifies the prompt.
export const getVerseOfTheDay = async (): Promise<VerseData> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        const verseContentSchema = {
            type: Type.OBJECT,
            properties: {
                verse: { type: Type.STRING, description: "The full text of the Bible verse." },
                reference: { type: Type.STRING, description: "The book, chapter, and verse number." },
                explanation: { type: Type.STRING, description: "A simple, 3-4 sentence explanation." },
                application: { type: Type.STRING, description: "A practical, 3-4 sentence daily application." },
                dos: { type: Type.ARRAY, items: { type: Type.STRING }, description: "An array of 2-3 very short, actionable 'Do's' (3-5 words each)." },
                donts: { type: Type.ARRAY, items: { type: Type.STRING }, description: "An array of 2-3 very short, actionable 'Don'ts' (3-5 words each)." },
            },
            required: ["verse", "reference", "explanation", "application", "dos", "donts"]
        };

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Provide a Bible verse of the day suitable for someone new to the Bible, in English, Telugu, and Tamil.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        english: verseContentSchema,
                        telugu: verseContentSchema,
                        tamil: verseContentSchema,
                    },
                    required: ["english", "telugu", "tamil"]
                }
            },
        });

        const jsonText = response.text.trim();
        const data = JSON.parse(jsonText);
        
        return data as VerseData;
    } catch (error) {
        console.error("Error fetching verse of the day:", error);
        // Fallback data in case of an API error
        return {
            english: {
                verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
                reference: "John 3:16",
                explanation: "This verse encapsulates the boundless love of God for humanity. It speaks of the ultimate sacrifice made through Jesus Christ, offering the gift of eternal life to all who believe.",
                application: "Today, reflect on the depth of God's love for you personally. Share this message of hope with someone, and live with the confidence that you are cherished beyond measure.",
                dos: ["Believe the promise.", "Share God's love.", "Accept salvation's gift."],
                donts: ["Doubt His love.", "Try to earn salvation.", "Keep good news secret."]
            },
            telugu: {
                verse: "దేవుడు లోకమును ఎంతో ప్రేమించెను. కాగా ఆయన తన అద్వితీయకుమారునిగా పుట్టిన వానియందు విశ్వాసముంచు ప్రతివాడును నశింపక నిత్యజీవము పొందునట్లు ఆయనను అనుగ్రహించెను.",
                reference: "యోహాను 3:16",
                explanation: "ఈ వచనం మానవాళి పట్ల దేవుని అపారమైన ప్రేమను తెలియజేస్తుంది. యేసుక్రీస్తు ద్వారా చేసిన త్యాగాన్ని ఇది వివరిస్తుంది, విశ్వసించే ప్రతి ఒక్కరికీ నిత్యజీవ బహుమానాన్ని అందిస్తుంది.",
                application: "ఈ రోజు, దేవుడు మిమ్మల్ని వ్యక్తిగతంగా ఎంతగా ప్రేమిస్తున్నాడో ధ్యానించండి. ఈ నిరీక్షణ సందేశాన్ని ఇతరులతో పంచుకోండి మరియు మీరు అమూల్యంగా ప్రేమించబడుతున్నారనే విశ్వాసంతో జీవించండి.",
                dos: ["వాగ్దానాన్ని నమ్మండి.", "దేవుని ప్రేమను పంచుకోండి.", "రక్షణను స్వీకరించండి."],
                donts: ["ఆయన ప్రేమను సందేహించవద్దు.", "రక్షణను సంపాదించాలనుకోవద్దు.", "సువార్తను దాచవద్దు."]
            },
            tamil: {
                verse: "தேவன், தம்முடைய ஒரேபேறான குமாரனை விசுவாசிக்கிறவன் எவனோ அவன் கெட்டுப்போகாமல் நித்தியஜீவனை அடையும்படிக்கு, அவரைத் தந்தருளி, இவ்வளவாய் உலகத்தில் அன்பு கூர்ந்தார்.",
                reference: "யோவான் 3:16",
                explanation: "இந்த வசனம் மனிதகுலத்தின் மீது கடவுளின் எல்லையற்ற அன்பை உள்ளடக்கியது. இயேசு கிறிஸ்துவின் மூலம் செய்யப்பட்ட தியாகத்தைப் பற்றி இது பேசுகிறது, விசுவாசிக்கும் அனைவருக்கும் நித்திய ஜீவனின் பரிசை வழங்குகிறது.",
                application: "இன்று, தனிப்பட்ட முறையில் உங்கள் மீது கடவுளின் அன்பின் ஆழத்தை சிந்தியுங்கள். இந்த நம்பிக்கையின் செய்தியை ஒருவருடன் பகிர்ந்து கொள்ளுங்கள், மேலும் நீங்கள் அளவிட முடியாத அளவிற்கு நேசிக்கப்படுகிறீர்கள் என்ற நம்பிக்கையுடன் வாழுங்கள்.",
                dos: ["வாக்குறுதியை நம்புங்கள்.", "கடவுளின் அன்பைப் பகிரவும்.", "இரட்சிப்பை ஏற்றுக்கொள்ளுங்கள்."],
                donts: ["அவர் அன்பை சந்தேகிக்காதீர்கள்.", "இரட்சிப்பை சம்பாதிக்க முயற்சிக்காதீர்கள்.", "நற்செய்தியை ரகசியமாக வைக்காதீர்கள்."]
            }
        };
    }
};

export const getBibleChapter = async (language: string, book: string, chapter: number, version: string = 'KJV'): Promise<Verse | null> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Use a more specific prompt to ensure quality, especially for Telugu.
        const prompt = `Provide the full text of the Bible chapter: ${book} Chapter ${chapter} in ${language} language.
        ${language === 'telugu' ? 'Please use the standard spoken/written Telugu version (similar to Bible Society of India OV).' : ''}
        ${language === 'english' ? 'Use ' + version + ' version.' : ''}
        Ensure you provide EVERY verse in the chapter accurately. Do not summarize or omit any verses.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                         verses: {
                             type: Type.ARRAY,
                             items: {
                                 type: Type.OBJECT,
                                 properties: {
                                     verse_number: { type: Type.NUMBER },
                                     text: { type: Type.STRING }
                                 },
                                 required: ["verse_number", "text"]
                             }
                         }
                    },
                    required: ["verses"]
                }
            },
        });

        const jsonText = response.text.trim();
        const data = JSON.parse(jsonText);
        
        // Transform the array {verse_number, text} into the Verse interface {[number]: string}
        const verseMap: Verse = {};
        if (data.verses && Array.isArray(data.verses)) {
            data.verses.forEach((v: any) => {
                verseMap[v.verse_number] = v.text;
            });
            return verseMap;
        }
        
        return null;

    } catch (error) {
        console.error("Error fetching Bible chapter:", error);
        return null;
    }
}

export const generateSpeech = async (text: string): Promise<string | null> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' }, // 'Kore' is generally good for clear reading
                    },
                },
            },
        });

        // The API returns audio data in the first candidate's content part
        const audioPart = response.candidates?.[0]?.content?.parts?.[0];
        if (audioPart && audioPart.inlineData && audioPart.inlineData.data) {
            return audioPart.inlineData.data; // This is the base64 string
        }
        return null;
    } catch (error) {
        console.error("Error generating speech:", error);
        return null;
    }
};