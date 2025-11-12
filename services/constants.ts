
import type { BibleData, SongData, Event } from '../types';

export const BIBLE_BOOK_GROUPS_EN: { [group: string]: string[] } = {
  'Pentateuch': ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
  'Gospels': ['Matthew', 'Mark', 'Luke', 'John'],
};

export const BIBLE_BOOK_GROUPS_TE: { [group: string]: string[] } = {
  'పంచకాండములు': ['ఆదికాండము', 'నిర్గమకాండము', 'లేవీయకాండము', 'సంఖ్యాకాండము', 'ద్వితీయోపదేశకాండము'],
  'సువార్తలు': ['మత్తయి', 'మార్కు', 'లూకా', 'యోహాను'],
};

export const BIBLE_DATA: BibleData = {
  english: {
    KJV: {
      'Genesis': {
        1: {
          1: 'In the beginning God created the heaven and the earth.',
          2: 'And the earth was without form, and void; and darkness was upon the face of thedeep. And the Spirit of God moved upon the face of the waters.',
          3: 'And God said, Let there be light: and there was light.',
        },
        2: {
          1: 'Thus the heavens and the earth were finished, and all the host of them.',
          2: 'And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.',
        }
      },
      'John': {
        1: {
          1: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
          2: 'The same was in the beginning with God.',
        },
         3: {
            16: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
        }
      },
      'Matthew': { 1: { 1: "The book of the generation of Jesus Christ, the son of David, the son of Abraham."}},
      'Mark': { 1: { 1: "The beginning of the gospel of Jesus Christ, the Son of God;"}},
      'Luke': { 1: { 1: "Forasmuch as many have taken in hand to set forth in order a declaration of those things which are most surely believed among us,"}},
      'Exodus': { 1: { 1: "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob."}},
      'Leviticus': { 1: { 1: "And the LORD called unto Moses, and spake unto him out of the tabernacle of the congregation, saying,"}},
      'Numbers': { 1: { 1: "And the LORD spake unto Moses in the wilderness of Sinai, in the tabernacle of the congregation, on the first day of the second month, in the second year after they were come out of the land of Egypt, saying,"}},
      'Deuteronomy': { 1: { 1: "These be the words which Moses spake unto all Israel on this side Jordan in the wilderness, in the plain over against the Red sea, between Paran, and Tophel, and Laban, and Hazeroth, and Dizahab."}}
    },
    NKJV: {
       'Genesis': {
        1: {
          1: 'In the beginning God created the heavens and the earth.',
          2: 'The earth was without form, and void; and darkness was on the face of the deep. And the Spirit of God was hovering over the face of the waters.',
          3: 'Then God said, "Let there be light"; and there was light.',
        },
      },
      'John': {
        1: {
           1: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
           2: 'He was in the beginning with God.',
        },
        3: {
            16: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life."
        }
      }
    },
    ESV: {
       'Genesis': {
        1: {
          1: 'In the beginning, God created the heavens and the earth.',
          2: 'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
          3: 'And God said, "Let there be light," and there was light.',
        },
      },
      'John': {
        1: {
           1: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
           2: 'He was in the beginning with God.',
        },
        3: {
            16: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."
        }
      }
    },
  },
  telugu: {
    'ఆదికాండము': {
      1: {
        1: 'ఆదియందు దేవుడు భూమ్యాకాశములను సృజించెను.',
        2: 'భూమి నిరాకారముగాను శూన్యముగాను ఉండెను; చీకటి అగాధ జలము పైన కమ్మియుండెను; దేవుని ఆత్మ జలములపైన అల్లాడుచుండెను.',
        3: 'దేవుడు వెలుగు కమ్మని పలుకగా వెలుగు కలిగెను.',
      },
      21: {
        1: "యెహోవా తాను చెప్పిన ప్రకారము శారాను దర్శించెను. యెహోవా తానిచ్చిన మాటచొప్పున శారానుగూర్చి చేసెను.",
        2: "ఎట్లనగా దేవుడు అబ్రాహా ముతో చెప్పిన నిర్ణయ కాలములో శారా గర్భవతియై అతని ముసలితనమందు అతనికి కుమారుని కనెను.",
        3: "అప్పుడు అబ్రాహాము తనకు పుట్టినవాడును తనకు శారా కనినవాడునైన తన కుమారునికి ఇస్సాకు అను పేరుపెట్టెను.",
        4: "మరియు దేవుడు అబ్రాహాము కాజ్ఞాపించిన ప్రకారము అతడు ఎనిమిది దినముల వాడైన ఇస్సాకు అను తన కుమారునికి సున్నతి చేసెను.",
        5: "అబ్రాహాము కుమారుడైన ఇస్సాకు అతనికి పుట్టి నప్పుడు అతడు నూరేండ్లవాడు.",
        6: "అప్పుడు శారా దేవుడు నాకు నవ్వు కలుగజేసెను. వినువారెల్ల నా విషయమై నవ్వుదురనెను.",
        7: "మరియు శారా పిల్లలకు స్తన్యమిచ్చునని యెవరు అబ్రాహాముతో చెప్పును నేను అతని ముసలితనమందు కుమారుని కంటిని గదా? అనెను.",
        8: "ఆ పిల్లవాడు పెరిగి పాలు విడిచెను. ఇస్సాకు పాలు విడిచిన దినమందు అబ్రాహాము గొప్ప విందు చేసెను.",
        9: "అప్పుడు అబ్రాహామునకు ఐగుప్తీయురాలైన హాగరు కనిన కుమారుడు పరిహసించుట శారా చూచి",
        10: "ఈ దాసిని దీని కుమారుని వెళ్లగొట్టుము; ఈ దాసి కుమారుడు నా కుమారుడైన ఇస్సాకుతో వారసుడై యుండడని అబ్రా హాముతో అనెను.",
        11: "అతని కుమారునిబట్టి ఆ మాట అబ్రాహామునకు మిక్కిలి దుఃఖము కలుగజేసెను.",
        12: "అయితే దేవుడు ఈ చిన్న వానిబట్టియు నీ దాసినిబట్టియు నీవు దుఃఖపడవద్దు. శారా నీతో చెప్పు ప్రతి విషయములో ఆమె మాట వినుము; ఇస్సాకువలన అయినదియే నీ సంతానమనబడును.",
        13: "అయినను ఈ దాసి కుమారుడును నీ సంతా నమే గనుక అతనికూడ ఒక జనముగా చేసెదనని అబ్రాహాముతో చెప్పెను.",
        14: "కాబట్టి తెల్లవారినప్పుడు అబ్రాహాము లేచి ఆహారమును నీళ్ల తిత్తిని తీసికొని ఆ పిల్లవానితోకూడ హాగరునకు అప్పగించి ఆమె భుజము మీద వాటిని పెట్టి ఆమెను పంపివేసెను. ఆమె వెళ్లి బెయేర్షెబా అరణ్యములో ఇటు అటు తిరుగుచుండెను.",
        15: "ఆ తిత్తిలోని నీళ్లు అయిపోయిన తరువాత ఆమె ఒక పొదక్రింద ఆ చిన్నవాని పడవేసి",
        16: "యీ పిల్లవాని చావు నేను చూడలేనని అనుకొని, వింటి వేతదూరము వెళ్లి అతని కెదురుగా కూర్చుండెను. ఆమె యెదురుగా కూర్చుండి యెలుగెత్తి యేడ్చెను.",
        17: "దేవుడు ఆ చిన్నవాని మొరను వినెను. అప్పుడు దేవుని దూత ఆకాశమునుండి హాగరును పిలిచిహాగరూ నీకేమివచ్చినది? భయపడకుము; ఆ చిన్నవాడున్న చోట దేవుడు వాని స్వరము విని యున్నాడు;",
        18: "నీవు లేచి ఆ చిన్నవాని లేవనెత్తి నీ చేత పట్టుకొనుము; వానిని గొప్ప జనముగా చేసెదనని ఆమెతో అనెను.",
        19: "మరియు దేవుడు ఆమె కన్నులు తెరచినందున ఆమె నీళ్ల ఊట చూచి వెళ్లి ఆ తిత్తిని నీళ్లతో నింపి చిన్నవానికి త్రాగనిచ్చెను.",
        20: "దేవుడు ఆ చిన్నవానితో ఉండెను గనుక అతడు పెరిగి అరణ్యములో కాపురముండి విలుకాడాయెను."
      }
    }
  }
};

// Fix: Add missing SONG_DATA constant to be exported for use in the SongLibrary component.
export const SONG_DATA: SongData = {
  'Worship': {
    'English': [
      {
        title: "What A Beautiful Name",
        artist: "Hillsong Worship",
        album: "Let There Be Light",
        year: 2016,
        language: 'English',
        lyricist: "Brooke Ligertwood & Ben Fielding",
        summary: "A song declaring the power and beauty of the name of Jesus.",
        background: "Written for the Hillsong Conference in 2016, it quickly became a global anthem.",
        theme: "Name of Jesus, Power, Majesty",
        lyrics: `You were the Word at the beginning
One with God the Lord Most High
Your hidden glory in creation
Now revealed in You our Christ

What a beautiful Name it is
What a beautiful Name it is
The Name of Jesus Christ my King`,
        youtubeUrl: "https://www.youtube.com/watch?v=nQWFzMvCfLE",
        spotifyUrl: "https://open.spotify.com/track/4KLj9QjEhJl2WU50mxmJeA",
        imageUrl: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=2670&auto=format&fit=crop",
      },
       {
        title: "Reckless Love",
        artist: "Cory Asbury",
        album: "Reckless Love",
        year: 2018,
        language: 'English',
        lyricist: "Cory Asbury, Caleb Culver, Ran Jackson",
        summary: "A song about the overwhelming, never-ending, reckless love of God.",
        background: "Inspired by the parable of the lost sheep, it became a massive hit in contemporary Christian music.",
        theme: "God's Love, Grace, Pursuit",
        lyrics: `Oh, the overwhelming, never-ending, reckless love of God
Oh, it chases me down, fights 'til I'm found, leaves the ninety-nine
I couldn't earn it, and I don't deserve it, still, You give Yourself away`,
        youtubeUrl: "https://www.youtube.com/watch?v=Sc6SSHuZvQE",
        spotifyUrl: "https://open.spotify.com/track/0rH0mprtecH3grD9HFM5AD",
        imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2669&auto=format&fit=crop",
      }
    ],
    'Telugu': [
       {
        title: "Nee Maata Naa Paathalaku",
        artist: "Bro. Yesanna",
        album: "Yesanna Ministries",
        year: 1995,
        language: 'Telugu',
        lyricist: "Bro. Yesanna",
        summary: "A classic Telugu Christian song about the Word of God being a lamp to our feet.",
        background: "One of the most well-known songs from Bro. Yesanna's ministry.",
        theme: "God's Word, Guidance, Light",
        lyrics: `నీ మాట నా పాదాలకు దీపం
నా త్రోవకు వెలుగు
నీ వాక్యం నన్ను బ్రతికించెను
బాధలో నెమ్మదినిచ్చెను`,
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        spotifyUrl: "https://open.spotify.com/track/4cOdK2wGLETOMs3k9yP1Q",
        imageUrl: "https://images.unsplash.com/photo-1489549132488-d00b7d80e422?q=80&w=2574&auto=format&fit=crop",
      }
    ]
  },
  'Hymns': {
    'English': [
       {
        title: "Amazing Grace",
        artist: "John Newton",
        album: "Olney Hymns",
        year: 1779,
        language: 'English',
        lyricist: "John Newton",
        summary: "A timeless hymn about God's redeeming grace.",
        background: "Written by John Newton, a former slave trader who converted to Christianity.",
        theme: "Grace, Redemption, Salvation",
        lyrics: `Amazing grace! How sweet the sound
That saved a wretch like me!
I once was lost, but now am found;
Was blind, but now I see.`,
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        spotifyUrl: "https://open.spotify.com/track/4cOdK2wGLETOMs3k9yP1Q",
        imageUrl: "https://images.unsplash.com/photo-1506462945848-ac8ea624570a?q=80&w=2670&auto=format&fit=crop",
      }
    ]
  }
};

// Fix: Add missing EVENTS constant to be exported for use in the EventsCalendar component.
export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Youth Fellowship Night",
    date: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(), // One week from now
    city: "Hyderabad",
    description: "Join us for a night of worship, games, and a powerful message. Dinner will be provided.",
  },
  {
    id: 2,
    title: "Sunday Morning Service",
    date: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(), // 3 days from now
    city: "Chennai",
    description: "Our weekly worship service. All are welcome to join us in praise and learning.",
  },
  {
    id: 3,
    title: "Bible Study: Book of Romans",
    date: new Date(new Date().setDate(new Date().getDate() + 10)).toISOString(), // 10 days from now
    city: "Mumbai",
    description: "A deep dive into the book of Romans. Open to all levels of Bible knowledge.",
  },
   {
    id: 4,
    title: "Community Outreach Program",
    date: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString(), // 2 weeks from now
    city: "Delhi",
    description: "Join us as we serve our local community. Volunteers needed!",
  },
  {
    id: 5,
    title: "Online Prayer Meeting",
    date: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString(),
    city: "Kolkata",
    description: "Join our virtual prayer meeting via Zoom. Link will be shared via email.",
  }
];
