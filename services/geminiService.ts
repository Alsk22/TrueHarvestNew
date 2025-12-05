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
        
        // Use a STRICT prompt to act as a database retrieval system.
        // We explicitly command it NOT to paraphrase.
        const prompt = `ROLE: You are a strict, verbatim Bible Database.
TASK: Retrieve the exact text for ${book} Chapter ${chapter}.
LANGUAGE: ${language}.
VERSION_RULES:
- If language is 'english', use exactly the ${version} version.
- If language is 'telugu', use the standard "Bible Society of India (BSI)" / "O.V. (Old Version)" text. Do NOT use modern spoken dialects.
- If language is 'tamil', use the standard "BSI / O.V." version.

OUTPUT RULES:
- Provide every single verse. Do not skip any.
- Do not summarize.
- Do not add commentary.
- Return ONLY the JSON.`;

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
                        prebuiltVoiceConfig: { voiceName: 'Kore' }, 
                    },
                },
            },
        });

        const audioPart = response.candidates?.[0]?.content?.parts?.[0];
        if (audioPart && audioPart.inlineData && audioPart.inlineData.data) {
            return audioPart.inlineData.data; 
        }
        return null;
    } catch (error) {
        console.error("Error generating speech:", error);
        return null;
    }
};

export const generateBibleStudy = async (query: string): Promise<string> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `You are a helpful and knowledgeable Bible study assistant. The user is asking about: "${query}".
            Provide a concise but deep theological insight, historical context (if applicable), and practical application.
            Keep the tone encouraging and faith-building. Limit response to 200 words.`,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating Bible study:", error);
        return "Sorry, I couldn't generate the study notes at this moment. Please try again.";
    }
};

export const generateVerseSummary = async (verseText: string, reference: string): Promise<string> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Provide a very short, clear summary (max 3 sentences) of the following Bible verse for a quick understanding. 
            Verse: "${verseText}" (${reference})
            Focus on the core meaning and immediate application.`,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating verse summary:", error);
        return "Unable to generate summary at this time.";
    }
};

export const generateCaseStudy = async (topic: string): Promise<any> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const prompt = `Create a detailed biblical case study on: "${topic}".
        
        Structure the response as valid JSON with the following fields:
        - title: The name of the character or event.
        - scripture_reference: Key Bible passages (e.g., "1 Samuel 17, Psalm 23").
        - background: Who/What/Where/When (Context).
        - key_events: An array of strings listing 3-5 major plot points.
        - significance: Why this matters in the Bible's redemptive story.
        - lessons: An array of strings listing 3 practical lessons for modern believers.
        - reflection_question: A thought-provoking question for the user.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                 responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        scripture_reference: { type: Type.STRING },
                        background: { type: Type.STRING },
                        key_events: { type: Type.ARRAY, items: { type: Type.STRING } },
                        significance: { type: Type.STRING },
                        lessons: { type: Type.ARRAY, items: { type: Type.STRING } },
                        reflection_question: { type: Type.STRING }
                    },
                    required: ["title", "scripture_reference", "background", "key_events", "significance", "lessons", "reflection_question"]
                }
            },
        });
        
        return JSON.parse(response.text);
    } catch (error) {
        console.error("Error generating case study:", error);
        throw error;
    }
};

export const generateVerseImage = async (verse: string, reference: string, style: string): Promise<string | null> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const prompt = `Create a stunning, high-quality, 4K resolution visual representation of the following Bible verse.
        
        VERSE: "${verse}"
        REFERENCE: ${reference}
        STYLE: ${style}
        
        GUIDELINES:
        - The image should be majestic, inspiring, and respectful of the biblical context.
        - Do NOT include any text, letters, or words inside the image itself.
        - Focus on the visual imagery described in the verse (e.g., light, creation, nature, historical setting, emotion).
        - If the verse is abstract, use symbolic imagery (e.g., light breaking through clouds for 'hope').
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: prompt }] },
            config: {
                // responseMimeType: "image/png" is not supported for nano banana series, we just parse the response
            },
        });

        // Iterate through parts to find the image
        if (response.candidates?.[0]?.content?.parts) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData && part.inlineData.data) {
                    const base64EncodeString: string = part.inlineData.data;
                    return `data:image/png;base64,${base64EncodeString}`;
                }
            }
        }
        
        return null;
    } catch (error) {
        console.error("Error generating verse image:", error);
        throw error;
    }
};