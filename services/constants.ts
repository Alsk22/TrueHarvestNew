
import type { BibleData, SongData, Event, User, BiblePlan } from '../types';

export const USERS: User[] = [
  { 
      email: 'member@gmail.com', 
      role: 'user', 
      password: 'password123',
      profile: {
          displayName: 'Faithful Member',
          bio: 'Seeking God daily in the harvest.',
          notificationsEnabled: true,
          streak: 12,
          versesRead: 150,
          avatar: 'bg-blue-500'
      } 
  },
  { 
      email: 'admin@trueharvest.world', 
      role: 'admin', 
      password: 'harvest2024',
      profile: {
          displayName: 'Community Admin',
          bio: 'Shepherd of the digital flock.',
          notificationsEnabled: true,
          streak: 365,
          versesRead: 5000,
          avatar: 'bg-amber-500'
      } 
  },
];

export const BIBLE_PLANS: BiblePlan[] = [
    {
        id: 'new_testament_90',
        title: 'New Testament in 90 Days',
        description: 'Read through the entire New Testament in just 3 months. Perfect for getting to know Jesus and the early church.',
        days: 90,
        imageUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2670&auto=format&fit=crop',
        schedule: Array.from({ length: 90 }, (_, i) => ({
            day: i + 1,
            reference: i < 28 ? `Matthew ${i+1}` : `Mark ${i-27}`, 
            completed: false
        }))
    },
    {
        id: 'psalms_proverbs_30',
        title: 'Wisdom & Worship (30 Days)',
        description: 'A month-long journey through the Psalms and Proverbs to build wisdom and a heart of worship.',
        days: 30,
        imageUrl: 'https://images.unsplash.com/photo-1519681393798-38e43269d877?q=80&w=2670&auto=format&fit=crop',
        schedule: Array.from({ length: 30 }, (_, i) => ({
            day: i + 1,
            reference: `Psalms ${i*5+1}-${i*5+5}`, 
            completed: false
        }))
    },
    {
        id: 'gospels_30',
        title: 'Life of Jesus (30 Days)',
        description: 'Focus entirely on the life, death, and resurrection of Christ through the four Gospels.',
        days: 30,
        imageUrl: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2574&auto=format&fit=crop',
        schedule: Array.from({ length: 30 }, (_, i) => ({
            day: i + 1,
            reference: `John ${i % 21 + 1}`,
            completed: false
        }))
    },
    {
        id: 'kings_of_israel',
        title: 'Kings of Israel (14 Days)',
        description: 'A deep dive into the rise and fall of the Northern Kingdom, exploring the lives of Jeroboam, Ahab, and Jehu.',
        days: 14,
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop',
        schedule: Array.from({ length: 14 }, (_, i) => ({
            day: i + 1,
            reference: `1 Kings ${12 + i}`,
            completed: false
        }))
    },
    {
        id: 'kings_of_judah',
        title: 'Kings of Judah (21 Days)',
        description: 'Study the lineage of David, from Rehoboam to Zedekiah, seeing God\'s faithfulness despite human failure.',
        days: 21,
        imageUrl: 'https://images.unsplash.com/photo-1628510118714-d2124aea4b8b?q=80&w=2000&auto=format&fit=crop',
        schedule: Array.from({ length: 21 }, (_, i) => ({
            day: i + 1,
            reference: `2 Chronicles ${10 + i}`,
            completed: false
        }))
    },
    {
        id: 'the_12_disciples',
        title: 'Study on 12 Disciples (12 Days)',
        description: 'A character study on each of the twelve men chosen by Jesus to change the world.',
        days: 12,
        imageUrl: 'https://images.unsplash.com/photo-1511875762315-c773eb98eec9?q=80&w=2000&auto=format&fit=crop',
        schedule: [
            { day: 1, reference: "Peter (Matthew 16)", completed: false },
            { day: 2, reference: "Andrew (John 1)", completed: false },
            { day: 3, reference: "James (Acts 12)", completed: false },
            { day: 4, reference: "John (John 21)", completed: false },
            { day: 5, reference: "Philip (John 14)", completed: false },
            { day: 6, reference: "Bartholomew (John 1)", completed: false },
            { day: 7, reference: "Thomas (John 20)", completed: false },
            { day: 8, reference: "Matthew (Matthew 9)", completed: false },
            { day: 9, reference: "James Son of Alphaeus", completed: false },
            { day: 10, reference: "Thaddaeus", completed: false },
            { day: 11, reference: "Simon the Zealot", completed: false },
            { day: 12, reference: "Matthias (Acts 1)", completed: false },
        ]
    },
    {
        id: 'jesus_purpose',
        title: 'Jesus and His Purpose (7 Days)',
        description: 'Understand the mission of Christ: To seek, to save, to serve, and to sacrifice.',
        days: 7,
        imageUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2000&auto=format&fit=crop',
        schedule: [
            { day: 1, reference: "To Fulfill Law (Matt 5)", completed: false },
            { day: 2, reference: "To Call Sinners (Mark 2)", completed: false },
            { day: 3, reference: "To Seek the Lost (Luke 19)", completed: false },
            { day: 4, reference: "To Serve (Mark 10)", completed: false },
            { day: 5, reference: "To Testify Truth (John 18)", completed: false },
            { day: 6, reference: "To Give Life (John 10)", completed: false },
            { day: 7, reference: "To Save World (John 3)", completed: false },
        ]
    }
];

interface BookMetadata {
  en: string;
  te: string;
  ta: string;
  chapters: number;
  group: string;
}

export const BIBLE_METADATA: BookMetadata[] = [
  // Pentateuch / Law
  { en: 'Genesis', te: 'ఆదికాండము', ta: 'ஆதியாகமம்', chapters: 50, group: 'Pentateuch' },
  { en: 'Exodus', te: 'నిర్గమకాండము', ta: 'யாத்திராகமம்', chapters: 40, group: 'Pentateuch' },
  { en: 'Leviticus', te: 'లేవీయకాండము', ta: 'லேவியராகமம்', chapters: 27, group: 'Pentateuch' },
  { en: 'Numbers', te: 'సంఖ్యాకాండము', ta: 'எண்ணாகமம்', chapters: 36, group: 'Pentateuch' },
  { en: 'Deuteronomy', te: 'ద్వితీయోపదేశకాండము', ta: 'உபாகமம்', chapters: 34, group: 'Pentateuch' },
  // History
  { en: 'Joshua', te: 'యెహోషువ', ta: 'யோசுவா', chapters: 24, group: 'History' },
  { en: 'Judges', te: 'న్యాయాధిపతులు', ta: 'நியாயாதிபதிகள்', chapters: 21, group: 'History' },
  { en: 'Ruth', te: 'రూతు', ta: 'ரூத்', chapters: 4, group: 'History' },
  { en: '1 Samuel', te: '1 సమూయేలు', ta: '1 சாமுவேல்', chapters: 31, group: 'History' },
  { en: '2 Samuel', te: '2 సమూయేలు', ta: '2 சாமுவேல்', chapters: 24, group: 'History' },
  { en: '1 Kings', te: '1 రాజులు', ta: '1 இராஜாக்கள்', chapters: 22, group: 'History' },
  { en: '2 Kings', te: '2 రాజులు', ta: '2 இராஜாக்கள்', chapters: 25, group: 'History' },
  { en: '1 Chronicles', te: '1 దినవృత్తాంతములు', ta: '1 நாளாகமம்', chapters: 29, group: 'History' },
  { en: '2 Chronicles', te: '2 దినవృత్తాంతములు', ta: '2 நாளாகமம்', chapters: 36, group: 'History' },
  { en: 'Ezra', te: 'ఎజ్రా', ta: 'எஸ்றா', chapters: 10, group: 'History' },
  { en: 'Nehemiah', te: 'నెహెమ్యా', ta: 'நெகேமியா', chapters: 13, group: 'History' },
  { en: 'Esther', te: 'ఎస్తేరు', ta: 'எஸ்தர்', chapters: 10, group: 'History' },
  // Poetry
  { en: 'Job', te: 'యోబు', ta: 'யோபு', chapters: 42, group: 'Poetry' },
  { en: 'Psalms', te: 'కీర్తనల గ్రంథము', ta: 'சங்கீதம்', chapters: 150, group: 'Poetry' },
  { en: 'Proverbs', te: 'సామెతలు', ta: 'நீதிமொழிகள்', chapters: 31, group: 'Poetry' },
  { en: 'Ecclesiastes', te: 'ప్రసంగి', ta: 'பிரசங்கி', chapters: 12, group: 'Poetry' },
  { en: 'Song of Solomon', te: 'పరమగీతము', ta: 'உன்னதப்பாட்டு', chapters: 8, group: 'Poetry' },
  // Major Prophets
  { en: 'Isaiah', te: 'యెషయా', ta: 'ஏசாயா', chapters: 66, group: 'Major Prophets' },
  { en: 'Jeremiah', te: 'యిర్మీయా', ta: 'எரேமியா', chapters: 52, group: 'Major Prophets' },
  { en: 'Lamentations', te: 'విలాపవాక్యములు', ta: 'புலம்பல்', chapters: 5, group: 'Major Prophets' },
  { en: 'Ezekiel', te: 'యెహెజ్కేలు', ta: 'எசேக்கியேல்', chapters: 48, group: 'Major Prophets' },
  { en: 'Daniel', te: 'దానియేలు', ta: 'தானியேல்', chapters: 12, group: 'Major Prophets' },
  // Minor Prophets
  { en: 'Hosea', te: 'హోషేయ', ta: 'ஓசியா', chapters: 14, group: 'Minor Prophets' },
  { en: 'Joel', te: 'యోవేలు', ta: 'யோவேல்', chapters: 3, group: 'Minor Prophets' },
  { en: 'Amos', te: 'ఆమోసు', ta: 'ஆமோஸ்', chapters: 9, group: 'Minor Prophets' },
  { en: 'Obadiah', te: 'ఓబద్యా', ta: 'ஒபதியா', chapters: 1, group: 'Minor Prophets' },
  { en: 'Jonah', te: 'యోనా', ta: 'யோனா', chapters: 4, group: 'Minor Prophets' },
  { en: 'Micah', te: 'మీకా', ta: 'மீகா', chapters: 7, group: 'Minor Prophets' },
  { en: 'Nahum', te: 'నహూము', ta: 'நாகூம்', chapters: 3, group: 'Minor Prophets' },
  { en: 'Habakkuk', te: 'హబక్కూకు', ta: 'ஆபகூக்', chapters: 3, group: 'Minor Prophets' },
  { en: 'Zephaniah', te: 'జెఫన్యా', ta: 'செப்பனியா', chapters: 3, group: 'Minor Prophets' },
  { en: 'Haggai', te: 'హగ్గయి', ta: 'ஆகாய்', chapters: 2, group: 'Minor Prophets' },
  { en: 'Zechariah', te: 'జెకర్యా', ta: 'சகரியா', chapters: 14, group: 'Minor Prophets' },
  { en: 'Malachi', te: 'మలాకీ', ta: 'மல்கியா', chapters: 4, group: 'Minor Prophets' },
  // New Testament - Gospels
  { en: 'Matthew', te: 'మత్తయి', ta: 'மத்தேயு', chapters: 28, group: 'Gospels' },
  { en: 'Mark', te: 'మార్కు', ta: 'மாற்கு', chapters: 16, group: 'Gospels' },
  { en: 'Luke', te: 'లూకా', ta: 'லூக்கா', chapters: 24, group: 'Gospels' },
  { en: 'John', te: 'యోహాను', ta: 'யோவான்', chapters: 21, group: 'Gospels' },
  // History
  { en: 'Acts', te: 'అపొస్తలుల కార్యములు', ta: 'அப்போஸ்தலருடைய நடபடிகள்', chapters: 28, group: 'History' },
  // Epistles (Pauline)
  { en: 'Romans', te: 'రోమీయులకు', ta: 'ரோமர்', chapters: 16, group: 'Epistles' },
  { en: '1 Corinthians', te: '1 కొరింథీయులకు', ta: '1 கொரிந்தியர்', chapters: 16, group: 'Epistles' },
  { en: '2 Corinthians', te: '2 కొరింథీయులకు', ta: '2 கொரிந்தியர்', chapters: 13, group: 'Epistles' },
  { en: 'Galatians', te: 'గలతీయులకు', ta: 'கலாத்தியர்', chapters: 6, group: 'Epistles' },
  { en: 'Ephesians', te: 'ఎఫెసీయులకు', ta: 'எபேசியர்', chapters: 6, group: 'Epistles' },
  { en: 'Philippians', te: 'ఫిలిప్పీయులకు', ta: 'பிலிப்பியர்', chapters: 4, group: 'Epistles' },
  { en: 'Colossians', te: 'కొలొస్సయులకు', ta: 'கொலோசெயர்', chapters: 4, group: 'Epistles' },
  { en: '1 Thessalonians', te: '1 థెస్సలొనీకయులకు', ta: '1 தெசலோனிக்கேயர்', chapters: 5, group: 'Epistles' },
  { en: '2 Thessalonians', te: '2 థెస్సలొనీకయులకు', ta: '2 தெசலோனிக்கேயர்', chapters: 3, group: 'Epistles' },
  { en: '1 Timothy', te: '1 తిమోతికి', ta: '1 தீமோத்தேயு', chapters: 6, group: 'Epistles' },
  { en: '2 Timothy', te: '2 తిమోతికి', ta: '2 தீமோத்தேயு', chapters: 4, group: 'Epistles' },
  { en: 'Titus', te: 'తీతుకు', ta: 'தீத்து', chapters: 3, group: 'Epistles' },
  { en: 'Philemon', te: 'ఫిలేమోనుకు', ta: 'பிலேமோன்', chapters: 1, group: 'Epistles' },
  // General Epistles
  { en: 'Hebrews', te: 'హెబ్రీయులకు', ta: 'எபிரேயர்', chapters: 13, group: 'Epistles' },
  { en: 'James', te: 'యాకోబు', ta: 'யாக்கோபு', chapters: 5, group: 'Epistles' },
  { en: '1 Peter', te: '1 పేతురు', ta: '1 பேதுரு', chapters: 5, group: 'Epistles' },
  { en: '2 Peter', te: '2 పేతురు', ta: '2 பேதுரு', chapters: 3, group: 'Epistles' },
  { en: '1 John', te: '1 యోహాను', ta: '1 யோவான்', chapters: 5, group: 'Epistles' },
  { en: '2 John', te: '2 యోహాను', ta: '2 யோவான்', chapters: 1, group: 'Epistles' },
  { en: '3 John', te: '3 యోహాను', ta: '3 யோவான்', chapters: 1, group: 'Epistles' },
  { en: 'Jude', te: 'యూదా', ta: 'யூதா', chapters: 1, group: 'Epistles' },
  // Prophecy
  { en: 'Revelation', te: 'ప్రకటన గ్రంథము', ta: 'வெளிப்படுத்தின விசேஷம்', chapters: 22, group: 'Prophecy' },
];

export const BIBLE_BOOK_GROUPS_EN: { [group: string]: string[] } = {};
export const BIBLE_BOOK_GROUPS_TE: { [group: string]: string[] } = {};
export const BIBLE_BOOK_GROUPS_TA: { [group: string]: string[] } = {};

// Helper map to quickly find metadata by English, Telugu, or Tamil name
export const BOOK_METADATA_MAP: Record<string, BookMetadata> = {};

BIBLE_METADATA.forEach(book => {
    // English Groups
    if (!BIBLE_BOOK_GROUPS_EN[book.group]) {
        BIBLE_BOOK_GROUPS_EN[book.group] = [];
    }
    BIBLE_BOOK_GROUPS_EN[book.group].push(book.en);

    // Telugu Groups
    const teGroupMap: Record<string, string> = {
        'Pentateuch': 'పంచకాండములు',
        'History': 'చరిత్ర',
        'Poetry': 'కావ్య గ్రంథములు',
        'Major Prophets': 'పెద్ద ప్రవక్తలు',
        'Minor Prophets': 'చిన్న ప్రవక్తలు',
        'Gospels': 'సువార్తలు',
        'Epistles': 'పత్రికలు',
        'Prophecy': 'ప్రవచన గ్రంథము'
    };
    const teGroup = teGroupMap[book.group] || book.group;
    
    if (!BIBLE_BOOK_GROUPS_TE[teGroup]) {
        BIBLE_BOOK_GROUPS_TE[teGroup] = [];
    }
    BIBLE_BOOK_GROUPS_TE[teGroup].push(book.te);

    // Tamil Groups
     const taGroupMap: Record<string, string> = {
        'Pentateuch': 'பஞ்சாகமம்',
        'History': 'சரித்திரம்',
        'Poetry': 'காவியம்',
        'Major Prophets': 'பெரிய தீர்க்கதரிசிகள்',
        'Minor Prophets': 'சிறிய தீர்க்கதரிசிகள்',
        'Gospels': 'நற்செய்தி நூல்கள்',
        'Epistles': 'நிருபங்கள்',
        'Prophecy': 'தீர்க்கதரிசனம்'
    };
    const taGroup = taGroupMap[book.group] || book.group;

    if (!BIBLE_BOOK_GROUPS_TA[taGroup]) {
        BIBLE_BOOK_GROUPS_TA[taGroup] = [];
    }
    BIBLE_BOOK_GROUPS_TA[taGroup].push(book.ta);


    // Populate Map
    BOOK_METADATA_MAP[book.en] = book;
    BOOK_METADATA_MAP[book.te] = book;
    BOOK_METADATA_MAP[book.ta] = book;
});


export const BIBLE_DATA: BibleData = {
  english: {
    KJV: {},
    NKJV: {},
    ESV: {},
    NASB: {},
  },
  telugu: {},
  tamil: {}
};

export const SONG_DATA: SongData = {
    'Praise & Worship': {
        'English': [
            {
                title: "What A Beautiful Name",
                artist: "Hillsong Worship",
                album: "Let There Be Light",
                year: 2016,
                language: 'English',
                lyricist: "Brooke Ligertwood & Ben Fielding",
                summary: "A powerful anthem celebrating the name of Jesus and His victory over sin and death.",
                background: "Written for the 2016 Hillsong Conference, it won the 2018 Grammy Award for Best Contemporary Christian Music Performance/Song.",
                theme: "Name of Jesus, Power, Majesty, Salvation",
                lyrics: `You were the Word at the beginning
One With God the Lord Most High
Your hidden glory in creation
Now revealed in You our Christ

What a beautiful Name it is
What a beautiful Name it is
The Name of Jesus Christ my King
What a beautiful Name it is
Nothing compares to this
What a beautiful Name it is
The Name of Jesus`,
                youtubeUrl: "https://www.youtube.com/watch?v=nQWFzMvCfLE",
                spotifyUrl: "https://open.spotify.com/track/4KLj9QjEhJl2WU50mxaxhE",
                imageUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop"
            },
        ],
        'Telugu': [
            {
                title: "Nee Maata Naa Paathalaku",
                artist: "John Nissy",
                album: "Single",
                year: 2020,
                language: 'Telugu',
                lyricist: "John Nissy",
                summary: "A song declaring that God's word is a lamp to our feet and a light to our path, based on Psalm 119:105.",
                background: "A popular contemporary Telugu Christian song that encourages believers to rely on the guidance of Scripture.",
                theme: "God's Word, Guidance, Light, Trust",
                lyrics: `నీ మాట నా పాదాలకు దీపము
నా త్రోవకు వెలుగును
నీ వాక్యమే నన్ను బ్రతికించెను
బాధలలో నెమ్మదినిచ్చెను`,
                youtubeUrl: "https://www.youtube.com/watch?v=k6t_Pn9sH6k",
                spotifyUrl: "https://open.spotify.com/track/4V2M4Z2jV1X5B0b5t8T7qY",
                imageUrl: "https://images.unsplash.com/photo-1593011378399-22a40b9d99f3?q=80&w=2670&auto=format&fit=crop"
            }
        ]
    },
    'Classic Hymns': {
        'English': [
            {
                title: "Amazing Grace",
                artist: "John Newton",
                album: "Olney Hymns",
                year: 1779,
                language: 'English',
                lyricist: "John Newton",
                summary: "One of the most recognizable Christian hymns, it speaks of profound gratitude for God's saving grace.",
                background: "Written by the Anglican clergyman and former slave trader John Newton, it was his personal testimony of spiritual conversion.",
                theme: "Grace, Salvation, Redemption, Testimony",
                lyrics: `Amazing grace! How sweet the sound
That saved a wretch like me!
I once was lost, but now am found;
Was blind, but now I see.`,
                youtubeUrl: "https://www.youtube.com/watch?v=h3h035Ew5xI",
                spotifyUrl: "https://open.spotify.com/track/3Yp1AlQk06l4w2Teno8p3S",
                imageUrl: "https://images.unsplash.com/photo-1594979222473-0504d7c54133?q=80&w=2670&auto=format&fit=crop"
            }
        ]
    }
};

export const EVENTS: Event[] = [
    { id: 1, title: 'Youth Fellowship Friday', date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(), city: 'Hyderabad', description: 'A special evening for youth with live music, a powerful message, and fun games. Dinner will be provided.' },
    { id: 2, title: 'Sunday Morning Worship Service', date: new Date(new Date().setDate(new Date().getDate() + 4)).toISOString(), city: 'Mumbai', description: 'Join us for our weekly worship service for the whole family, featuring a sermon from Pastor John.' },
    { id: 3, title: 'Mid-Week Bible Study', date: new Date(new Date().setDate(new Date().getDate() + 6)).toISOString(), city: 'Delhi', description: 'An in-depth study of the book of Romans. All are welcome, regardless of your Bible knowledge.' },
    { id: 4, title: 'Community Outreach & Food Drive', date: new Date(new Date().setDate(new Date().getDate() + 11)).toISOString(), city: 'Chennai', description: 'Help us serve the local community by distributing food and supplies. Volunteers needed.' },
    { id: 5, title: 'Worship Night', date: new Date(new Date().setDate(new Date().getDate() + 16)).toISOString(), city: 'Hyderabad', description: 'An extended evening of praise and worship. Come ready to lift your voice and encounter God.' },
    { id: 6, title: 'Men\'s Breakfast', date: new Date(new Date().setDate(new Date().getDate() + 9)).toISOString(), city: 'Kolkata', description: 'A time for men to connect, share, and grow together over breakfast. Guest speaker on "Faithful Leadership".' }
];
