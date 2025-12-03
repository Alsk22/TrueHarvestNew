import type { BibleData, SongData, Event, User } from '../types';

export const USERS: User[] = [
  { email: 'admin@trueharvest.app', role: 'admin' },
  { email: 'user1@gmail.com', role: 'user' },
  { email: 'user2@gmail.com', role: 'user' },
];

interface BookMetadata {
  en: string;
  te: string;
  chapters: number;
  group: string;
}

export const BIBLE_METADATA: BookMetadata[] = [
  // Pentateuch / Law
  { en: 'Genesis', te: 'ఆదికాండము', chapters: 50, group: 'Pentateuch' },
  { en: 'Exodus', te: 'నిర్గమకాండము', chapters: 40, group: 'Pentateuch' },
  { en: 'Leviticus', te: 'లేవీయకాండము', chapters: 27, group: 'Pentateuch' },
  { en: 'Numbers', te: 'సంఖ్యాకాండము', chapters: 36, group: 'Pentateuch' },
  { en: 'Deuteronomy', te: 'ద్వితీయోపదేశకాండము', chapters: 34, group: 'Pentateuch' },
  // History
  { en: 'Joshua', te: 'యెహోషువ', chapters: 24, group: 'History' },
  { en: 'Judges', te: 'న్యాయాధిపతులు', chapters: 21, group: 'History' },
  { en: 'Ruth', te: 'రూతు', chapters: 4, group: 'History' },
  { en: '1 Samuel', te: '1 సమూయేలు', chapters: 31, group: 'History' },
  { en: '2 Samuel', te: '2 సమూయేలు', chapters: 24, group: 'History' },
  { en: '1 Kings', te: '1 రాజులు', chapters: 22, group: 'History' },
  { en: '2 Kings', te: '2 రాజులు', chapters: 25, group: 'History' },
  { en: '1 Chronicles', te: '1 దినవృత్తాంతములు', chapters: 29, group: 'History' },
  { en: '2 Chronicles', te: '2 దినవృత్తాంతములు', chapters: 36, group: 'History' },
  { en: 'Ezra', te: 'ఎజ్రా', chapters: 10, group: 'History' },
  { en: 'Nehemiah', te: 'నెహెమ్యా', chapters: 13, group: 'History' },
  { en: 'Esther', te: 'ఎస్తేరు', chapters: 10, group: 'History' },
  // Poetry
  { en: 'Job', te: 'యోబు', chapters: 42, group: 'Poetry' },
  { en: 'Psalms', te: 'కీర్తనల గ్రంథము', chapters: 150, group: 'Poetry' },
  { en: 'Proverbs', te: 'సామెతలు', chapters: 31, group: 'Poetry' },
  { en: 'Ecclesiastes', te: 'ప్రసంగి', chapters: 12, group: 'Poetry' },
  { en: 'Song of Solomon', te: 'పరమగీతము', chapters: 8, group: 'Poetry' },
  // Major Prophets
  { en: 'Isaiah', te: 'యెషయా', chapters: 66, group: 'Major Prophets' },
  { en: 'Jeremiah', te: 'యిర్మీయా', chapters: 52, group: 'Major Prophets' },
  { en: 'Lamentations', te: 'విలాపవాక్యములు', chapters: 5, group: 'Major Prophets' },
  { en: 'Ezekiel', te: 'యెహెజ్కేలు', chapters: 48, group: 'Major Prophets' },
  { en: 'Daniel', te: 'దానియేలు', chapters: 12, group: 'Major Prophets' },
  // Minor Prophets
  { en: 'Hosea', te: 'హోషేయ', chapters: 14, group: 'Minor Prophets' },
  { en: 'Joel', te: 'యోవేలు', chapters: 3, group: 'Minor Prophets' },
  { en: 'Amos', te: 'ఆమోసు', chapters: 9, group: 'Minor Prophets' },
  { en: 'Obadiah', te: 'ఓబద్యా', chapters: 1, group: 'Minor Prophets' },
  { en: 'Jonah', te: 'యోనా', chapters: 4, group: 'Minor Prophets' },
  { en: 'Micah', te: 'మీకా', chapters: 7, group: 'Minor Prophets' },
  { en: 'Nahum', te: 'నహూము', chapters: 3, group: 'Minor Prophets' },
  { en: 'Habakkuk', te: 'హబక్కూకు', chapters: 3, group: 'Minor Prophets' },
  { en: 'Zephaniah', te: 'జెఫన్యా', chapters: 3, group: 'Minor Prophets' },
  { en: 'Haggai', te: 'హగ్గయి', chapters: 2, group: 'Minor Prophets' },
  { en: 'Zechariah', te: 'జెకర్యా', chapters: 14, group: 'Minor Prophets' },
  { en: 'Malachi', te: 'మలాకీ', chapters: 4, group: 'Minor Prophets' },
  // New Testament - Gospels
  { en: 'Matthew', te: 'మత్తయి', chapters: 28, group: 'Gospels' },
  { en: 'Mark', te: 'మార్కు', chapters: 16, group: 'Gospels' },
  { en: 'Luke', te: 'లూకా', chapters: 24, group: 'Gospels' },
  { en: 'John', te: 'యోహాను', chapters: 21, group: 'Gospels' },
  // History
  { en: 'Acts', te: 'అపొస్తలుల కార్యములు', chapters: 28, group: 'History' },
  // Epistles (Pauline)
  { en: 'Romans', te: 'రోమీయులకు', chapters: 16, group: 'Epistles' },
  { en: '1 Corinthians', te: '1 కొరింథీయులకు', chapters: 16, group: 'Epistles' },
  { en: '2 Corinthians', te: '2 కొరింథీయులకు', chapters: 13, group: 'Epistles' },
  { en: 'Galatians', te: 'గలతీయులకు', chapters: 6, group: 'Epistles' },
  { en: 'Ephesians', te: 'ఎఫెసీయులకు', chapters: 6, group: 'Epistles' },
  { en: 'Philippians', te: 'ఫిలిప్పీయులకు', chapters: 4, group: 'Epistles' },
  { en: 'Colossians', te: 'కొలొస్సయులకు', chapters: 4, group: 'Epistles' },
  { en: '1 Thessalonians', te: '1 థెస్సలొనీకయులకు', chapters: 5, group: 'Epistles' },
  { en: '2 Thessalonians', te: '2 థెస్సలొనీకయులకు', chapters: 3, group: 'Epistles' },
  { en: '1 Timothy', te: '1 తిమోతికి', chapters: 6, group: 'Epistles' },
  { en: '2 Timothy', te: '2 తిమోతికి', chapters: 4, group: 'Epistles' },
  { en: 'Titus', te: 'తీతుకు', chapters: 3, group: 'Epistles' },
  { en: 'Philemon', te: 'ఫిలేమోనుకు', chapters: 1, group: 'Epistles' },
  // General Epistles
  { en: 'Hebrews', te: 'హెబ్రీయులకు', chapters: 13, group: 'Epistles' },
  { en: 'James', te: 'యాకోబు', chapters: 5, group: 'Epistles' },
  { en: '1 Peter', te: '1 పేతురు', chapters: 5, group: 'Epistles' },
  { en: '2 Peter', te: '2 పేతురు', chapters: 3, group: 'Epistles' },
  { en: '1 John', te: '1 యోహాను', chapters: 5, group: 'Epistles' },
  { en: '2 John', te: '2 యోహాను', chapters: 1, group: 'Epistles' },
  { en: '3 John', te: '3 యోహాను', chapters: 1, group: 'Epistles' },
  { en: 'Jude', te: 'యూదా', chapters: 1, group: 'Epistles' },
  // Prophecy
  { en: 'Revelation', te: 'ప్రకటన గ్రంథము', chapters: 22, group: 'Prophecy' },
];

export const BIBLE_BOOK_GROUPS_EN: { [group: string]: string[] } = {};
export const BIBLE_BOOK_GROUPS_TE: { [group: string]: string[] } = {};

// Helper map to quickly find metadata by English or Telugu name
export const BOOK_METADATA_MAP: Record<string, BookMetadata> = {};

BIBLE_METADATA.forEach(book => {
    // English Groups
    if (!BIBLE_BOOK_GROUPS_EN[book.group]) {
        BIBLE_BOOK_GROUPS_EN[book.group] = [];
    }
    BIBLE_BOOK_GROUPS_EN[book.group].push(book.en);

    // Telugu Groups (using simple mapping of group names for display)
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

    // Populate Map
    BOOK_METADATA_MAP[book.en] = book;
    BOOK_METADATA_MAP[book.te] = book;
});


export const BIBLE_DATA: BibleData = {
  english: {
    KJV: {},
    NKJV: {},
    ESV: {},
  },
  telugu: {}
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