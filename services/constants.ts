import type { SongCategory, Event, BibleBook, BibleBookGroup, BibleVersion } from '../types';

export const SONG_DATA: SongCategory = {
  "Worship": {
    "English": [
      {
        title: "What A Beautiful Name",
        artist: "Hillsong Worship",
        youtubeUrl: "https://www.youtube.com/watch?v=nQWFzMvCfLE",
        spotifyUrl: "https://open.spotify.com/track/4KLj9QjEhJl2WU50mxmJeA",
        lyricist: "Ben Fielding & Brooke Ligertwood",
        album: "Let There Be Light",
        year: "2016",
        background: "Co-written by Ben Fielding and Brooke Ligertwood, this song was born during a Hillsong songwriting trip. The goal was to write a song that honestly and biblically described the nature of God, leading to a powerful declaration of the beauty, wonder, and power of Jesus' name from creation to His resurrection.",
        theme: "The power, beauty, and supremacy of the name of Jesus.",
        summary: "A song about the power and beauty of the name of Jesus, from creation to His victory on the cross.",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        lyrics: `You were the Word at the beginning\nOne with God the Lord Most High\nYour hidden glory in creation\nNow revealed in You our Christ\n\n(Chorus)\nWhat a beautiful Name it is\nWhat a beautiful Name it is\nThe Name of Jesus Christ my King\nWhat a beautiful Name it is\nNothing compares to this\nWhat a beautiful Name it is\nThe Name of Jesus\n\nYou didn't want heaven without us\nSo Jesus, You brought heaven down\nMy sin was great, Your love was greater\nWhat could separate us now?\n\n(Chorus)\n\nDeath could not hold You\nThe veil tore before You\nYou silence the boast of sin and grave\nThe heavens are roaring\nThe praise of Your glory\nFor You are raised to life again\n\nYou have no rival\nYou have no equal\nNow and forever God You reign\nYours is the kingdom\nYours is the glory\nAnd Yours is the Name above all names\n\n(Chorus)`
      },
      {
        title: "Way Maker",
        artist: "Leeland",
        youtubeUrl: "https://www.youtube.com/watch?v=iJCV_2H9xD0",
        spotifyUrl: "https://open.spotify.com/track/2h1z2mQpdsyU1GvDE2I6gH",
        lyricist: "Sinach",
        album: "Way Maker (Live)",
        year: "2015",
        background: "Written by Nigerian gospel artist Sinach, 'Way Maker' was a song of personal testimony about God's faithfulness. It became a global anthem of hope during the 2020 pandemic, sung in churches and hospitals worldwide, reminding people that God is always at work, even when it's not visible.",
        theme: "God's faithfulness, miracles, and constant presence.",
        summary: "Declares that God is a way maker, miracle worker, promise keeper, and light in the darkness, even when we don't see Him working.",
        imageUrl: "https://images.unsplash.com/photo-1534953892558-4c8d10b392a0?q=80&w=2574&auto=format&fit=crop",
        lyrics: `You are here, moving in our midst\nI worship You, I worship You\nYou are here, working in this place\nI worship You, I worship You\n\n(Chorus)\nWay maker, miracle worker, promise keeper\nLight in the darkness, my God, that is who You are\n\nYou are here, touching every heart\nI worship You, I worship You\nYou are here, healing every heart\nI worship You, I worship You\n\n(Chorus)\n\nYou are here, turning lives around\nI worship You, I worship You\nYou are here, mending every heart\nI worship You, I worship You\n\n(Bridge)\nEven when I don't see it, You're working\nEven when I don't feel it, You're working\nYou never stop, You never stop working\nYou never stop, You never stop working\n\n(Chorus)`
      },
       {
        title: "Still (Hide Me Now)",
        artist: "Hillsong Worship",
        youtubeUrl: "https://www.youtube.com/watch?v=O6Fw8DgvTQA",
        spotifyUrl: "https://open.spotify.com/track/2wT8hJMLt2cwJ2SOn8wPzC",
        lyricist: "Reuben Morgan",
        album: "Hope",
        year: "2003",
        background: "Written by Reuben Morgan, this Hillsong classic is inspired by Psalm 46:10 ('Be still, and know that I am God') and the story of Jesus calming the storm. It's a personal declaration of faith, choosing to be still and trust in God's sovereignty when the 'oceans rise and thunders roar' in life.",
        theme: "Trusting God in trials, finding peace in His sovereignty.",
        summary: "A song of finding rest and trust in God amidst life's storms, declaring that He is in control.",
        imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cf1?q=80&w=2670&auto=format&fit=crop",
        lyrics: `Hide me now, under Your wings\nCover me, within Your mighty hand\n\n(Chorus)\nWhen the oceans rise and thunders roar\nI will soar with You above the storm\nFather, You are King over the flood\nI will be still and know You are God\n\nFind rest my soul, in Christ alone\nKnow His power, in quietness and trust\n\n(Chorus)`
      }
    ],
    "Spanish": [
        {
            title: "Qué Gran Nombre",
            artist: "Hillsong en Español",
            youtubeUrl: "https://www.youtube.com/watch?v=x6shd_g-54s",
            spotifyUrl: "https://open.spotify.com/track/0YJYJgAMQ1CoaJsM3T4S7T",
            lyricist: "Ben Fielding & Brooke Ligertwood (Traducción por Toni Romero & Armando Sánchez)",
            album: "El Eco De Su Voz",
            year: "2017",
            background: "As the official Spanish translation of Hillsong's 'What A Beautiful Name,' this version faithfully carries the song's profound theological message to the Spanish-speaking world, celebrating the unmatched power and beauty of the name of Jesus.",
            theme: "The power, beauty, and supremacy of the name of Jesus.",
            summary: "Spanish version of 'What A Beautiful Name,' celebrating the power and beauty of Jesus' name.",
            imageUrl: "https://images.unsplash.com/photo-1519734000305-a6750f55099c?q=80&w=2574&auto=format&fit=crop",
            lyrics: `El Principio fue tu amor\nCon Dios, en la eternidad\nTu gloria oculta en la creación\nSe reveló en nuestro Cristo\n\n(Coro)\nTu Nombre hermoso es\nTu Nombre hermoso es\nEl Nombre de Jesús, mi Rey\nTu Nombre hermoso es\nNo se compara a Él\nTu Nombre hermoso es\nEl Nombre de Jesús\n\nEl cielo no te arrebató\nEl cielo nuestro es hoy\nMi culpa fue, Tu amor mayor\nNada nos podrá separar\n\n(Coro)\n\nLa muerte no te resistió\nEl velo se rasgó\nEl peso del pecado fue\nPor siempre aplastado\nLos cielos rugen hoy\nTu gloria y majestad\nPues has resucitado a vida\n\nNo tienes rival\nNo tienes igual\nHoy y por siempre reinarás\nTuyo es el reino\nTuya es la gloria\nY Tuyo el Nombre sobre todo nombre\n\n(Coro)`
        }
    ],
     "Telugu": [
      {
        title: "అత్యున్నత సింహాసనముపై",
        artist: "డా. పి. సతీష్ కుమార్, హోసన్నా మినిస్ట్రీస్",
        youtubeUrl: "https://www.youtube.com/watch?v=JAm50i5aWQQ",
        spotifyUrl: "https://open.spotify.com/track/4n2V8pTz9jJ5Z2J2J2J2J2",
        lyricist: "డా. పి. సతీష్ కుమార్",
        album: "హోసన్నా 2004",
        year: "2004",
        background: "హోసన్నా మినిస్ట్రీస్ వ్యవస్థాపకులు డాక్టర్ పి. సతీష్ కుమార్ స్వరపరిచిన ఈ గీతం ఆధునిక తెలుగు ఆరాధనకు ఒక మూలస్తంభం. ఇది ప్రకటన గ్రంథం నుండి ప్రేరణ పొంది, పరలోక ఆరాధన యొక్క స్పష్టమైన చిత్రాన్ని అందిస్తుంది, మరియు దేవదూతలు మరియు పెద్దలతో కలిసి దేవుణ్ణి ఆయన దివ్య సింహాసనంపై ఆరాధించడానికి విశ్వాసులను ఆహ్వానిస్తుంది.",
        theme: "ఆరాధన, దేవుని సర్వాధిపత్యం, మరియు పరలోక ఆరాధన",
        summary: "అత్యున్నత సింహాసనంపై ఆసీనుడైన దేవుడిని, దేవదూతలు మరియు పరిశుద్ధులు నిరంతరం స్తుతిస్తుండగా ఆరాధించే ఒక శక్తివంతమైన తెలుగు ఆరాధన గీతం.",
        imageUrl: "https://images.unsplash.com/photo-1555511829-3b0f5896a29e?q=80&w=2574&auto=format&fit=crop",
        lyrics: `అత్యున్నత సింహాసనముపై ఆసీనుడా\nఅత్యంత ప్రేమా స్వరూపివి - మా యేసయ్యా (2)\nనీవే మాకు ఆధారము - నీవే మాకు ఆధారము (2)\nఆరాధనా ఆరాధనా - ఆరాధనా ఆరాధనా (2)\n\n(Stanza 1)\nవేలాది దూతలతో - పరిశుద్ధుల సమూహముతో (2)\nకొనియాడబడుచున్నవాడా - కోటి స్తుతులకు అర్హుడా (2)\n\n(Chorus)\nఆరాధనా ఆరాధనా - ఆరాధనా ఆరాధనా (2)\n\n(Stanza 2)\nరాత్రింబవళ్ళు నిన్ను - ఆరాధించుచున్నామయ్యా (2)\nపరిశుద్ధుడు పరిశుద్ధుడని - పొగడుచున్నామయ్యా (2)\n\n(Chorus)\nఆరాధనా ఆరాధనా - ఆరాధనా ఆరాధనా (2)`
      }
    ]
  },
  "Praise": {
    "English": [
      {
        title: "10,000 Reasons (Bless the Lord)",
        artist: "Matt Redman",
        youtubeUrl: "https://www.youtube.com/watch?v=XtwIT8JjddM",
        spotifyUrl: "https://open.spotify.com/track/0fxpHK3aw2iEBE0t0g32L5",
        lyricist: "Matt Redman & Jonas Myrin",
        album: "10,000 Reasons",
        year: "2011",
        background: "Matt Redman, inspired by the opening of Psalm 103, collaborated with Jonas Myrin to write this anthem. The idea was to create a song that listed the many reasons to praise God, encouraging a lifetime of worship that continues from the morning sunrise until our final breath and into eternity.",
        theme: "Unending praise and worship to God.",
        summary: "A powerful anthem of praise, inspired by Psalm 103, giving countless reasons to bless the Lord's holy name throughout one's entire life.",
        imageUrl: "https://images.unsplash.com/photo-1438982354313-5a4e5f03f2a1?q=80&w=2670&auto=format&fit=crop",
        lyrics: `(Chorus)\nBless the Lord, O my soul\nO my soul\nWorship His holy name\nSing like never before\nO my soul\nI'll worship Your holy name\n\n(Verse 1)\nThe sun comes up, it's a new day dawning\nIt's time to sing Your song again\nWhatever may pass, and whatever lies before me\nLet me be singing when the evening comes\n\n(Chorus)\n\n(Verse 2)\nYou're rich in love, and You're slow to anger\nYour name is great, and Your heart is kind\nFor all Your goodness, I will keep on singing\nTen thousand reasons for my heart to find\n\n(Chorus)\n\n(Verse 3)\nAnd on that day when my strength is failing\nThe end draws near, and my time has come\nStill my soul will sing Your praise unending\nTen thousand years and then forevermore\n\n(Chorus)`
      },
      {
        title: "How Great Is Our God",
        artist: "Chris Tomlin",
        youtubeUrl: "https://www.youtube.com/watch?v=XV4nOVmWW2A",
        spotifyUrl: "https://open.spotify.com/track/0jO4mSz2k9A2o3H2o1T25T",
        lyricist: "Chris Tomlin, Jesse Reeves, & Ed Cash",
        album: "Arriving",
        year: "2004",
        background: "Chris Tomlin was inspired by the greatness of God after reading about it in the Bible and seeing it in creation. The song began with a simple chorus and evolved into a global anthem, with the bridge ('Name above all names...') added later to explicitly celebrate the Trinity: God the Father, Son, and Holy Spirit.",
        theme: "The majesty, splendor, and greatness of God.",
        summary: "A global anthem declaring the greatness, majesty, and Trinitarian nature of God, sung by believers around the world.",
        imageUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=2678&auto=format&fit=crop",
        lyrics: `The splendor of the King, clothed in majesty\nLet all the earth rejoice, all the earth rejoice\nHe wraps Himself in light, and darkness tries to hide\nAnd trembles at His voice, and trembles at His voice\n\n(Chorus)\nHow great is our God, sing with me\nHow great is our God, and all will see\nHow great, how great is our God\n\nAge to age He stands, and time is in His hands\nBeginning and the end, beginning and the end\nThe Godhead, three in one, Father, Spirit, Son\nThe Lion and the Lamb, the Lion and the Lamb\n\n(Chorus)\n\n(Bridge)\nName above all names, worthy of all praise\nMy heart will sing, how great is our God\n\n(Chorus)`
      }
    ],
     "Hindi": [
      {
        title: "Aaj Ka Din",
        artist: "Various Artists",
        youtubeUrl: "https://www.youtube.com/watch?v=Q4Kz-p2sV0M",
        spotifyUrl: "https://open.spotify.com/track/7k9V6oTz6jJ2Z9J9J9J9J9",
        lyricist: "Traditional (based on Psalm 118:24)",
        album: "N/A (Traditional Song)",
        year: "Unknown",
        background: "Directly inspired by Psalm 118:24 ('This is the day the Lord has made; let us rejoice and be glad in it'), this simple, joyful chorus has become a staple in Hindi-speaking congregations. It serves as a powerful, collective declaration to choose joy and gratitude for the gift of each new day.",
        theme: "Joy, gratitude, and celebration of life.",
        summary: "A joyful song based on Psalm 118:24, celebrating the day the Lord has made and choosing to rejoice in it.",
        imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2670&auto=format&fit=crop",
        lyrics: `Aaj ka din Yahova ne banaya hai\nHum usmein aanandit ho, aanandit ho (x2)\n\n(Chorus)\nAanandit ho, aanandit ho\nHum usmein aanandit ho, aanandit ho\n\nPrabhu ko mahima mile\nChahe ho mera apmaan (x2)\nWoh badhe main ghatu\nRahe usi ka dhyaan\n\n(Chorus)`
      },
      {
        title: "Ibadat Karo",
        artist: "Anil Kant",
        youtubeUrl: "https://www.youtube.com/watch?v=f-ekv_H-z_Y",
        spotifyUrl: "https://open.spotify.com/track/1k8V5oTz5jJ1Z8J8J8J8J8",
        lyricist: "Anil Kant",
        album: "Ibadat Karo",
        year: "2004",
        background: "Penned by celebrated Christian artist Anil Kant, 'Ibadat Karo' is an inclusive call to worship. It blends traditional Indian musical styles with contemporary sounds to create an invitation for all people, regardless of background, to worship the one true God who is holy and worthy of praise.",
        theme: "Call to worship and God's worthiness.",
        summary: "A call for all people to worship the Lord, our creator and God, acknowledging His holiness and worth.",
        imageUrl: "https://images.unsplash.com/photo-1598462125123-f9a805a5a2f7?q=80&w=2670&auto=format&fit=crop",
        lyrics: `Ibadat karo, uski ibadat karo\nWo hi to hai, iske layaak\nIbadat karo\n\nPavitra hai, wo pavitra hai\nSenao ka Yahova, pavitra hai\nDharti aakash, uski mahima se\nBhare hue hain\n\nIbadat karo, uski ibadat karo\nWo hi to hai, iske layaak\nIbadat karo\n\nUsko chhod, kisee aur kee\nIbadat na karna\nWo hee hamaara, sirjanhaar hai\nWo hee hamaara, paalanhaar hai`
      },
      {
        title: "Teri Stuti Main Karoon",
        artist: "Bro. Yesanna",
        youtubeUrl: "https://www.youtube.com/watch?v=Mfne5MgZ6FE",
        spotifyUrl: "https://open.spotify.com/track/3G9n8G3fA0iG8Jg6J0J0J0",
        lyricist: "Bro. Yesanna",
        album: "Yesanna Hindi Songs",
        year: "2000s",
        background: "Originally a popular Telugu song by Bro. Yesanna, this Hindi translation maintains the same spirit of intimate and devotional worship. It is a personal prayer, expressing the worshipper's deep desire to praise God with their whole heart and life.",
        theme: "Personal praise, devotion, and intimacy.",
        summary: "A devotional song of praise and worship from the heart, declaring the desire to praise God's name with every breath.",
        imageUrl: "https://images.unsplash.com/photo-1543702495-2f3b89e658a5?q=80&w=2670&auto=format&fit=crop",
        lyrics: `Teri stuti main karoon\nMere yeshu masih (x2)\nDil se, jaan se\nMann se, karoon teri stuti\n\n(Verse 1)\nHallelujah, Hallelujah\nGaunga main sada\nTere liye hi jiyunga main\nYeshu mere khuda\n\n(Verse 2)\nSankat mein, musibat mein\nTu hi mera sahara\nIs duniya ki bheed mein\nTu hi mera kinara`
      }
    ]
  },
  "Thanksgiving": {
    "English": [
        {
            title: "Give Thanks",
            artist: "Don Moen",
            youtubeUrl: "https://www.youtube.com/watch?v=blbslHDgceY",
            spotifyUrl: "https://open.spotify.com/track/6p5Tf1A7z8g3A2e2QRbW8f",
            lyricist: "Henry Smith",
            album: "Give Thanks",
            year: "1978",
            background: "Composer Henry Smith was struggling with a degenerative eye disease that would eventually leave him legally blind. During this difficult time, a pastor's sermon on 2 Corinthians 8:9 ('For you know the grace of our Lord Jesus Christ...') inspired him to write this simple, profound song of gratitude, focusing on what we have in Jesus rather than on personal struggles.",
            theme: "Gratitude and faith in God's provision.",
            summary: "A simple yet profound song of gratitude, encouraging believers to give thanks in all circumstances because of God's gift of Jesus Christ.",
            imageUrl: "https://images.unsplash.com/photo-1542841841-01b34a2e5a84?q=80&w=2670&auto=format&fit=crop",
            lyrics: `Give thanks with a grateful heart\nGive thanks to the Holy One\nGive thanks because He's given\nJesus Christ, His Son\n\n(Chorus)\nAnd now, let the weak say, "I am strong"\nLet the poor say, "I am rich\nBecause of what the Lord has done for us"\n\nGive thanks with a grateful heart\nGive thanks to the Holy One\nGive thanks because He's given\nJesus Christ, His Son\n\n(Chorus)\n\nGive thanks.`
        },
        {
            title: "Count Your Blessings",
            artist: "Johnson Oatman Jr.",
            youtubeUrl: "https://www.youtube.com/watch?v=h-3GCzYI1aY",
            spotifyUrl: "https://open.spotify.com/track/6Yk9jJ2mYJ1XW2m3m4m5m6",
            lyricist: "Johnson Oatman Jr.",
            album: "N/A (Hymn)",
            year: "1897",
            background: "Johnson Oatman Jr. wrote this hymn in 1897 as a remedy for worry and discouragement. The lyrics provide a practical spiritual exercise: when overwhelmed by life's challenges, intentionally shift focus by naming God's blessings one by one. This act of remembrance is meant to bring surprise and renewed joy at God's constant faithfulness.",
            theme: "Gratitude, overcoming discouragement, God's faithfulness.",
            summary: "An encouraging hymn that directs believers to combat discouragement by intentionally recalling and naming God's blessings, which brings renewed perspective and joy.",
            imageUrl: "https://images.unsplash.com/photo-1504145995299-81734509426f?q=80&w=2669&auto=format&fit=crop",
            lyrics: `When upon life's billows you are tempest-tossed,\nWhen you are discouraged, thinking all is lost,\nCount your many blessings, name them one by one,\nAnd it will surprise you what the Lord hath done.\n\n(Chorus)\nCount your blessings, name them one by one,\nCount your blessings, see what God hath done!\nCount your blessings, name them one by one,\nCount your many blessings, see what God hath done.\n\nAre you ever burdened with a load of care?\nDoes the cross seem heavy you are called to bear?\nCount your many blessings, every doubt will fly,\nAnd you will keep singing as the days go by.\n\n(Chorus)\n\nSo, amid the conflict, whether great or small,\nDo not be discouraged, God is over all;\nCount your many blessings, angels will attend,\nHelp and comfort give you to your journey's end.\n\n(Chorus)`
        }
    ]
  },
  "Gospel & Hymns": {
    "English": [
      {
        title: "Above All",
        artist: "Michael W. Smith",
        youtubeUrl: "https://www.youtube.com/watch?v=f2s_eA8tZ-4",
        spotifyUrl: "https://open.spotify.com/track/5v6n5DmitKoR0SHvs1gK28",
        lyricist: "Lenny LeBlanc & Paul Baloche",
        album: "Worship",
        year: "1999",
        background: "Co-written by Lenny LeBlanc and Paul Baloche, 'Above All' was inspired by Philippians 2. The writers contemplated the immense power and authority of Christ, contrasting it with His willing humility and sacrifice on the cross, likening Him to a rose trampled on the ground.",
        theme: "Christ's supremacy and sacrificial love.",
        summary: "A song reflecting on Christ's sacrifice and His supreme worth above all earthly things, powers, and wisdom.",
        imageUrl: "https://images.unsplash.com/photo-1568213813732-c5188f4d8a55?q=80&w=2670&auto=format&fit=crop",
        lyrics: `Above all powers, above all kings\nAbove all nature and all created things\nAbove all wisdom and all the ways of man\nYou were here before the world began\n\nAbove all kingdoms, above all thrones\nAbove all wonders the world has ever known\nAbove all wealth and treasures of the earth\nThere's no way to measure what You're worth\n\n(Chorus)\nCrucified, laid behind a stone\nYou lived to die, rejected and alone\nLike a rose, trampled on the ground\nYou took the fall and thought of me\nAbove all`
      },
      {
        title: "Amazing Grace",
        artist: "John Newton",
        youtubeUrl: "https://www.youtube.com/watch?v=HsTLuqw-i-8",
        spotifyUrl: "https://open.spotify.com/track/3Yp1u52PgeN2pM0u2o2a4w",
        lyricist: "John Newton",
        album: "N/A (Hymn)",
        year: "1779",
        background: "Penned by John Newton in 1772, this hymn is his personal testimony. A former slave trader, Newton experienced a dramatic conversion to Christianity during a violent storm at sea. The lyrics reflect on his profound sense of unworthiness ('a wretch like me') and the overwhelming, undeserved mercy of God that saved him.",
        theme: "God's grace, salvation, and redemption.",
        summary: "A classic hymn about God's saving grace and redemption, born from the personal testimony of a former slave trader.",
        imageUrl: "https://images.unsplash.com/photo-1598191636889-1833a41b5a03?q=80&w=2574&auto=format&fit=crop",
        lyrics: `Amazing grace! How sweet the sound\nThat saved a wretch like me!\nI once was lost, but now am found;\nWas blind, but now am see.\n\n'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!\n\nThrough many dangers, toils, and snares,\nI have already come;\n'Tis grace hath brought me safe thus far,\nAnd grace will lead me home.\n\nThe Lord has promised good to me,\nHis Word my hope secures;\nHe will my Shield and Portion be\nAs long as life endures.\n\nYea, when this flesh and heart shall fail,\nAnd mortal life shall cease,\nI shall possess, within the veil,\nA life of joy and peace.\n\nThe earth shall soon dissolve like snow,\nThe sun forbear to shine;\nBut God, who called me here below,\nWill be forever mine.`
      }
    ]
  }
};


export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Sunday Morning Worship",
    date: "2024-07-28T10:00:00",
    description: "Join us for a time of worship, prayer, and a powerful message from the Word.",
    city: "Hyderabad"
  },
  {
    id: 2,
    title: "Youth Fellowship Night",
    date: "2024-08-02T18:30:00",
    description: "A fun and engaging evening for our youth with games, music, and a relevant message.",
    city: "Hyderabad"
  },
  {
    id: 3,
    title: "Community Outreach Program",
    date: "2024-08-10T09:00:00",
    description: "Serving our local community by providing food and essential supplies to those in need.",
    city: "Chennai"
  },
  {
    id: 4,
    title: "Bible Study: The Book of Romans",
    date: "2024-08-07T19:00:00",
    description: "A deep dive into the foundational truths of the book of Romans. All are welcome.",
    city: "Mumbai"
  },
  {
    id: 5,
    title: "Women's Prayer Meeting",
    date: "2024-08-03T11:00:00",
    description: "A special time for the women of our community to gather for prayer and fellowship.",
    city: "Delhi"
  }
];


export const BIBLE_BOOK_GROUPS: BibleBookGroup[] = [
    {
        group: "The Law (Pentateuch)",
        books: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"]
    },
    {
        group: "History",
        books: ["Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther"]
    },
    {
        group: "Wisdom & Poetry",
        books: ["Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon"]
    },
    {
        group: "Major Prophets",
        books: ["Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel"]
    },
    {
        group: "Minor Prophets",
        books: ["Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"]
    },
    {
        group: "The Gospels",
        books: ["Matthew", "Mark", "Luke", "John"]
    },
    {
        group: "Acts",
        books: ["Acts"]
    },
    {
        group: "Pauline Epistles",
        books: ["Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon"]
    },
    {
        group: "General Epistles",
        books: ["Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude"]
    },
    {
        group: "Revelation",
        books: ["Revelation"]
    }
];

export const BIBLE_DATA_EN: BibleBook = {
  "Genesis": [
    {
      "chapter": 1,
      "verses": [
        { "verse": 1, "text": "In the beginning God created the heavens and the earth." },
        { "verse": 2, "text": "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters." },
        { "verse": 3, "text": "And God said, \"Let there be light,\" and there was light." }
      ]
    },
    {
        "chapter": 3,
        "verses": [
             { "verse": 16, "text": "To the woman he said, \"I will make your pains in childbearing very severe; with painful labor you will give birth to children. Your desire will be for your husband, and he will rule over you.\""}
        ]
    }
  ],
  "Exodus": [
    {
      "chapter": 20,
      "verses": [
        { "verse": 1, "text": "And God spoke all these words:" },
        { "verse": 2, "text": "\"I am the LORD your God, who brought you out of Egypt, out of the land of slavery." },
        { "verse": 3, "text": "\"You shall have no other gods before me." }
      ]
    }
  ],
  "Psalms": [
      {
          "chapter": 1,
          "verses": [
              {"verse": 1, "text": "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers,"},
              {"verse": 2, "text": "but whose delight is in the law of the LORD, and who meditates on his law day and night."},
              {"verse": 3, "text": "That person is like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither— whatever they do prospers."}
          ]
      }
  ],
  "John": [
    {
      "chapter": 3,
      "verses": [
        { "verse": 16, "text": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." }
      ]
    }
  ],
  "Nehemiah": [
    {
      "chapter": 1,
      "verses": [
        { "verse": 1, "text": "The words of Nehemiah son of Hakaliah: In the month of Kislev in the twentieth year, while I was in the citadel of Susa," }
      ]
    }
  ]
};

export const BIBLE_DATA_TE: BibleBook = {
    "ఆదికాండము": [
        {
            "chapter": 1,
            "verses": [
                { "verse": 1, "text": "ఆదియందు దేవుడు భూమ్యాకాశములను సృజించెను." },
                { "verse": 2, "text": "భూమి నిరాకారముగాను శూన్యముగాను ఉండెను; చీకటి అగాధ జలము పైన కమ్మియుండెను; దేవుని ఆత్మ జలములపైన అల్లాడుచుండెను." },
                { "verse": 3, "text": "దేవుడు వెలుగు కమ్మని పలుకగా వెలుగు కలిగెను." },
                { "verse": 4, "text": "వెలుగు మంచిదైనట్టు దేవుడుచూచెను; దేవుడు వెలుగును చీకటిని వేరుపరచెను." },
                { "verse": 5, "text": "దేవుడు వెలుగునకు పగలనియు, చీకటికి రాత్రి అనియు పేరు పెట్టెను. అస్తమయమును ఉదయమును కలుగగా ఒక దినమాయెను." },
                { "verse": 6, "text": "మరియు దేవుడుజలముల మధ్య నొక విశాలము కలిగి ఆ జలములను ఈ జలములను వేరుపరచును గాకని పలికెను." },
                { "verse": 7, "text": "దేవుడు ఆ విశాలము చేసి విశాలము క్రింది జలములను విశాలము మీది జలములను వేరుపరపగా ఆ ప్రకారమాయెను." },
                { "verse": 8, "text": "దేవుడు ఆ విశాలమునకు ఆకాశమని పేరు పెట్టెను. అస్తమయమును ఉదయమును కలుగగా రెండవ దినమాయెను." },
                { "verse": 9, "text": "దేవుడుఆకాశము క్రిందనున్న జలము లొకచోటనే కూర్చబడి ఆరిన నేల కనబడును గాకని పలుకగా ఆ ప్రకారమాయెను." },
                { "verse": 10, "text": "దేవుడు ఆరిన నేలకు భూమి అని పేరు పెట్టెను, జలరాశికి ఆయన సముద్రములని పేరు పెట్టెను, అది మంచిదని దేవుడు చూచెను." },
                { "verse": 11, "text": "దేవుడుగడ్డిని విత్తనములిచ్చు చెట్లను భూమిమీద తమ తమ జాతి ప్రకారము తమలో విత్తనములుగల ఫలమిచ్చు ఫలవృక్షములను భూమి మొలిపించుగాకని పలుకగా ఆ ప్రకార మాయెను." },
                { "verse": 12, "text": "భూమి గడ్డిని తమ తమ జాతి ప్రకారము విత్తనములిచ్చు చెట్లను, తమ తమ జాతి ప్రకారము తమలో విత్తనములుగల ఫలవృక్షములను మొలిపింపగా అది మంచిదని దేవుడు చూచెను" },
                { "verse": 13, "text": "అస్తమయమును ఉదయమును కలుగగా మూడవ దినమాయెను." },
                { "verse": 14, "text": "దేవుడుపగటిని రాత్రిని వేరుపరచునట్లు ఆకాశవిశాల మందు జ్యోతులు కలుగును గాకనియు, అవి సూచనలను కాలములను దిన సంవత్సరములను సూచించుటకై యుండు గాకనియు," },
                { "verse": 15, "text": "భూమిమీద వెలుగిచ్చుటకు అవి ఆకాశ విశాలమందు జ్యోతులై యుండు గాకనియు పలికెను; ఆ ప్రకారమాయెను." },
                { "verse": 16, "text": "దేవుడు ఆ రెండు గొప్ప జ్యోతులను, అనగా పగటిని ఏలుటకు పెద్ద జ్యోతిని రాత్రిని ఏలుటకు చిన్న జ్యోతిని నక్షత్రములను చేసెను." },
                { "verse": 17, "text": "భూమిమీద వెలు గిచ్చుటకును" },
                { "verse": 18, "text": "పగటిని రాత్రిని ఏలుటకును వెలుగును చీక టిని వేరుపరచుటకును దేవుడు ఆకాశ విశాలమందు వాటి నుంచెను; అది మంచిదని దేవుడు చూచెను." },
                { "verse": 19, "text": "అస్తమయ మును ఉదయమును కలుగగా నాలుగవ దినమాయెను." },
                { "verse": 20, "text": "దేవుడుజీవముకలిగి చలించువాటిని జలములు సమృ ద్ధిగా పుట్టించును గాకనియు, పక్షులు భూమిపైని ఆకాశ విశాలములో ఎగురును గాకనియు పలికెను." },
                { "verse": 21, "text": "దేవుడు జల ములలో వాటి వాటి జాతి ప్రకారము జలములు సమృద్ధిగా పుట్టించిన మహా మత్స్యములను, జీవముకలిగి చలించు వాటినన్నిటిని, దాని దాని జాతి ప్రకారము రెక్కలుగల ప్రతి పక్షిని సృజించెను. అది మంచిదని దేవుడు చూచెను." },
                { "verse": 22, "text": "దేవుడు మీరు ఫలించి అభివృద్ధిపొంది సముద్ర జలములలో నిండి యుండుడనియు, పక్షులు భూమిమీద విస్తరించును గాకనియు, వాటిని ఆశీర్వ దించెను." },
                { "verse": 23, "text": "అస్తమయమును ఉదయమును కలుగగా అయి దవ దినమాయెను." },
                { "verse": 24, "text": "దేవుడు వాటి వాటి జాతి ప్రకారము జీవముగల వాటిని, అనగా వాటి వాటి జాతి ప్రకారము పశువులను పురుగులను అడవి జంతువులను భూమి పుట్టించుగాకని పలి కెను; ఆప్రకారమాయెను." },
                { "verse": 25, "text": "దేవుడు ఆ యా జాతుల ప్రకారము అడవి జంతువులను, ఆ యా జాతుల ప్రకారము పశువులను, ఆ యా జాతుల ప్రకారము నేలను ప్రాకు ప్రతి పురుగును చేసెను. అదిమంచిదని దేవుడు చూచెను." },
                { "verse": 26, "text": "దేవుడు మన స్వరూపమందు మన పోలికె చొప్పున నరులను చేయుదము; వారుసముద్రపు చేపలను ఆకాశ పక్షులను పశువులను సమస్త భూమిని భూమిమీద ప్రాకు ప్రతి జంతువును ఏలుదురుగాకనియు పలికెను." },
                { "verse": 27, "text": "దేవుడు తన స్వరూపమందు నరుని సృజించెను; దేవుని స్వరూపమందు వాని సృజించెను; స్త్రీనిగాను పురు షునిగాను వారిని సృజించెను." },
                { "verse": 28, "text": "దేవుడు వారిని ఆశీర్వ దించెను; ఎట్లనగామీరు ఫలించి అభివృద్ధిపొంది విస్తరించి భూమిని నిండించి దానిని లోపరచుకొనుడి; సముద్రపు చేపలను ఆకాశ పక్షులను భూమిమీద ప్రాకు ప్రతి జీవిని ఏలుడని దేవుడు వారితో చెప్పెను." },
                { "verse": 29, "text": "దేవుడు ఇదిగో భూమిమీదనున్న విత్తనములిచ్చు ప్రతి చెట్టును విత్తనములిచ్చు వృక్షఫలముగల ప్రతి వృక్ష మును మీ కిచ్చి యున్నాను; అవి మీ కాహారమగును." },
                { "verse": 30, "text": "భూమిమీదనుండు జంతువులన్నిటికిని ఆకాశ పక్షులన్నిటికిని భూమిమీద ప్రాకు సమస్త జీవులకును పచ్చని చెట్లన్నియు ఆహారమగునని పలికెను. ఆ ప్రకారమాయెను." },
                { "verse": 31, "text": "దేవుడు తాను చేసినది యావత్తును చూచినప్పుడు అది చాలమంచిదిగ నుండెను. అస్తమయమును ఉదయమును కలుగగా ఆరవ దినమాయెను." }
            ]
        },
        {
            "chapter": 2,
            "verses": [
                { "verse": 1, "text": "ఆకాశమును భూమియు వాటిలోనున్న సమస్త సమూ హమును సంపూర్తి చేయబడెను." },
                { "verse": 2, "text": "దేవుడు తాను చేసిన తనపని యేడవదినములోగా సంపూర్తిచేసి, తాను చేసిన తన పని యంతటినుండి యేడవ దినమున విశ్రమించెను." },
                { "verse": 3, "text": "కాబట్టి దేవుడు ఆ యేడవ దినమును ఆశీర్వదించి పరిశుద్ధపరచెను; ఏలయనగా దానిలో దేవుడు తాను చేసినట్టియు, సృజించి నట్టియు తన పని అంతటినుండి విశ్రమించెను." },
                { "verse": 4, "text": "దేవుడైన యెహోవా భూమిని ఆకాశమును చేసిన దినమందు భూమ్యాకాశములు సృజించబడినప్పుడు వాటి వాటి ఉత్పత్తిక్రమము ఇదే." },
                { "verse": 5, "text": "అదివరకు పొలమందలియే పొదయు భూమిమీద నుండలేదు. పొలమందలి యే చెట్టును మొలవలేదు; ఏలయనగా దేవుడైన యెహోవా భూమిమీద వాన కురిపించలేదు, నేలను సేద్యపరచుటక" },
                { "verse": 6, "text": "అయితే ఆవిరి భూమినుండి లేచి నేల అంత టిని తడిపెను." },
                { "verse": 7, "text": "దేవుడైన యెహోవా నేలమంటితో నరుని నిర్మించి వాని నాసికా రంధ్రములలో జీవవాయువును ఊదగా నరుడు జీవాత్మ ఆయెను." },
                { "verse": 8, "text": "దేవుడైన యెహోవా తూర్పున ఏదెనులో ఒక తోటవేసి తాను నిర్మించిన నరుని దానిలో ఉంచెను." },
                { "verse": 9, "text": "మరియు దేవుడైన యెహోవా చూపు నకు రమ్యమైనదియు ఆహారమునకు మంచిదియునైన ప్రతి వృక్షమును, ఆ తోటమధ్యను జీవవృక్షమును, మంచి చెడ్డల తెలివినిచ్చు వృక్షమును నేలనుండి మొలిపించెను." },
                { "verse": 10, "text": "మరియు ఆ తోటను తడుపుటకు ఏదెనులోనుండి ఒక నది బయలు దేరి అక్కడనుండి చీలిపోయి నాలుగు శాఖలాయెను." },
                { "verse": 11, "text": "మొదటిదాని పేరు పీషోను; అది హవీలా దేశమంతటి చుట్టు పారుచున్నది; అక్కడ బంగారమున్నది." },
                { "verse": 12, "text": "ఆ దేశపు బంగారము శ్రేష్ఠమైనది; అక్కడ బోళమును గోమేధికము లును దొరుకును." },
                { "verse": 13, "text": "రెండవ నది పేరు గీహోను; అది కూషు దేశమంతటి చుట్టు పారుచున్నది." },
                { "verse": 14, "text": "మూడవ నది పేరు హిద్దెకెలు; అది అష్షూరు తూర్పు వైపున పారుచున్నది. నాలుగవ నది యూఫ్రటీసు" },
                { "verse": 15, "text": "మరియు దేవుడైన యెహోవా నరుని తీసికొని ఏదెను తోటను సేద్యపరచుటకును దాని కాచుటకును దానిలో ఉంచెను." },
                { "verse": 16, "text": "మరియు దేవుడైన యెహోవాఈ తోటలోనున్న ప్రతి వృక్ష ఫలములను నీవు నిరభ్యంతరముగా తినవచ్చును;" },
                { "verse": 17, "text": "అయితే మంచి చెడ్డల తెలివినిచ్చు వృక్ష ఫలములను తినకూడదు; నీవు వాటిని తిను దినమున నిశ్చయముగా చచ్చెదవని నరుని కాజ్ఞాపించెను." },
                { "verse": 18, "text": "మరియు దేవుడైన యెహోవానరుడు ఒంటరిగా నుండుట మంచిది కాదు; వానికి సాటియైన సహాయ మును వానికొరకు చేయుదుననుకొనెను." },
                { "verse": 19, "text": "దేవుడైన యెహోవా ప్రతి భూజంతువును ప్రతి ఆకాశపక్షిని నేలనుండి నిర్మించి, ఆదాము వాటికి ఏ పేరు పెట్టునో చూచుటకు అతని యొద్దకు వాటిని రప్పించెను. జీవముగల ప్రతిదానికి ఆదాము ఏ పేరు పెట్టెనో ఆ పేరు దానికి కలిగెను." },
                { "verse": 20, "text": "అప్పుడు ఆదాము సమస్త పశువులకును ఆకాశ పక్షులకును సమస్త భూజంతువులకును పేరులు పెట్టెను. అయినను ఆదామునకు సాటియైన సహాయము అతనికి లేక పోయెను." },
                { "verse": 21, "text": "అప్పుడు దేవుడైన యెహోవా ఆదామునకు గాఢనిద్ర కలుగజేసి అతడు నిద్రించినప్పుడు అతని ప్రక్క టముకలలో ఒక దానిని తీసి ఆ చోటును మాంసముతో పూడ్చి వేసెను." },
                { "verse": 22, "text": "తరువాత దేవుడైన యెహోవా తాను ఆదాము నుండి తీసిన ప్రక్కటెముకను స్త్రీనిగా నిర్మించి ఆమెను ఆదాము నొద్దకు తీసికొనివచ్చెను." },
                { "verse": 23, "text": "అప్పుడు ఆదాము ఇట్లనెను నా యెముకలలో ఒక యెముక నా మాంసములో మాంసము ఇది నరునిలోనుండి తీయబడెను గనుక నారి అన బడును." },
                { "verse": 24, "text": "కాబట్టి పురుషుడు తన తండ్రిని తన తల్లిని విడిచి తన భార్యను హత్తుకొనును; వారు ఏక శరీరమైయుందురు." },
                { "verse": 25, "text": "అప్పుడు ఆదామును అతని భార్యయు వారిద్దరు దిగం బరులుగా నుండిరి; అయితే వారు సిగ్గు ఎరుగక యుండిరి." }
            ]
        },
        {
            "chapter": 3,
            "verses": [
                { "verse": 1, "text": "దేవుడైన యెహోవా చేసిన సమస్త భూజంతు వులలో సర్పము యుక్తిగలదై యుండెను. అది ఆ స్త్రీతోఇది నిజమా? ఈ తోట చెట్లలో దేని ఫలముల నైనను మీరు తినకూడదని దేవుడు చెప్పెనా? అని అడి గెను." },
                { "verse": 2, "text": "అందుకు స్త్రీఈ తోట చెట్ల ఫలములను మేము తినవచ్చును;" },
                { "verse": 3, "text": "అయితే తోట మధ్యవున్న చెట్టు ఫలము లనుగూర్చి దేవుడుమీరు చావకుండునట్లు వాటిని తిన కూడదనియు, వాటిని ముట్టకూడదనియు చెప్పెనని సర్ప ముతో అనెను." },
                { "verse": 4, "text": "అందుకు సర్పముమీరు చావనే చావరు;" },
                { "verse": 5, "text": "ఏలయనగా మీరు వాటిని తిను దినమున మీ కన్నులు తెరవబడుననియు, మీరు మంచి చెడ్డలను ఎరిగిన వారై దేవతలవలె ఉందురనియు దేవునికి తెలియునని స్త్రీతో చెప్పగా" },
                { "verse": 6, "text": "స్త్రీ ఆ వృక్షము ఆహారమునకు మంచి దియు, కన్నులకు అందమైనదియు, వివేకమిచ్చు రమ్యమై నదియునై యుండుట చూచినప్పుడు ఆమె దాని ఫలము లలో కొన్ని తీసికొని తిని తనతోపాటు తన భర్తకును ఇచ్చెను, అతడుకూడ తినెను;" },
                { "verse": 7, "text": "అప్పుడు వారిద్దరి కన్నులు తెరవబడెను; వారు తాము దిగంబరులమని తెలిసికొని అంజూరపు ఆకులు కుట్టి తమకు కచ్చడములను చేసికొనిరి." },
                { "verse": 8, "text": "చల్లపూటను ఆదామును అతని భార్యయు తోటలో సంచ రించుచున్న దేవుడైన యెహోవా స్వరమును విని, దేవుడైన యెహోవా ఎదుటికి రాకుండ తోటచెట్ల మధ్యను దాగు కొనగా" },
                { "verse": 9, "text": "దేవుడైన యెహోవా ఆదామును పిలిచినీవు ఎక్కడ ఉన్నావనెను." },
                { "verse": 10, "text": "అందు కతడునేను తోటలో నీ స్వరము వినినప్పుడు దిగంబరినిగా నుంటినిగనుక భయ పడి దాగుకొంటిననెను." },
                { "verse": 11, "text": "అందుకాయననీవు దిగంబరివని నీకు తెలిపినవాడెవడు? నీవు తినకూడదని నేను నీ కాజ్ఞా పించిన వృక్షఫలములు తింటివా? అని అడిగెను." },
                { "verse": 12, "text": "అందుకు ఆదామునాతో నుండుటకు నీవు నాకిచ్చిన ఈ స్త్రీయే ఆ వృక్షఫలములు కొన్ని నా కియ్యగా నేను తింటిననెను." },
                { "verse": 13, "text": "అప్పుడు దేవుడైన యెహోవా స్త్రీతోనీవు చేసినది యేమిటని అడుగగా స్త్రీసర్పము నన్ను మోసపుచ్చి నందున తింటిననెను." },
                { "verse": 14, "text": "అందుకు దేవుడైన యెహోవా సర్పముతో నీవు దీని చేసినందున పశువులన్నిటిలోను భూజంతువు లన్నిటిలోను నీవు శపించ బడినదానివై నీ కడుపుతో ప్రాకుచు నీవు బ్రదుకు దినములన్ని" },
                { "verse": 15, "text": "మరియు నీకును స్త్రీకిని నీ సంతాన మునకును ఆమె సంతానమునకును వైరము కలుగజేసెదను. అది నిన్ను తలమీద కొట్టును; నీవు దానిని మడిమె మీద కొట్టుదువని చెప్పెను." },
                { "verse": 16, "text": "ఆయన స్త్రీతో నీ ప్రయాసమును నీ గర్భవేదనను నేను మిక్కిలి హెచ్చించె దను; వేదనతో పిల్లలను కందువు; నీ భర్తయెడల నీకు వాంఛ కలుగును; అతడు నిన్ను ఏలునని చెప్పెను." },
                { "verse": 17, "text": "ఆయన ఆదాముతోనీవు నీ భార్యమాట వినితినవద్దని నేను నీ కాజ్ఞాపించిన వృక్షఫలములు తింటివి గనుక నీ నిమిత్తము నేల శపింపబడియున్నది; ప్రయాసముతోనే నీవు బ్రదుకు దినములన్నియు దాని పంట తిందువు;" },
                { "verse": 18, "text": "అది ముండ్ల తుప్పలను గచ్చపొదలను నీకు మొలిపించును; పొలములోని పంట తిందువు;" },
                { "verse": 19, "text": "నీవు నేలకు తిరిగి చేరువరకు నీ ముఖపు చెమట కార్చి ఆహారము తిందువు; ఏల యనగా నేలనుండి నీవు తీయబడితివి; నీవు మన్నే గనుక తిరిగి మన్నైపోదువని చెప్పెను." },
                { "verse": 20, "text": "ఆదాము తన భార్యకు హవ్వ అని పేరు పెట్టెను. ఏలయనగా ఆమె జీవముగల ప్రతివానికిని తల్లి." },
                { "verse": 21, "text": "దేవుడైన యెహోవా ఆదామునకును అతని భార్యకును చర్మపు చొక్కాయిలను చేయించి వారికి తొడిగించెను." },
                { "verse": 22, "text": "అప్పుడు దేవుడైన యెహోవాఇదిగో మంచి చెడ్డ లను ఎరుగునట్లు, ఆదాము మనలో ఒకనివంటివాడాయెను. కాబట్టి అతడు ఒక వేళ తన చెయ్యి చాచి జీవ వృక్షఫలమును కూడ తీసికొని తిని నిరంతం" },
                { "verse": 23, "text": "దేవుడైన యెహోవా అతడు ఏ నేలనుండి తీయబడెనో దాని సేద్యపరచుటకు ఏదెను తోటలోనుండి అతని పంపివేసెను." },
                { "verse": 24, "text": "అప్పుడాయన ఆదామును వెళ్లగొట్టి ఏదెను తోటకు తూర్పుదిక్కున కెరూబులను, జీవవృక్షమునకు పోవు మార్గమును కాచుటకు ఇటు అటు తిరుగుచున్న ఖడ్గజ్వాలను నిలువబెట్టెను." }
            ]
        },
        {
            "chapter": 4,
            "verses": [
                { "verse": 1, "text": "ఆదాము తన భార్యయైన హవ్వను కూడినప్పుడు ఆమె గర్భవతియై కయీనును కనియెహోవా దయవలన నేనొక మనుష్యుని సంపాదించుకొన్నాననెను." },
                { "verse": 2, "text": "తరువాత ఆమె అతని తమ్ముడగు హేబెలును కనెను. హేబెలు గొఱ్ఱల కాపరి; కయీను భూమిని సేద్యపరచువాడు." },
                { "verse": 3, "text": "కొంతకాలమైన తరువాత కయీను పొలముపంటలో కొంత యెహోవాకు అర్పణగా తెచ్చెను." },
                { "verse": 4, "text": "హేబెలు కూడ తన మందలో తొలుచూలున పుట్టిన వాటిలో క్రొవ్విన వాటిని కొన్ని తెచ్చెను. యెహోవా హేబెలును అతని యర్పణను లక్ష్య పెట్టెను;" },
                { "verse": 5, "text": "కయీనును అతని యర్పణను ఆయన లక్ష్యపెట్టలేదు. కాబట్టి కయీనుకు మిక్కిలి కోపము వచ్చి అతడు తన ముఖము చిన్నబుచ్చుకొనగా" },
                { "verse": 6, "text": "యెహోవా కయీనుతోనీకు కోపమేల? ముఖము చిన్నబుచ్చు కొని యున్నావేమి?" },
                { "verse": 7, "text": "నీవు సత్క్రియ చేసిన యెడల తలనెత్తుకొనవా? సత్క్రియ చేయనియెడల వాకిట పాపము పొంచియుండును; నీ యెడల దానికి వాంఛ కలుగును నీవు దానిని ఏలుదువనెను." },
                { "verse": 8, "text": "కయీను తన తమ్ముడైన హేబెలుతో మాటలాడెను. వారు పొలములో ఉన్నప్పుడు కయీను తన తమ్ముడైన హేబెలు మీద పడి అతనిని చంపెను." },
                { "verse": 9, "text": "యెహోవానీ తమ్ముడైన హేబెలు ఎక్కడున్నాడని కయీను నడుగగా అతడునే నెరుగను; నా తమ్మునికి నేను కావలివాడనా అనెను." },
                { "verse": 10, "text": "అప్పుడాయననీవు చేసినపని యేమిటి? నీ తమ్ముని రక్తము యొక్క స్వరము నేలలోనుండి నాకు మొరపెట్టుచున్నది." },
                { "verse": 11, "text": "కావున నీ తమ్ముని రక్తమును నీ చేతిలోనుండి పుచ్చుకొనుటకు నోరు తెరచిన యీ నేలమీద ఉండకుండ, నీవు శపింప బడినవాడవు;" },
                { "verse": 12, "text": "నీవు నేలను సేద్యపరుచునప్పుడు అది తన సారమును ఇక మీదట నీకియ్యదు; నీవు భూమిమీద దిగులు పడుచు దేశదిమ్మరివై యుందువనెను." },
                { "verse": 13, "text": "అందుకు కయీనునా దోషశిక్ష నేను భరింపలేనంత గొప్పది." },
                { "verse": 14, "text": "నేడు ఈ ప్రదేశమునుండి నన్ను వెళ్లగొట్టితివి; నీ సన్నిధికి రాకుండ వెలివేయబడి దిగులుపడుచు భూమిమీద దేశదిమ్మరినై యుందును. కావున నన్ను కనుగొనువాడెవడో వాడు నన్ను చంపునని యెహోవాతో అనెను." },
                { "verse": 15, "text": "అందుకు యెహోవా అతనితోకాబట్టి యెవడైనను కయీనును చంపినయెడల వానికి ప్రతిదండన యేడంతలు కలుగుననెను. మరియు ఎవడైనను కయీనును కనుగొని అతనిని చంపక యుండున" },
                { "verse": 16, "text": "అప్పుడు కయీను యెహోవా సన్నిధిలోనుండి బయలుదేరివెళ్లి ఏదెనుకు తూర్పుదిక్కున నోదు దేశములో కాపురముండెను." },
                { "verse": 17, "text": "కయీను తన భార్యను కూడినప్పుడు ఆమె గర్భవతియై హనోకును కనెను. అప్పుడతడు ఒక ఊరు కట్టించి ఆ ఊరికి తన కుమారుని పేరునుబట్టి హనోకను పేరు పెట్టెను." },
                { "verse": 18, "text": "హనోకుకు ఈరాదు పుట్టెను. ఈరాదు మహూయాయేలును కనెను. మహూయాయేలు మతూషా యేలును కనెను. మతూషాయేలు లెమెకును కనెను." },
                { "verse": 19, "text": "లెమెకు ఇద్దరు స్త్రీలను పెండ్లి చేసికొనెను; వారిలో ఒక దాని పేరు ఆదా రెండవదానిపేరు సిల్లా." },
                { "verse": 20, "text": "ఆదా యా బాలును కనెను. అతడు పశువులు గలవాడై గుడారములలో నివసించువారికి మూలపురుషుడు." },
                { "verse": 21, "text": "అతని సహోదరుని పేరు యూబాలు. ఇతడు సితారాను సానికను వాడుక చేయువారికందరికిని మూలపురుషుడు." },
                { "verse": 22, "text": "మరియు సిల్లా తూబల్కయీనును కనెను. అతడు పదునుగల రాగి పని ముట్లన్నిటిని ఇనుప పనిముట్లన్నిటిని చేయువాడు. తూబల్కయీను సహోదరి పేరు నయమా." },
                { "verse": 23, "text": "లెమెకు తన భార్యలతో ఓ ఆదా ఓ సిల్లా, నా పలుకు వినుడి లెమెకు భార్యలారా, నా మాట ఆలకించుడి నన్ను గాయపరచినందుకై ఒక మనుష్యుని చంపితిని నన్ను దెబ్బ కొట్టినందుకై ఒక పడుచువాని చంపితిని" },
                { "verse": 24, "text": "ఏడంతలు ప్రతి దండన కయీను కోసము, వచ్చిన యెడల లెమెకు కోసము డెబ్బది యేడంతలు వచ్చుననెను." },
                { "verse": 25, "text": "ఆదాము మరల తన భార్యను కూడినప్పుడు ఆమె కుమారుని కనికయీను చంపిన హేబెలునకు ప్రతిగా దేవుడు నాకు మరియొక సంతానమును నియమించెనను కొని అతనికి షేతు అను పేరు పెట్టెను." },
                { "verse": 26, "text": "మరియు షేతునకుకూడ కుమారుడు పుట్టెను; అతనికి ఎనోషను పేరు పెట్టెను. అప్పుడు యెహోవా నామమున ప్రార్థన చేయుట ఆరంభమైనది." }
            ]
        },
        {
            "chapter": 5,
            "verses": [
                { "verse": 1, "text": "ఆదాము వంశావళి గ్రంథము ఇదే. దేవుడు ఆదామును సృజించిన దినమున దేవుని పోలికెగా అతని చేసెను;" },
                { "verse": 2, "text": "మగవానిగాను ఆడుదానిగాను వారిని సృజించి వారు సృజించబడిన దినమున వారిని ఆశీర్వదించి వారికి నరులని పేరు పెట్టెను." },
                { "verse": 3, "text": "ఆదాము నూట ముప్పది యేండ్లు బ్రదికి తన పోలికెగా తన స్వరూపమున కుమారుని కని అతనికి షేతు అను పేరు పెట్టెను." },
                { "verse": 4, "text": "షేతును కనిన తరువాత ఆదాము బ్రదికిన దినములు ఎనిమిదివందల ఏండ్లు; అతడు కుమారులను కుమార్తెలను కనెను." },
                { "verse": 5, "text": "ఆదాము బ్రదికిన దిన ములన్నియు తొమి్మదివందల ముప్పది యేండ్లు; అప్పుడతడు మృతిబొందెను." },
                { "verse": 6, "text": "షేతు నూట అయిదేండ్లు బ్రదికి ఎనోషును కనెను." },
                { "verse": 7, "text": "ఎనోషును కనిన తరువాత షేతు ఎనిమిదివందల ఏడేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 8, "text": "షేతు బ్రదికిన దిన ములన్నియు తొమి్మదివందల పండ్రెండేండ్లు; అప్పుడతడు మృతిబొందెను." },
                { "verse": 9, "text": "ఎనోషు తొంబది సంవత్సరములు బ్రదికి, కేయినానును కనెను." },
                { "verse": 10, "text": "కేయినానును కనిన తరువాత ఎనోషు ఎనిమిది వందల పదునైదేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 11, "text": "ఎనోషు దినములన్నియు తొమి్మదివందల అయి దేండ్లు; అప్పుడతడు మృతిబొందెను." },
                { "verse": 12, "text": "కేయినాను డెబ్బది యేండ్లు బ్రదికి మహలలేలును కనెను." },
                { "verse": 13, "text": "మహలలేలును కనినతరువాత కేయినాను ఎనిమిది వందల నలువది యేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 14, "text": "కేయినాను దినములన్నియు తొమి్మదివందల పది యేండ్లు; అప్పుడతడు మృతిబొందెను." },
                { "verse": 15, "text": "మహలలేలు అరువది యైదేండ్లు బ్రదికి యెరెదును కనెను." },
                { "verse": 16, "text": "యెరెదును కనినతరువాత మహలలేలు ఎనిమిది వందల ముప్పదియేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 17, "text": "మహలలేలు దినములన్నియు ఎనిమిదివందల తొంబదియైదేండ్లు; అప్పుడతడు మృతిబొందెను." },
                { "verse": 18, "text": "యెరెదు నూట అరువది రెండేండ్లు బ్రదికి హనోకును కనెను." },
                { "verse": 19, "text": "హనోకును కనిన తరువాత యెరెదు ఎనిమిది వందలయేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 20, "text": "యెరెదు దినములన్నియు తొమి్మదివందల అరువదిరెండేండ్లు; అప్పుడతడు మృతిబొందెను." },
                { "verse": 21, "text": "హనోకు అరువది యైదేండ్లు బ్రదికి మెతూషెలను కనెను." },
                { "verse": 22, "text": "హనోకు మెతూషెలను కనిన తరువాత మూడు వందలయేండ్లు దేవునితో నడుచుచు కుమారులను కుమార్తె లను కనెను." },
                { "verse": 23, "text": "హనోకు దినములన్నియు మూడువందల అరువదియైదేండ్లు." },
                { "verse": 24, "text": "హనోకు దేవునితో నడిచిన తరువాత దేవుడతని తీసికొనిపోయెను గనుక అతడు లేకపోయెను." },
                { "verse": 25, "text": "మెతూషెల నూట ఎనుబదియేడేండ్లు బ్రదికి లెమెకును కనెను." },
                { "verse": 26, "text": "మెతూషెల లెమెకును కనిన తరువాత ఏడు వందల ఎనుబది రెండేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 27, "text": "మెతూషెల దినములన్నియు తొమి్మదివందల అరువది తొమి్మదియేండ్లు; అప్పుడతడు మృతిబొందెను." },
                { "verse": 28, "text": "లెమెకు నూట ఎనుబది రెండేండ్లు బ్రదికి ఒక కుమా రుని కని" },
                { "verse": 29, "text": "భూమిని యెహోవా శపించినందువలన కలిగిన మన చేతుల కష్టము విషయములోను మన పని విషయము లోను ఇతడు మనకు నెమ్మది కలుగజేయుననుకొని అతనికి నోవహు అని పేరు" },
                { "verse": 30, "text": "లెమెకు నోవహును కనిన తరువాత ఏనూట తొంబదియైదేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 31, "text": "లెమెకు దినములన్నియు ఏడువందల డెబ్బది యేడేండ్లు; అప్పుడతడు మృతిబొందెను." },
                { "verse": 32, "text": "నోవహు ఐదువందల యేండ్లు గలవాడై షేమును హామును యాపెతును కనెను." }
            ]
        },
        {
            "chapter": 6,
            "verses": [
                { "verse": 1, "text": "నరులు భూమిమీద విస్తరింప నారంభించిన తరువాత కుమార్తెలు వారికి పుట్టినప్పుడు" },
                { "verse": 2, "text": "దేవుని కుమారులు నరుల కుమార్తెలు చక్కనివారని చూచి వారందరిలో తమకు మనస్సువచ్చిన స్త్రీలను వివాహము చేసికొనిరి." },
                { "verse": 3, "text": "అప్పుడు యెహోవానా ఆత్మ నరులతో ఎల్లప్పుడును వాదించదు; వారు తమ అక్రమ విషయములో నరమాత్రులై యున్నారు; అయినను వారి దినములు నూట ఇరువది యేండ్లగుననెను." },
                { "verse": 4, "text": "ఆ దినములలో నెఫీలులను వారు భూమి మీదనుండిరి; తరువాతను ఉండిరి. దేవుని కుమారులు నరుల కుమార్తెలతో పోయినప్పుడు వారికి పిల్లలను కనిరి. పూర్వ కాలమందు పేరు పొందిన శూరులు వీరే." },
                { "verse": 5, "text": "నరుల చెడు తనము భూమిమీద గొప్పదనియు, వారి హృదయము యొక్క తలంపులలోని ఊహ అంతయు ఎల్లప్పుడు కేవలము చెడ్డదనియు యెహోవా చూచి" },
                { "verse": 6, "text": "తాను భూమిమీద నరులను చేసినందుకు యెహోవా సంతాపము నొంది తన హృద యములో నొచ్చుకొనెను." },
                { "verse": 7, "text": "అప్పుడు యెహోవా నేను సృజించిన నరులును నరులతోకూడ జంతువులును పురుగులును ఆకాశ పక్ష్యాదులును భూమిమీద నుండకుండ తుడిచివేయుదును; ఏలయనగా నేను వారిని సృష్టించి" },
                { "verse": 8, "text": "అయితే నోవహు యెహోవా దృష్టియందు కృప పొందినవాడాయెను." },
                { "verse": 9, "text": "నోవహు వంశావళి యిదే. నోవహు నీతిపరుడును తన తరములో నిందారహితుడునై యుండెను. నోవహు దేవునితో కూడ నడచినవాడు." },
                { "verse": 10, "text": "షేము, హాము, యాపెతను ముగ్గురు కుమారులను నోవహు కనెను." },
                { "verse": 11, "text": "భూలోకము దేవుని సన్నిధిని చెడిపోయియుండెను; భూలోకము బలాత్కారముతో నిండియుండెను." },
                { "verse": 12, "text": "దేవుడు భూలోకమును చూచినప్పుడు అది చెడిపోయి యుండెను; భూమిమీద సమస్త శరీరులు తమ మార్గమును చెరిపివేసుకొని యుండిరి." },
                { "verse": 13, "text": "దేవుడు నోవహుఱోసమస్త శరీరుల మూలముగా భూమి బలాత్కారముతో నిండియున్నది గనుక నా సన్నిధిని వారి అంతము వచ్చియున్నది; ఇదిగో వారిని భూమితోకూడ నాశనము చేయుదును." },
                { "verse": 14, "text": "చితిసారకపు మ్రానుతో నీకొరకు ఓడను చేసికొనుము. అరలు పెట్టి ఆ ఓడను చేసి లోపటను వెలుపటను దానికి కీలు పూయ వలెను." },
                { "verse": 15, "text": "నీవు దాని చేయవలసిన విధమిది; ఆ ఓడ మూడువందల మూరల పొడుగును ఏబది మూరల వెడల్పును ముప్పది మూరల యెత్తును గలదై యుండ వలెను." },
                { "verse": 16, "text": "ఆ ఓడకు కిటికీ చేసి పైనుండి మూరెడు క్రిందికి దాని ముగించవలెను; ఓడ తలుపు దాని ప్రక్కను ఉంచవలెను; క్రింది అంతస్థు రెండవ అంతస్థు మూడవ అంతస్థు గలదిగా దాని చేయవలెను." },
                { "verse": 17, "text": "ఇదిగో నేనే జీవ వాయువుగల సమస్త శరీరులను ఆకాశము క్రింద నుండ కుండ నాశము చేయుటకు భూమిమీదికి జలప్రవాహము రప్పించుచున్నాను. లోకమందున్న సమస్తమును చని పోవును;" },
                { "verse": 18, "text": "అయితే నీతో నా నిబంధన స్థిరపరచుదును; నీవును నీతోకూడ నీ కుమారులును నీ భార్యయు నీ కోడండ్రును ఆ ఓడలో ప్రవేశింపవలెను." },
                { "verse": 19, "text": "మరియు నీతోకూడ వాటిని బ్రదికించి యుంచుకొనుటకు సమస్త జీవులలో, అనగా సమస్త శరీరులయొక్క ప్రతి జాతిలో నివి రెండేసి చొప్పున నీవు ఓడలోనికి తేవలెను; వాటిలో మగదియు ఆడుదియు నుండవలెను." },
                { "verse": 20, "text": "నీవు వాటిని బ్రది కించి యుంచుకొనుటకై వాటి వాటి జాతుల ప్రకారము పక్షులలోను, వాటి వాటి జాతుల ప్రకారము జంతువుల లోను, వాటి వాటి జాతుల ప్రకారము నేలను ప్రాకు వాటన్నిటిలోను, ప్రతి జాతిలో రెండేసి చొప్పున నీ యొద్దకు అవి వచ్చును." },
                { "verse": 21, "text": "మరియు తినుటకు నానావిధములైన ఆహారపదార్థములను కూర్చుకొని నీదగ్గర ఉంచు కొనుము; అవి నీకును వాటికిని ఆహారమగునని చెప్పెను." },
                { "verse": 22, "text": "నోవహు అట్లు చేసెను; దేవుడు అతని కాజ్ఞాపించిన ప్రకారము యావత్తు చేసెను." }
            ]
        },
        {
            "chapter": 7,
            "verses": [
                { "verse": 1, "text": "యెహోవాఈ తరమువారిలో నీవే నా యెదుట నీతి మంతుడవై యుండుట చూచితిని గనుక నీవును నీ యింటి వారును ఓడలో ప్రవేశించుడి." },
                { "verse": 2, "text": "పవిత్ర జంతువులలో ప్రతి జాతి పోతులు ఏడును పెంటులు ఏడును, పవిత్రములు కాని జంతువులలో ప్రతి జాతి పోతును పెంటియు రెండును" },
                { "verse": 3, "text": "ఆకాశ పక్షులలో ప్రతి జాతి మగవి యేడును ఆడువి యేడును, నీవు భూమి అంతటిమీద సంతతిని జీవ ముతో కాపాడునట్లు నీయొద్ద ఉంచుకొనుము;" },
                { "verse": 4, "text": "ఎందుకనగా ఇంకను ఏడు దినములకు నేను నలుబది పగళ్లును నలుబది రాత్రులును భూమిమీద వర్షము కురిపించి, నేను చేసిన సమస్త జీవరాసులను భూమిమీద ఉండకుండ తుడిచివేయుదునని నోవహుతో చెప్పెను." },
                { "verse": 5, "text": "తనకు యెహోవా ఆజ్ఞాపించిన ప్రకారము నోవహు యావత్తు చేసెను." },
                { "verse": 6, "text": "ఆ జలప్రవాహము భూమిమీదికి వచ్చినప్పుడు నోవహు ఆరువందల యేండ్లవాడు." },
                { "verse": 7, "text": "అప్పుడు నోవహును అతనితోకూడ అతని కుమారులును అతని భార్యయు అతని కోడండ్రును ఆ ప్రవాహజలములను తప్పించుకొనుటకై ఆ ఓడలో ప్రవేశించిరి." },
                { "verse": 8, "text": "దేవుడు నోవహు నకు ఆజ్ఞాపించిన ప్రకారము పవిత్ర జంతువులలోను అపవిత్ర జంతువులలోను, పక్షులలోను నేలను ప్రాకు వాటన్నిటిలోను," },
                { "verse": 9, "text": "మగది ఆడుది జతజతలుగా ఓడలోనున్న నోవహు నొద్దకు చేరెను." },
                { "verse": 10, "text": "ఏడు దినములైన తరువాత ఆ ప్రవాహజలములు భూమిమీదికి వచ్చెను." },
                { "verse": 11, "text": "నోవహు వయసుయొక్క ఆరువందల సంవత్సరము రెండవ నెల పదియేడవ దినమున మహాగాధజలముల ఊటలన్నియు ఆ దినమందే విడబడెను, ఆకాశపు తూములు విప్పబడెను." },
                { "verse": 12, "text": "నలుబది పగళ్లును నలుబది రాత్రులును ప్రచండ వర్షము భూమిమీద కురిసెను." },
                { "verse": 13, "text": "ఆ దినమందే నోవహును నోవహు కుమారులగు షేమును హామును యాపెతును నోవహు భార్యయు వారితోకూడ అతని ముగ్గురు కోడండ్రును ఆ ఓడలో ప్రవేశించిరి." },
                { "verse": 14, "text": "వీరే కాదు; ఆ యా జాతుల ప్రకారము ప్రతి మృగమును, ఆ యా జాతుల ప్రకారము ప్రతి పశువును, ఆ యా జాతుల ప్రకారము నేలమీద ప్రాకు ప్రతి పురుగును, ఆ యా జాతుల ప్రకారము ప్రతి పక్షియు, నానావిధములైన రెక్కలుగల ప్రతి పిట్టయు ప్రవేశించెను." },
                { "verse": 15, "text": "జీవాత్మగల సమస్త శరీరులలో రెండేసి రెండేసి ఓడలోనున్న నోవహు నొద్ద ప్రవేశించెను." },
                { "verse": 16, "text": "ప్రవేశించినవన్నియు దేవుడు అతని కాజ్ఞాపించిన ప్రకారము సమస్త శరీరులలో మగదియు ఆడుదియు ప్రవేశించెను; అప్పుడు యెహోవా ఓడలో అతని మూసివేసెను." },
                { "verse": 17, "text": "ఆ జలప్రవాహము నలుబది దినములు భూమిమీద నుండగా, జలములు విస్తరించి ఓడను తేలచేసినందున అది భూమిమీదనుండి పైకి లేచెను." },
                { "verse": 18, "text": "జలములు భూమిమీద ప్రచండముగా ప్రబలి మిక్కిలి విస్తరించినప్పుడు ఓడ నీళ్లమీద నడిచెను." },
                { "verse": 19, "text": "ఆ ప్రచండ జలములు భూమిమీద అత్యధికముగా ప్రబలినందున ఆకాశమంతటి క్రిందనున్న గొప్ప పర్వతములన్నియు మునిగిపోయెను." },
                { "verse": 20, "text": "పదిహేను మూరల యెత్తున నీళ్లు ప్రచండముగా ప్రబలెను గనుక పర్వతములును మునిగి పోయెను." },
                { "verse": 21, "text": "అప్పుడు పక్షులేమి పశువులేమి మృగములేమి భూమిమీద ప్రాకు పురుగులేమి భూమిమీద సంచరించు సమస్త శరీరులేమి సమస్త నరులేమి చచ్చిపోయిరి." },
                { "verse": 22, "text": "పొడి నేలమీదనున్న వాటన్నిటిలోను నాసికారంధ్రములలో జీవాత్మ సంబంధమైన ఊపిరిగలవన్నియు చని పోయెను." },
                { "verse": 23, "text": "నరులతో కూడ పశువులును పురుగులును ఆకాశపక్షులును నేలమీదనున్న జీవరాసులన్నియు తుడిచివేయబడెను. అవి భూమిమీద నుండకుండ తుడిచివేయబడెను. నోవహును అతనితో కూడ ఆ ఓడలో నున్నవియు మాత్రము మిగిలియుండెను." },
                { "verse": 24, "text": "నూట ఏబది దినముల వరకు నీళ్లు భూమిమీద ప్రచండముగా ప్రబలెను." }
            ]
        },
        {
            "chapter": 8,
            "verses": [
                { "verse": 1, "text": "దేవుడు నోవహును అతనితోకూడ ఓడలోనున్న సమస్త జంతువులను సమస్త పశువులను జ్ఞాపకము చేసికొనెను. దేవుడు భూమిమీద వాయువు విసరునట్లు చేయుటవలన నీళ్లు తగ్గిపోయెను." },
                { "verse": 2, "text": "అగాధ జలముల ఊటలును ఆకాశపు తూములును మూయబడెను; ఆకా శమునుండి కురియుచున్న ప్రచండ వర్షము నిలిచి పోయెను." },
                { "verse": 3, "text": "అప్పుడు నీళ్లు భూమిమీదనుండి క్రమ క్రమ ముగా తీసి పోవుచుండెను; నూట ఏబది దినము లైనతరు వాత నీళ్లు తగ్గిపోగా" },
                { "verse": 4, "text": "ఏడవ నెల పదియేడవ దినమున ఓడ అరారాతు కొండలమీద నిలిచెను." },
                { "verse": 5, "text": "నీళ్లు పదియవ నెలవరకు క్రమముగా తగ్గుచువచ్చెను. పదియవ నెల మొదటి దినమున కొండల శిఖరములు కనబడెను." },
                { "verse": 6, "text": "నలుబది దినములైన తరువాత నోవహు తాను చేసిన ఓడకిటికీ తీసి" },
                { "verse": 7, "text": "ఒక కాకిని వెలుపలికి పోవిడిచెను. అది బయటికి వెళ్లి భూమిమీదనుండి నీళ్లు ఇంకిపోవువరకు ఇటు అటు తిరుగుచుండెను." },
                { "verse": 8, "text": "మరియు నీళ్లు నేలమీదనుండి తగ్గినవో లేదో చూచుటకు అతడు తన యొద్దనుండి నల్లపావుర మొకటి వెలుపలికి పోవిడిచెను." },
                { "verse": 9, "text": "నీళ్లు భూమి అంతటి మీద నున్నందున తన అరకాలు నిలుపుటకు దానికి స్థలము దొరకలేదు గనుక ఓడలోనున్న అతనియొద్దకు తిరిగి వచ్చెను. అప్పుడతడు చెయ్యి చాపి దాని పట్టుకొని ఓడలోనికి తీసికొనెను." },
                { "verse": 10, "text": "అతడు మరి యేడుదినములు తాళి మరల ఆ నల్ల పావురమును ఓడలోనుండి వెలుపలికి విడిచెను." },
                { "verse": 11, "text": "సాయంకాలమున అది అతనియొద్దకు వచ్చి నప్పుడు త్రుంచబడిన ఓలీవచెట్టు ఆకు దాని నోటనుండెను గనుక నీళ్లు భూమిమీదనుండి తగ్గిపోయెనని నోవహునకు తెలిసెను." },
                { "verse": 12, "text": "అతడింక మరి యేడు దినములు తాళి ఆ పావురమును వెలుపలికి విడిచెను. ఆ తరువాత అది అతని యొద్దకు తిరిగి రాలేదు." },
                { "verse": 13, "text": "మరియు ఆరువందల ఒకటవ సంవత్సరము మొదటినెల తొలిదినమున నీళ్లు భూమిమీదనుండి యింకిపోయెను. నోవహు ఓడ కప్పు తీసి చూచినప్పుడు నేల ఆరియుండెను." },
                { "verse": 14, "text": "రెండవ నెల యిరువది యేడవ దినమున భూమియెండి యుండెను." },
                { "verse": 15, "text": "అప్పుడు దేవుడు" },
                { "verse": 16, "text": "నీవును నీతోకూడ నీ భార్యయు నీ కుమారులును నీ కోడండ్రును ఓడలోనుండి బయటికి రండి." },
                { "verse": 17, "text": "పక్షులు పశువులు భూమిమీద ప్రాకు ప్రతి జాతి పురుగులు మొదలైన సమస్తశరీరులలో నీతోకూడ నున్న ప్రతిజంతువును వెంటబెట్టుకొని వెలుపలికి రావలెను. అవి భూమిమీద బహుగా విస్తరించి భూమిమీద ఫలించి అభివృద్ధి పొందవలెనని నోవహుతో చెప్పెను." },
                { "verse": 18, "text": "కాబట్టి నోవహును అతనితో కూడ అతని కుమారులును అతని భార్యయు అతని కోడండ్రును బయటికి వచ్చిరి." },
                { "verse": 19, "text": "ప్రతి జంతువును ప్రాకు ప్రతి పురుగును ప్రతి పిట్టయు భూమిమీద సంచరించునవన్నియు వాటి వాటి జాతుల చొప్పున ఆ ఓడలోనుండి బయటికి వచ్చెను." },
                { "verse": 20, "text": "అప్పుడు నోవహు యెహోవాకు బలిపీఠము కట్టి, పవిత్ర పశువు లన్నిటిలోను పవిత్ర పక్షులన్నిటిలోను కొన్ని తీసికొని ఆ పీఠముమీద దహనబలి అర్పించెను." },
                { "verse": 21, "text": "అప్పుడు యెహోవా ఇంపయిన సువాసన నాఘ్రాణించిఇక మీదట నరులనుబట్టి భూమిని మరల శపించను. ఎందు కనగా నరుల హృదయాలోచన వారి బాల్యమునుండి చెడ్డది. నేనిప్పుడు చేసిన" },
                { "verse": 22, "text": "భూమి నిలిచియున్నంతవరకు వెదకాలమును కోతకాలమును శీతోష్ణములును వేసవి శీత కాలములును రాత్రింబగళ్లును ఉండక మానవని తన హృద యములో అనుకొనెను." }
            ]
        },
        {
            "chapter": 9,
            "verses": [
                { "verse": 1, "text": "మరియు దేవుడు నోవహును అతని కుమారులను ఆశీర్వదించిమీరు ఫలించి అభివృద్ధి పొంది భూమిని నింపుడి." },
                { "verse": 2, "text": "మీ భయమును మీ బెదురును అడవి జంతువు లన్నిటికిని ఆకాశపక్షులన్నిటికిని నేలమీద ప్రాకు ప్రతి పురుగుకును సముద్రపు చేపలన్నిటికిని కలుగును; అవి మీ చేతి కప్పగింపబడి యున్నవి." },
                { "verse": 3, "text": "ప్రాణముగల సమస్త చరములు మీకు ఆహారమగును; పచ్చని కూర మొక్కల నిచ్చినట్లు వాటిని మీకిచ్చియున్నాను." },
                { "verse": 4, "text": "అయినను మాంస మును దాని రక్తముతో మీరు తినకూడదు; రక్తమే దాని ప్రాణము." },
                { "verse": 5, "text": "మరియు మీకు ప్రాణమైన మీ రక్తమును గూర్చి విచారణ చేయుదును; దానిగూర్చి ప్రతిజంతువును నరులను విచారణ చేయుదును; ప్రతి నరుని ప్రాణమును గూర్చి వాని సహోదరుని విచారణ చేయుదును." },
                { "verse": 6, "text": "నరుని రక్తమును చిందించు వాని రక్తము నరునివలననే చిందింప బడును; ఏలయనగా దేవుడు తన స్వరూపమందు నరుని చేసెను." },
                { "verse": 7, "text": "మీరు ఫలించి అభివృద్ధి నొందుడి; మీరు భూమిమీద సమృద్ధిగా సంతానము కని విస్తరించుడని వారితో చెప్పెను." },
                { "verse": 8, "text": "మరియు దేవుడు నోవహు అతని కుమారులతో" },
                { "verse": 9, "text": "ఇదిగో నేను మీతోను మీ తదనంతరము మీ సంతాన ముతోను మీతోకూడనున్న ప్రతి జీవితోను," },
                { "verse": 10, "text": "పక్షులేమి పశువులేమి మీతోకూడ సమస్తమైన భూజంతువులేమి ఓడలోనుండి బయటికి వచ్చిన సమస్త భూజంతువులతోను నా నిబంధన స్థిరపరచుచున్నాను." },
                { "verse": 11, "text": "నేను మీతో నా నిబంధన స్థిరపరచుదును; సమస్త శరీరులు ప్రవాహ జలములవలన ఇకను లయపరచబడరు; భూమిని నాశనము చేయుటకు ఇకను జలప్రవాహము కలుగదని పలికెను." },
                { "verse": 12, "text": "మరియు దేవుడునాకును మీకును మీతోకూడనున్న సమస్త జీవరాసులకును మధ్య నేను తరతరములకు ఏర్ప రచుచున్న నిబంధనకు గురుతు ఇదే." },
                { "verse": 13, "text": "మేఘములో నా ధనుస్సును ఉంచితిని; అది నాకును భూమికిని మధ్య నిబంధ నకు గురుతుగా నుండును." },
                { "verse": 14, "text": "భూమిపైకి నేను మేఘమును రప్పించునప్పుడు ఆ ధనుస్సు మేఘములో కనబడును." },
                { "verse": 15, "text": "అప్పుడు నాకును మీకును సమస్త జీవరాసులకును మధ్యనున్న నా నిబంధనను జ్ఞాపకము చేసికొందును గనుక సమస్త శరీరులను నాశనము చేయుటకు ఆలాగు ప్రవాహముగా నీళ్లు రావు" },
                { "verse": 16, "text": "ఆ ధనుస్సు మేఘములో నుండును. నేను దాని చూచి దేవునికిని భూమిమీదనున్న సమస్త శరీరులలో ప్రాణముగల ప్రతి దానికిని మధ్యనున్న నిత్య నిబంధనను జ్ఞాపకము చేసికొందుననెను." },
                { "verse": 17, "text": "మరియు దేవుడు నాకును భూమిమీదనున్న సమస్తశరీరులకును మధ్య నేను స్థిరపరచిన నిబంధనకు గురుతు ఇదే అని నోవహుతో చెప్పెను." },
                { "verse": 18, "text": "ఓడలోనుండి వచ్చిన నోవహు కుమారులు షేము హాము యాపెతనువారు; హాము కనానుకు తండ్రి." },
                { "verse": 19, "text": "ఈ ముగ్గురు నోవహు కుమారులు; వీరి సంతానము భూమియందంతట వ్యాపించెను." },
                { "verse": 20, "text": "నోవహు వ్యవసాయము చేయనారంభించి, ద్రాక్షతోట వేసెను." },
                { "verse": 21, "text": "పిమ్మట ద్రాక్షారసము త్రాగి మత్తుడై తన గుడారములో వస్త్రహీనుడుగా నుండెను." },
                { "verse": 22, "text": "అప్పుడు కనానుకు తండ్రియైన హాము తన తండ్రి వస్త్రహీనుడై యుండుట చూచి బయటనున్న తన యిద్దరు సహోదరులకు ఆ సంగతి తెలిపెను." },
                { "verse": 23, "text": "అప్పుడు షేమును యాపెతును వస్త్రమొకటి తీసికొని తమ యిద్దరి భుజములమీద వేసికొని వెనుకకు నడిచి వెళ్లి తమ తండ్రి దిసమొలను కప్పిరి; వారి ముఖములు వెనుకతట్టు ఉండుట" },
                { "verse": 24, "text": "అప్పుడు నోవహు మత్తునుండి మేలుకొని తన చిన్నకుమారుడు చేసినదానిని తెలిసికొని" },
                { "verse": 25, "text": "కనాను శపింపబడినవాడై తన సహోదరులకు దాసాను దాసుడగును అనెను." },
                { "verse": 26, "text": "మరియు అతడు షేము దేవుడైన యెహోవా స్తుతింపబడునుగాక కనాను అతనికి దాసుడగును." },
                { "verse": 27, "text": "దేవుడు యాపెతును విశాలపరచును అతడు షేము గుడారములలో నివసించును అతనికి కనాను దాసుడగును అనెను." },
                { "verse": 28, "text": "ఆ జలప్రవాహము గతించిన తరువాత నోవహు మూడువందల ఏబది యేండ్లు బ్రదికెను." },
                { "verse": 29, "text": "నోవహు బ్రదికిన దినములన్నియు తొమి్మదివందల ఏబది యేండ్లు; అప్పు డతడు మృతిబొందెను." }
            ]
        },
        {
            "chapter": 10,
            "verses": [
                { "verse": 1, "text": "ఇది నోవహు కుమారుడగు షేము హాము యాపె తను వారి వంశావళి. జలప్రళయము తరువాత వారికి కుమారులు పుట్టిరి." },
                { "verse": 2, "text": "యాపెతు కుమారులు గోమెరు మాగోగు మాదయి యావాను తుబాలు మెషెకు తీరసు అనువారు." },
                { "verse": 3, "text": "గోమెరు కుమారులు అష్కనజు రీఫతు తోగర్మా అనువారు." },
                { "verse": 4, "text": "యావాను కుమారులు ఏలీషా తర్షీషు కిత్తీము దాదోనీము అనువారు." },
                { "verse": 5, "text": "వీరినుండి సముద్ర తీరమందుండిన జనములు వ్యాపించెను. వారివారి జాతుల ప్రకారము, వారివారి భాషలప్రకారము, వారివారి వంశముల ప్రకారము, ఆ యా దేశములలో వారు వేరైపోయిరి." },
                { "verse": 6, "text": "హాము కుమారులు కూషు మిస్రాయిము పూతు కనాను అనువారు." },
                { "verse": 7, "text": "కూషు కుమారులు సెబా హవీలా సబ్తా రాయమా సబ్తకా అనువారు. రాయమా కుమారులు షేబ దదాను అనువారు." },
                { "verse": 8, "text": "కూషు నిమ్రోదును కనెను. అతడు భూమిమీద పరాక్రమశాలియై యుండుటకు ఆరంభించెను." },
                { "verse": 9, "text": "అతడు యెహోవాయెదుట పరాక్రమముగల వేటగాడు. కాబట్టియెహోవా యెదుట పరా క్రమముగల వేటగాడైన నిమ్రోదువలె అను లోకోక్తికలదు." },
                { "verse": 10, "text": "షీనారు దేశములోని బాబెలు ఎరెకు అక్కదు కల్నే అను పట్టణములు అతని రాజ్యమునకు మొదలు." },
                { "verse": 11, "text": "ఆ దేశములోనుండి అష్షూరుకు బయలుదేరి వెళ్లి నీనెవెను రహోబోతీరును కాలహును" },
                { "verse": 12, "text": "నీనెవెకును కాలహుకును మధ్యనున్న రెసెనును కట్టించెను; ఇదే ఆ మహా పట్ట ణము." },
                { "verse": 13, "text": "మిస్రాయిము లూదీయులను అనామీయులను లెహాబీయులను నప్తుహీయులను" },
                { "verse": 14, "text": "పత్రుసీయులను కస్లూ హీయులను కఫ్తోరీయులను కనెను. ఫిలిష్తీయులు కస్లూ హీయులలోనుండి వచ్చిన వారు." },
                { "verse": 15, "text": "కనాను తన ప్రథమ కుమారుడగు సీదోనును హేతును యెబూసీయులను అమోరీయులను గిర్గాషీయులను" },
                { "verse": 16, "text": "హివ్వీయులను అర్కీయులను సినీయులను" },
                { "verse": 17, "text": "అర్వాదీయు లను సెమారీయులను హమాతీయులను కనెను." },
                { "verse": 18, "text": "తరువాత కనానీయుల వంశములు వ్యాపించెను." },
                { "verse": 19, "text": "కనానీయుల సరిహద్దు సీదోనునుండి గెరారుకు వెళ్లు మార్గములో గాజా వరకును, సొదొమ గొమొఱ్ఱా అద్మా సెబోయిము లకు వెళ్లు మార్గములో లాషావరకును ఉన్నది." },
                { "verse": 20, "text": "వీరు తమతమ వంశముల ప్రకారము తమతమ భాషల ప్రకారము తమతమ దేశములనుబట్టియు జాతులను బట్టియు హాము కుమారులు." },
                { "verse": 21, "text": "మరియు ఏబెరుయొక్క కుమారులందరికి పితరుడును, పెద్దవాడయిన యాపెతు సహోదరుడునగు షేముకు కూడ సంతానము పుట్టెను." },
                { "verse": 22, "text": "షేము కుమారులు ఏలాము అష్షూరు అర్పక్షదు లూదు అరామను వారు." },
                { "verse": 23, "text": "అరాము కుమారులు ఊజు హూలు గెతెరు మాషనువారు." },
                { "verse": 24, "text": "అర్పక్షదు షేలహును కనెను. షేలహు ఏబెరును కనెను." },
                { "verse": 25, "text": "ఏబెరుకు ఇద్దరు కుమారులు పుట్టిరి. వారిలో ఒకనిపేరు పెలెగు, ఏలయనగా అతని దినములలో భూమి దేశములుగా విభాగింపబడెను. అతని సహోదరుని పేరు యొక్తాను." },
                { "verse": 26, "text": "యొక్తాను అల్మోదాదును షెలపును హసర్మా వెతును యెరహును" },
                { "verse": 27, "text": "హదోరమును ఊజాలును దిక్లాను" },
                { "verse": 28, "text": "ఓబాలును అబీమాయెలును షేబను" },
                { "verse": 29, "text": "ఓఫీరును హవీలాను యోబాబును కనెను. వీరందరు యొక్తాను కుమారులు." },
                { "verse": 30, "text": "మేషానుండి సపారాకు వెళ్లు మార్గములోని తూర్పు కొండలు వారి నివాసస్థలము." },
                { "verse": 31, "text": "వీరు తమతమ వంశముల ప్రకారము తమతమ భాషలప్రకారము తమతమ దేశ ములనుబట్టియు తమతమ జాతులనుబట్టియు షేము కుమారులు." },
                { "verse": 32, "text": "వారివారి జనములలో వారివారి సంతతుల ప్రకారము, నోవహు కుమారుల వంశములు ఇవే. జలప్రవాహము గతించిన తరువాత వీరిలోనుండి జనములు భూమిమీద వ్యాపించెను.." }
            ]
        },
        {
            "chapter": 11,
            "verses": [
                { "verse": 1, "text": "భూమియందంతట ఒక్క భాషయు ఒక్క పలుకును ఉండెను." },
                { "verse": 2, "text": "వారు తూర్పున ప్రయాణమై పోవుచుండగా షీనారు దేశమందొక మైదానము వారికి కనబడెను. అక్కడ వారు నివసించి" },
                { "verse": 3, "text": "మనము ఇటికలు చేసి బాగుగా కాల్చుదము రండని ఒకనితో ఒకడు మాటలాడుకొనిరి. రాళ్లకు ప్రతిగా ఇటికలును, అడుసునకు ప్రతిగా మట్టికీలును వారికుండెను." },
                { "verse": 4, "text": "మరియు వారుమనము భూమియందంతట చెదిరిపోకుండ ఒక పట్టణమును ఆకాశమునంటు శిఖరము గల ఒక గోపురమును కట్టుకొని, పేరు సంపాదించుకొందము రండని మాటలాడుకొనగా" },
                { "verse": 5, "text": "యెహోవా నరుల కుమారులు కట్టిన పట్టణమును గోపురమును చూడ దిగి వచ్చెను." },
                { "verse": 6, "text": "అప్పుడు యెహోవాఇదిగో జనము ఒక్కటే; వారికందరికి భాష ఒక్కటే; వారు ఈ పని ఆరంభించి యున్నారు. ఇకమీదట వారు చేయ దలచు ఏపని యైనను చేయకుండ వారికి ఆటంకమేమియు నుండద" },
                { "verse": 7, "text": "గనుక మనము దిగిపోయి వారిలో ఒకని మాట ఒకనికి తెలియకుండ అక్కడ వారి భాషను తారుమారు చేయుదము రండని అనుకొనెను." },
                { "verse": 8, "text": "ఆలాగు యెహోవా అక్కడ నుండి భూమియందంతట వారిని చెదరగొట్టెను గనుక వారు ఆ పట్టణమును కట్టుట మానిరి." },
                { "verse": 9, "text": "దానికి బాబెలు అను పేరు పెట్టిరి; ఎందు కనగా అక్కడ యెహోవా భూజనులందరి భాషను తారుమారుచేసెను. అక్కడ నుండి యెహోవా భూమియందంతట వారిని చెదరగొట్టెను." },
                { "verse": 10, "text": "షేము వంశావళి ఇది. షేము నూరేండ్లుగలవాడై జలప్రవాహము గతించిన రెండేండ్లకు అర్పక్షదును కనెను." },
                { "verse": 11, "text": "షేము అర్పక్షదును కనినతరువాత ఐదువందలయేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 12, "text": "అర్పక్షదు ముప్పది యైదేండ్లు బ్రదికి షేలహును కనెను." },
                { "verse": 13, "text": "అర్పక్షదు షేలహును కనినతరువాత నాలుగు వందలమూడేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 14, "text": "షేలహు ముప్పది యేండ్లు బ్రదికి ఏబెరును కనెను." },
                { "verse": 15, "text": "షేలహు ఏబెరును కనినతరువాత నాలుగు వందల మూడేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 16, "text": "ఏబెరు ముప్పది నాలుగేండ్లు బ్రదికి పెలెగును కనెను." },
                { "verse": 17, "text": "ఏబెరు పెలెగును కనినతరువాత నాలుగువందల ముప్పది యేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 18, "text": "పెలెగు ముప్పది యేండ్లు బ్రదికి రయూను కనెను." },
                { "verse": 19, "text": "పెలెగు రయూను కనినతరువాత రెండువందల తొమి్మది యేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 20, "text": "రయూ ముప్పది రెండేండ్లు బ్రదికి సెరూగును కనెను." },
                { "verse": 21, "text": "రయూ సెరూగును కనినతరువాత రెండు వందల ఏడేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 22, "text": "సెరూగు ముప్పది యేండ్లు బ్రదికి నాహోరును కనెను." },
                { "verse": 23, "text": "సెరూగు నాహోరును కనినతరువాత రెండువందల యేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 24, "text": "నాహోరు ఇరువది తొమి్మది యేండ్లు బ్రదికి తెరహును కనెను." },
                { "verse": 25, "text": "నాహోరు తెరహును కనినతరు వాత నూటపం దొమి్మది యేండ్లు బ్రదికి కుమారులను కుమార్తెలను కనెను." },
                { "verse": 26, "text": "తెరహు డెబ్బది యేండ్లు బ్రదికి అబ్రామును నాహో రును హారానును కనెను." },
                { "verse": 27, "text": "తెరహు వంశావళి ఇది; తెరహు అబ్రామును నాహో రును హారానును కనెను. హారాను లోతును కనెను." },
                { "verse": 28, "text": "హారాను తాను పుట్టిన దేశమందలి కల్దీయుల ఊరను పట్టణ ములో తన తండ్రియైన తెరహు కంటె ముందుగా మృతి బొందెను." },
                { "verse": 29, "text": "అబ్రామును నాహోరును వివాహము చేసి కొనిరి. అబ్రాము భార్య పేరు శారయి; నాహోరు భార్య పేరు మిల్కా, ఆమె మిల్కాకును ఇస్కాకును తండ్రియైన హారాను కుమార్తె." },
                { "verse": 30, "text": "శారయి గొడ్రాలై యుండెను. ఆమెకు సంతానములేదు." },
                { "verse": 31, "text": "తెరహు తన కుమారుడగు అబ్రామును, తన కుమారుని కుమారుడు, అనగా హారాను కుమారుడగు లోతును, తన కుమారుడగు అబ్రాము భార్యయయిన శారయి అను తన కోడలిని తీసికొని కనానుకు వెళ్ళుటకు కల్దీయుల ఊరను పట్టణములో నుండి వారితోకూడ బయలుదేరి హారాను మట్టుకు వచ్చి అక్కడ నివసించిరి." },
                { "verse": 32, "text": "తెరహు బ్రదికిన దినములు రెండువందల యైదేండ్లు. తెరహు హారానులో మృతి బొందెను." }
            ]
        },
        {
            "chapter": 12,
            "verses": [
                { "verse": 1, "text": "యెహోవానీవు లేచి నీ దేశమునుండియు నీ బంధువుల యొద్దనుండియు నీ తండ్రి యింటి నుండియు బయలుదేరి నేను నీకు చూపించు దేశమునకు వెళ్లుము." },
                { "verse": 2, "text": "నిన్ను గొప్ప జనముగా చేసి నిన్ను ఆశీర్వదించి నీ నామ మును గొప్ప చేయుదును, నీవు ఆశీర్వాదముగా నుందువు." },
                { "verse": 3, "text": "నిన్ను ఆశీర్వదించువారిని ఆశీర్వదించెదను; నిన్ను దూషించువాని శపించెదను; భూమియొక్క సమస్తవంశ ములు నీయందు ఆశీర్వదించబడునని అబ్రాముతో అనగా" },
                { "verse": 4, "text": "యెహోవా అతనితో చెప్పినప్రకారము అబ్రాము వెళ్లెను. లోతు అతనితో కూడ వెళ్లెను. అబ్రాము హారానునుండి బయలుదేరినప్పుడు డెబ్బదియైదేండ్ల యీడు గలవాడు." },
                { "verse": 5, "text": "అబ్రాము తన భార్యయయిన శారయిని తన సహోదరుని కుమారుడయిన లోతును, హారానులో తానును వారును ఆర్జించిన యావదాస్తిని వారు సంపా దించిన సమస్తమైనవారిని తీసికొని కనానను దె" },
                { "verse": 6, "text": "అప్పుడు అబ్రాము షెకెమునందలి యొక స్థలముదాక ఆ దేశ సంచారముచేసి మోరేదగ్గరనున్న సింధూరవృక్షము నొద్దకు చేరెను. అప్పుడు కనానీయులు ఆ దేశములో నివసించిరి." },
                { "verse": 7, "text": "యెహోవా అబ్రా మునకు ప్రత్యక్షమయినీ సంతానమునకు ఈ దేశ మిచ్చెదనని చెప్పగా అతడు తనకు ప్రత్యక్షమైన యెహోవాకు ఒక బలిపీఠమును కట్టెను." },
                { "verse": 8, "text": "అక్కడనుండి అతడు బయలుదేరి బేతేలుకు తూర్పుననున్న కొండకు చేరి పడమటనున్న బేతేలునకును తూర్పుననున్న హాయికిని మధ్యను గుడారము వేసి అక్కడ యెహోవాకు బలిపీఠవ" },
                { "verse": 9, "text": "అబ్రాము ఇంకా ప్రయాణము చేయుచు దక్షిణ దిక్కుకు వెళ్లెను." },
                { "verse": 10, "text": "అప్పుడు ఆ దేశములో కరవు వచ్చెను. ఆ దేశములో కరవు భారముగా నున్నందున అబ్రాము ఐగుప్తు దేశ ములో నివసించుటకు అక్కడికి వెళ్లెను." },
                { "verse": 11, "text": "అతడు ఐగుప్తులో ప్రవేశించుటకు సమీపించినప్పుడు అతడు తన భార్యయయిన శారయితోఇదిగో నీవు చక్కనిదానివని యెరుగుదును." },
                { "verse": 12, "text": "ఐగుప్తీయులు నిన్ను చూచి యీమె అతని భార్య అని చెప్పి నన్ను చంపి నిన్ను బ్రదుక నిచ్చెదరు." },
                { "verse": 13, "text": "నీవలన నాకు మేలుకలుగు నట్లును నిన్నుబట్టి నేను బ్రదుకు నట్లును నీవు నా సహోదరివని దయచేసి చెప్పుమనెను." },
                { "verse": 14, "text": "అబ్రాము ఐగుప్తులో చేరినప్పుడు ఐగుప్తీయులు ఆ స్త్రీ మిక్కిలి సౌందర్యవతియయి యుండుట చూచిరి" },
                { "verse": 15, "text": "ఫరోయొక్క అధిపతులు ఆమెను చూచి ఫరోయెదుట ఆమెను పొగడిరి గనుక ఆ స్త్రీ ఫరో యింటికి తేబడెను." },
                { "verse": 16, "text": "అతడామెనుబట్టి అబ్రామునకు మేలుచేసెను; అందువలన అతనికి గొఱ్ఱలు గొడ్లు మగ గాడిదలు దాసులు పనికత్తెలు ఆడుగాడిదలు ఒంటెలు ఇయ్యబడెను." },
                { "verse": 17, "text": "అయితే యెహోవా అబ్రాము భార్యయయిన శారయినిబట్టి ఫరోను అతని యింటివారిని మహావేద నలచేత బాధించెను." },
                { "verse": 18, "text": "అప్పుడు ఫరో అబ్రామును పిలిపించినీవు నాకు చేసినది యేమిటి? ఈమె నీ భార్య అని నాకెందుకు తెలుపలేదు?" },
                { "verse": 19, "text": "ఈమె నా సహోదరి అని యేల చెప్పితివి? నేనామెను నా భార్యగా చేసికొందునేమో అయితే నేమి, ఇదిగో నీ భార్య; ఈమెను తీసికొనిపొమ్మని చెప్పెను." },
                { "verse": 20, "text": "మరియు ఫరో అతని విషయమై తన జనుల కాజ్ఞాపించినందున వారు అతనిని అతని భార్యను అతనికి కలిగిన సమస్తమును పంపివేసిరి.." }
            ]
        },
        {
            "chapter": 13,
            "verses": [
                { "verse": 1, "text": "అబ్రాము తనకు కలిగిన సమస్తమును తన భార్యను తనతోకూడనున్న లోతును వెంటబెట్టు కొని ఐగుప్తులో నుండి నెగెబునకు వెళ్లెను." },
                { "verse": 2, "text": "అబ్రాము వెండి బంగారము పశువులు కలిగి బహు ధనవంతుడై యుండెను." },
                { "verse": 3, "text": "అతడు ప్రయాణము చేయుచు దక్షిణమునుండి బేతేలువరకు, అనగా బేతేలుకును హాయికిని మధ్య తన గుడారము మొదట ఉండిన స్థలమువరకు వెళ్లి" },
                { "verse": 4, "text": "తాను మొదట బలి పీఠమును కట్టినచోట చేరెను. అక్కడ అబ్రాము యెహోవా నామమున ప్రార్థన చేసెను." },
                { "verse": 5, "text": "అబ్రాముతో కూడ వెళ్లిన లోతుకును గొఱ్ఱలు గొడ్లు గుడారములు ఉండెను గనుక" },
                { "verse": 6, "text": "వారు కలిసి నివసించుటకు ఆ ప్రదేశము చాలక పోయెను; ఎందు కనగా వారి ఆస్తి వారు కలిసి నివ సించలేనంత విస్తారమైయుండెను." },
                { "verse": 7, "text": "అప్పుడు అబ్రాము పశువుల కాపరులకును లోతు పశువుల కాపరులకును కలహము పుట్టెను. ఆ కాలమందు కనానీయులు పెరిజ్జీ యులు ఆ దేశములో కాపురముండిరి." },
                { "verse": 8, "text": "కాబట్టి అబ్రాముమనము బంధువులము గనుక నాకు నీకును, నా పశువుల కాపరులకు నీ పశువుల కాపరులకును కలహ ముండకూడదు." },
                { "verse": 9, "text": "ఈ దేశమంతయు నీ యెదుట నున్నదిగదా, దయచేసి నన్ను విడిచి వేరుగానుండుము. నీవు ఎడమతట్టునకు వెళ్లిన యెడల నేను కుడితట్టుకును, నీవు కుడితట్టునకు వెళ్లినయెడల నేను యెడ మతట్టునకును వెళ్లుదునని లోతుతో చెప్పగా" },
                { "verse": 10, "text": "లోతు తన కన్నులెత్తి యొర్దాను ప్రాంతమంతటిని చూచెను. యెహోవా సొదొమ గొమొఱ్ఱా అను పట్టణములను నాశనము చేయకమునుపు సోయరుకు వచ్చువరకు అదంతయు యెహోవా తోటవలెను ఐగుప్తు దేశమువలెను నీళ్లు పారు దేశమైయుండెను." },
                { "verse": 11, "text": "కాబట్టి లోతు తనకు యొర్దాను ప్రాంతమంతటిని ఏర్పరచుకొని తూర్పుగా ప్రయాణముచేసెను. అట్లు వారు ఒకరి కొకరు వేరై పోయిరి." },
                { "verse": 12, "text": "అబ్రాము కనానులో నివసించెను. లోతు ఆ మైదానమందున్న పట్టణముల ప్రదేశములలో కాపుర ముండి సొదొమదగ్గర తన గుడారము వేసికొనెను." },
                { "verse": 13, "text": "సొదొమ మనుష్యులు దుష్టులును, యెహోవా దృష్టికి బహు పాపులునై యుండిరి." },
                { "verse": 14, "text": "లోతు అబ్రామును విడిచి పోయినతరువాత యెహోవాఇదిగో నీ కన్నులెత్తి నీవు ఉన్నచోటనుండి ఉత్తరపుతట్టు దక్షిణపుతట్టు తూర్పు తట్టు పడమరతట్టును చూడుము;" },
                { "verse": 15, "text": "ఎందుకనగా నీవు చూచుచున్న యీ దేశమంతటిని నీకును నీ సంతానమునకును సదాకాలము ఇచ్చెదను." },
                { "verse": 16, "text": "మరియు నీ సంతానమును భూమిమీదనుండు రేణు వులవలె విస్తరింప చేసెదను; ఎట్లనగా ఒకడు భూమిమీదనుండు రేణువులను లెక్కింప గలిగినయెడల నీ సంతానమునుకూడ లెక్కింపవచ్చును." },
                { "verse": 17, "text": "నీవు లేచి యీ దేశముయొక్క పొడుగున వెడల్పున దానిలో సంచరించుము; అది నీకిచ్చెదనని అబ్రాముతో చెప్పెను." },
                { "verse": 18, "text": "అప్పుడు అబ్రాము తన గుడారము తీసిహెబ్రోను లోని మమ్రే దగ్గరనున్న సింధూరవృక్షవన ములోదిగి అక్కడ యెహోవాకు బలిపీఠమును కట్టెను." }
            ]
        },
        {
            "chapter": 14,
            "verses": [
                { "verse": 1, "text": "షీనారు రాజైన అమ్రాపేలు, ఎల్లాసరు రాజైన అర్యోకు, ఏలాము రాజైన కదొర్లాయోమెరు, గోయీ యుల రాజైన తిదాలు అనువారి దినములలో" },
                { "verse": 2, "text": "వారు సొదొమ రాజైన బెరాతోను, గొమొఱ్ఱా రాజైన బిర్షాతోను, అద్మా రాజైన షినాబుతోను, సెబోయీయుల రాజైన షెమేబెరుతోను, సోయరను బెలరాజుతోను యుద్ధము చేసిరి." },
                { "verse": 3, "text": "వీరందరు ఉప్పు సముద్రమైన సిద్దీములోయలో ఏకముగా కూడి" },
                { "verse": 4, "text": "పండ్రెండు సంవత్సరములు కదొర్లా యోమెరుకు లోబడి పదమూడవ సంవత్సరమున తిరుగు బాటు చేసిరి." },
                { "verse": 5, "text": "పదునాలుగవ సంవత్సరమున కదొర్లా యోమెరును అతనితో కూడనున్న రాజులును వచ్చి అష్తా రోత్‌ కర్నాయిములో రెఫాయీయులను హాములో జూజీయులను షావే కిర్యతాయిము మైదానములో" },
                { "verse": 6, "text": "ఏమీయులను కొట్టిరి. మరియు హోరీయులను అరణ్యము దగ్గరనున్న ఏల్పారాను వరకు తరిమి శేయీరు పర్వత ప్రదేశములో వారిని కొట్టిన తరువాత" },
                { "verse": 7, "text": "తిరిగి కాదేషను ఏన్మిష్పతుకువచ్చి అమాలేకీయుల దేశమంతటిని హససోన్‌ తామారులో కాపురమున్న అమోరీయులనుకూడ కొట్టిరి." },
                { "verse": 8, "text": "అప్పుడు సొదొమ రాజును గొమొఱ్ఱా రాజును అద్మా రాజును సెబోయీము రాజును సోయరను బెల రాజును బయలుదేరి సిద్దీము లోయలో వారితో," },
                { "verse": 9, "text": "అనగా ఏలాము రాజైన కదొర్లాయోమెరు గోయీయుల రాజైన తిదాలు, షీనారు రాజైన అమ్రాపేలు, ఎల్లాసరు రాజైన అర్యోకు అను నలుగురితో ఆ యైదుగురు రాజులు యుద్ధము చేసిరి." },
                { "verse": 10, "text": "ఆ సిద్దీము లోయలో విస్తారమైన మట్టికీలు గుంటలు ఉండెను. సొదొమ గొమొఱ్ఱాల రాజులు పారిపోయి వాటిలో పడిరి. శేషించిన వారు కొండకు పారిపోయిరి." },
                { "verse": 11, "text": "అప్పుడు వారు సొదొమ గొమొఱ్ఱాల ఆస్తి యావత్తును వారి భోజన పదార్థములన్నియు పట్టుకొని పోయిరి." },
                { "verse": 12, "text": "మరియు అబ్రాము సహోదరుని కుమారుడైన లోతు సొదొమలో కాపుర ముండెను గనుక అతనిని అతని ఆస్తిని పట్టుకొనిపోగా" },
                { "verse": 13, "text": "తప్పించుకొనిన యొకడు వచ్చి హెబ్రీయుడైన అబ్రా మునకు ఆ సంగతి తెలిపెను. అప్పుడతడు ఎష్కోలు సహోదరుడును ఆనేరు సహోదరుడునైన మమ్రే అను అమోరీయుని ఏలోను వనములో కాపురముండెను. వీరు అబ్రాముతో నిబంధన చేసికొనినవారు." },
                { "verse": 14, "text": "అబ్రాము తన తమ్ముడు చెరపట్టబడెనని విని తన యింట పుట్టి అలవరచబడిన మూడువందల పదునెనమండుగురిని వెంటబెట్టుకొని దానుమట్టుకు ఆ రాజులను తరిమెను." },
                { "verse": 15, "text": "రాత్రివేళ అతడును అతని దాసులును వారికెదురుగా మొనలు తీర్చి వారిని కొట్టి దమస్కునకు ఎడమతట్టున్న హోబా మట్టుకు తరిమి" },
                { "verse": 16, "text": "ఆస్తి యావత్తు తిరిగి తెచ్చి తన తమ్ముడైన లోతును అతని ఆస్తిని స్త్రీలను ప్రజలను తిరిగి తీసికొని వచ్చెను." },
                { "verse": 17, "text": "అతడు కదొర్లాయోమెరును అతనితో కూడనున్న రాజులను ఓడించి తిరిగి వచ్చినప్పుడు సొదొమ రాజు అతనిని ఎదుర్కొనుటకు, రాజులోయ అను షావే లోయ మట్టుకు బయలుదేరి వచ్చెను." },
                { "verse": 18, "text": "మరియు షాలేము రాజైన మెల్కీసెదెకు రొట్టెను ద్రాక్షారసమును తీసికొనివచ్చెను. అతడు సర్వోన్నతుడగు దేవునికి యాజకుడు." },
                { "verse": 19, "text": "అప్పు డతడు అబ్రామును ఆశీర్వదించిఆకాశమునకు భూమి కిని సృష్టికర్తయును సర్వోన్నతుడునైన దేవునివలన అబ్రాము ఆశీర్వ దింపబడునుగాక అనియు," },
                { "verse": 20, "text": "నీ శత్రు వులను నీ చేతి కప్పగించిన సర్వోన్నతుడగు దేవుడు స్తుతింపబడును గాక అనియు చెప్పెను. అప్పుడతడు అన్ని టిలో ఇతనికి పదియవవంతు ఇచ్చెను." },
                { "verse": 21, "text": "సొదొమ రాజుమనుష్యులను నాకిచ్చి ఆస్తిని నీవే తీసికొనుమని అబ్రాముతో చెప్పగా" },
                { "verse": 22, "text": "అబ్రాము నేనే అబ్రామును ధనవంతునిగా చేసితినని నీవు చెప్పకుండునట్లు ఒక నూలు పోగైనను చెప్పుల వారైనను నీవాటిలో ఏదైనను తీసికొన" },
                { "verse": 23, "text": "నని ఆకాశమునకు భూమికిని సృష్టికర్తయును సర్వోన్నతు డును దేవుడునైన యెహోవాయెదుట నా చెయ్యియెత్తి ప్రమాణము చేసియున్నాను." },
                { "verse": 24, "text": "అయితే ఈ పడుచువారు భుజించినది తప్ప నాతోకూడ వచ్చిన ఆనేరు ఎష్కోలు మమ్రే అను వారికి ఏయే భాగములు రావలెనో ఆయా భాగములు మాత్రము వారిని తీసికొననిమ్మని సొదొమ రాజుతో చెప్పెను." }
            ]
        },
        {
            "chapter": 15,
            "verses": [
                { "verse": 1, "text": "ఇవి జరిగినతరువాత యెహోవా వాక్యము అబ్రామునకు దర్శనమందు వచ్చి అబ్రామా, భయపడకుము; నేను నీకు కేడెము, నీ బహుమానము అత్యధికమగునని చెప్పెను." },
                { "verse": 2, "text": "అందుకు అబ్రాముప్రభువైన యెహోవా నాకేమి యిచ్చిననేమి? నేను సంతానము లేనివాడనై పోవుచున్నానే; దమస్కు ఎలీయెజెరే నాయింటి ఆస్తి కర్తయగును గదా" },
                { "verse": 3, "text": "మరియు అబ్రాముఇదిగో నీవు నాకు సంతానమియ్యలేదు గనుక నా పరివారములో ఒకడు నాకు వారసుడగునని చెప్పగా" },
                { "verse": 4, "text": "యెహోవా వాక్యము అతని యొద్దకు వచ్చి ఇతడు నీకు వారసుడు కాడు; నీ గర్భవాసమున పుట్టబోవుచున్నవాడు నీకు వారసుడగునని చెప్పెను." },
                { "verse": 5, "text": "మరియు ఆయన వెలుపలికి అతని తీసికొని వచ్చినీవు ఆకాశమువైపు తేరిచూచి నక్షత్రములను లెక్కించుటకు నీ చేతనైతే లెక్కించుమని చెప్పినీ సంతానము ఆలాగవునని చెప్పెను." },
                { "verse": 6, "text": "అతడు యెహోవాను నమ్మెను; ఆయన అది అతనికి నీతిగా ఎంచెను." },
                { "verse": 7, "text": "మరియు ఆయననీవు ఈ దేశమును స్వతం త్రించు కొనునట్లు దాని నీకిచ్చుటకు కల్దీయుల ఊరను పట్టణములోనుండి నిన్ను ఇవతలకు తీసికొని వచ్చిన యెహోవాను నేనే అని చెప్పినప్పుడు" },
                { "verse": 8, "text": "అతడు ప్రభువైన యెహోవా, నేను దీని స్వతంత్రించు కొనెదనని నాకెట్లు తెలియుననగా" },
                { "verse": 9, "text": "ఆయన మూడేండ్ల పెయ్యను మూడేండ్ల మేకను మూడేండ్ల పొట్టేలును ఒక తెల్ల గువ్వను ఒక పావురపు పిల్లను నా యొద్దకు తెమ్మని అతనితో చెప్పెను." },
                { "verse": 10, "text": "అతడు అవన్నియు తీసికొని వాటిని నడుమకు ఖండించి దేని ఖండమును దాని ఖండమునకు ఎదురుగా నుంచెను; పక్షులను అతడు ఖండింపలేదు" },
                { "verse": 11, "text": "గద్దలు ఆ కళేబరముల మీద వాలినప్పుడు అబ్రాము వాటిని తోలివేసెను." },
                { "verse": 12, "text": "ప్రొద్దుగ్రుంక బోయినప్పుడు అబ్రామునకు గాఢనిద్రపట్టెను. భయంకరమైన కటికచీకటి అతని కమ్మగా" },
                { "verse": 13, "text": "ఆయననీ సంతతివారు తమది కాని పరదేశమందు నివసించి ఆ దేశపువారికి దాసులుగా నుందురు." },
                { "verse": 14, "text": "వారు నాలుగు వందల యేండ్లు వీరిని శ్రమ పెట్టుదురు; వీరు ఎవరికి దాసులవుదురో ఆ జనమునకు నేనే తీర్పు తీర్చుదును. తరువాత వారు మిక్కిలి ఆస్తితో బయలుదేరి వచ్చెదరు." },
                { "verse": 15, "text": "నీవు క్షేమముగా నీ పితరుల యొద్దకు పోయె దవు; మంచి వృద్ధాప్యమందు పాతిపెట్టబడుదువు." },
                { "verse": 16, "text": "అమోరీయుల అక్రమము ఇంకను సంపూర్ణము కాలేదు గనుక నీ నాలుగవ తరమువారు ఇక్కడికి మరల వచ్చెదరని నిశ్చయముగా తెలిసికొనుమని అబ్రాముతో చెప్పెను." },
                { "verse": 17, "text": "మరియు ప్రొద్దు గ్రుంకి కటిక చీకటి పడినప్పుడు రాజుచున్నపొయ్యియు అగ్నిజ్వాలయును కనబడి ఆ ఖండముల మధ్య నడిచిపోయెను." },
                { "verse": 18, "text": "ఆ దినమందే యెహోవాఐగుప్తు నది మొదలుకొని గొప్ప నదియైన యూఫ్రటీసు నదివరకు ఈ దేశమును, అనగా" },
                { "verse": 19, "text": "కేనీయు లను కనిజ్జీయులను కద్మోనీయులను" },
                { "verse": 20, "text": "హిత్తీయులను పెరి జ్జీయులను రెఫాయీయులను" },
                { "verse": 21, "text": "అమోరీయులను కనా నీయులను గిర్గాషీయులను యెబూసీయులను నీ సంతాన మున కిచ్చియున్నానని అబ్రాముతో నిబంధన చేసెను." }
            ]
        },
        {
            "chapter": 16,
            "verses": [
                { "verse": 1, "text": "అబ్రాము భార్యయైన శారయి అతనికి పిల్లలు కనలేదు. ఆమెకు హాగరు అను ఐగుప్తీయురాలైన దాసి యుండెను." },
                { "verse": 2, "text": "కాగా శారయిఇదిగో నేను పిల్లలు కనకుండ యెహోవా చేసి యున్నాడు. నీవు దయచేసి నా దాసితో పొమ్ము; ఒకవేళ ఆమెవలన నాకు సంతానము కలుగవచ్చునని అబ్రాముతో చెప్పెను; అబ్రాము శారయి మాట వినెను." },
                { "verse": 3, "text": "కాబట్టి అబ్రాము కనాను దేశములో పదియేండ్లు కాపురమున్న తరువాత అబ్రాము భార్యయైన శారయి తన దాసియైన హాగరను ఐగుప్తీయు రాలిని తీసికొని తన పెనిమిటియైన అబ్రామునకు భార్యగా ఉండునట్లు అతనికిచ్చెను." },
                { "verse": 4, "text": "అతడు హాగరుతో పోయినప్పుడు అది గర్భవతి ఆయెను. అది తాను గర్భవతి నైతినని తెలిసికొనినప్పుడు దాని యజమానురాలు దానిదృష్టికి నీచమైనదాయెను." },
                { "verse": 5, "text": "అప్పుడు శారయినా ఉసురు నీకు తగులును; నేనే నా దాసిని నీ కౌగిటి కిచ్చిన తరువాత తాను గర్భవతినైతినని తెలిసికొనినప్పుడు నేను దానిదృష్టికి నీచమైనదాననైతిని; నాకును నీకును యెహ" },
                { "verse": 6, "text": "అందుకు అబ్రాముఇదిగో నీ దాసి నీ చేతిలో ఉన్నది; నీ మనస్సు వచ్చినట్లు దాని చేయుమని శారయితో చెప్పెను. శారయి దాని శ్రమ పెట్టినందున ఆమె యొద్దనుండి అది పారిపోగా" },
                { "verse": 7, "text": "యెహోవా దూత అరణ్య ములో నీటిబుగ్గయొద్ద, అనగా షూరు మార్గములో బుగ్గ యొద్ద, ఆమెను కనుగొని" },
                { "verse": 8, "text": "శారయి దాసివైన హాగరూ, ఎక్కడనుండి వచ్చితివి, ఎక్కడికి వెళ్ళుచున్నావని అడిగి నందుకు అదినా యజమానురాలైన శారయియొద్దనుండి పారిపోవుచున్నాననెను." },
                { "verse": 9, "text": "అప్పుడు యెహోవా దూతనీ యజమానురాలి యొద్దకు తిరిగి వెళ్లి ఆమె చేతి క్రింద అణిగియుండుమని దానితో చెప్పెను." },
                { "verse": 10, "text": "మరియు యెహోవా దూతనీ సంతానమును నిశ్చయముగా విస్త రింపజేసెదను; అది లెక్కింప వీలులేనంతగా విస్తారమవునని దానితో చెప్పెను." },
                { "verse": 11, "text": "మరియు యెహోవా దూతఇదిగో యెహోవా నీ మొరను వినెను. నీవు గర్భవతివై యున్నావు; నీవు కుమారుని కని అతనికి ఇష్మాయేలు అను పేరు పెట్టుదువు;" },
                { "verse": 12, "text": "అతడు అడవిగాడిదవంటి మనుష్యుడు. అతని చెయ్యి అందరికిని అందరి చేతులు అతనికిని విరోధముగా ఉండును. అతడు తన సహోదరులందరి యెదుట నివసించునని దానితో చెప్పగా" },
                { "verse": 13, "text": "అదిచూచుచున్న దేవుడవు నీవే అను పేరు తనతో మాటలాడిన యెహోవాకు పెట్టెను ఏలయనగా నన్ను చూచినవాని నేనిక్కడ చూచితిని గదా అని అనుకొనెను." },
                { "verse": 14, "text": "అందుచేత ఆ నీటిబుగ్గకు బెయేర్‌ లహాయిరోయి అను పేరు పెట్టబడెను. అది కాదేషుకును బెరెదుకును మధ్య నున్నది." },
                { "verse": 15, "text": "తరువాత హాగరు అబ్రామునకు కుమారుని కనెను. అబ్రాము హాగరు కనిన తన కుమారునికి ఇష్మా యేలను పేరు పెట్టెను." },
                { "verse": 16, "text": "హాగరు అబ్రామునకు ఇష్మా యేలును కనినప్పుడు అబ్రాము ఎనుబదియారు ఏండ్ల వాడు." }
            ]
        },
        {
            "chapter": 17,
            "verses": [
                { "verse": 1, "text": "అబ్రాము తొంబదితొమి్మది యేండ్లవాడైనప్పుడు యెహోవా అతనికి ప్రత్యక్షమైనేను సర్వశక్తిగల దేవుడను; నా సన్నిధిలో నడుచుచు నిందారహితుడవై యుండుము." },
                { "verse": 2, "text": "నాకును నీకును మధ్య నా నిబంధనను నియమించి నిన్ను అత్యధికముగా అభివృద్ధి పొందించెద నని అతనితో చెప్పెను." },
                { "verse": 3, "text": "అబ్రాము సాగిలపడియుండగా దేవుడతనితో మాటలాడి ఇదిగో నేను నియమించిన నా నిబంధన నీతో చేసియున్నాను;" },
                { "verse": 4, "text": "నీవు అనేక జనములకు తండ్రివగుదువు." },
                { "verse": 5, "text": "మరియు ఇకమీదట నీ పేరు అబ్రాము అనబడదు; నిన్ను అనేక జనములకు తండ్రినిగా నియమించితిని గనుక నీ పేరు అబ్రాహాము అన బడును." },
                { "verse": 6, "text": "నీకు అత్యధికముగా సంతానవృద్ధి కలుగజేసి నీలోనుండి జనములు వచ్చునట్లు నియమించుదును, రాజు లును నీలోనుండి వచ్చెదరు." },
                { "verse": 7, "text": "నేను నీకును నీ తరువాత నీ సంతానమునకును దేవుడనై యుండునట్లు, నాకును నీకును, నీ తరువాత వారి తరములలో నీ సంతతికిని మధ్య నా నిబంధనను నిత్యనిబంధనగా స్థిరపరచెదను." },
                { "verse": 8, "text": "నీకును నీతరు వాత నీ సంతతికిని నీవు పరదేశివైయున్న దేశమును, అనగా కనానను దేశమంతటిని నిత్యస్వాస్థ్యముగా ఇచ్చి వారికి దేవుడనై యుందునని అతనితో చెప్పెను." },
                { "verse": 9, "text": "మరియు దేవుడునీవును, నీవు మాత్రమే గాక నీ తరువాత వారి తరములలో నీ సంతతియు నా నిబంధనను గైకొన వలెను." },
                { "verse": 10, "text": "నాకును నీకును నీ తరువాత నీ సంతతికిని మధ్య మీరు గైకొనవలసిన నా నిబంధన యేదనగామీలో ప్రతి మగవాడును సున్నతి పొంద వలెను." },
                { "verse": 11, "text": "మీరు మీ గోప్యాంగచర్మమున సున్నతి పొందవలెను. అది నాకు నీకు మధ్యనున్న నిబంధనకు సూచనగా ఉండును." },
                { "verse": 12, "text": "ఎనిమిది దినముల వయస్సుగలవాడు, అనగా నీ యింట పుట్టినవాడైనను, నీ సంతానము కాని అన్యునియొద్ద వెండితో కొనబడినవాడైనను, మీ తరములలో ప్రతి మగవాడు మీలో సున్నతి పొందవలెను." },
                { "verse": 13, "text": "నీ యింట పుట్టినవాడును నీ వెండితో కొనబడినవాడును, తప్పక సున్నతి పొందవలెను. అప్పుడు నా నిబంధన మీ శరీర మందు నిత్య నిబంధనగా ఉండును." },
                { "verse": 14, "text": "సున్నతి పొందని మగవాడు, అనగా ఎవని గోప్యాంగచర్మమున సున్నతి చేయబడదో అట్టివాడు తన జనులలోనుండి కొట్టి వేయ బడును. వాడు నా నిబంధనను మీరియున్నాడని అబ్రాహాముతో చెప్పెను." },
                { "verse": 15, "text": "మరియు దేవుడునీ భార్యయైన శారయి పేరు శారయి అనవద్దు; ఏలయనగా ఆమె పేరు శారా" },
                { "verse": 16, "text": "నేనామెను ఆశీర్వదించి ఆమెవలన నీకు కుమారుని కలుగజేసెదను; నేనామెను ఆశీర్వదించెదను; ఆమె జనములకు తల్లియై యుండును; జనముల రాజులు ఆమెవలన కలు గుదురని అబ్రాహాముతో చెప్పెను." },
                { "verse": 17, "text": "అప్పుడు అబ్రాహాము సాగిలపడి నవి్వనూరేండ్ల వానికి సంతానము కలుగునా? తొంబదియేండ్ల శారా కనునా? అని మనస్సులో అను కొనెను." },
                { "verse": 18, "text": "అబ్రాహాముఇష్మాయేలు నీ సన్నిధిని బ్రదుక ననుగ్రహించుము అని దేవునితో చెప్పగా" },
                { "verse": 19, "text": "దేవుడునీ భార్యయైన శారా నిశ్చయముగా నీకు కుమారుని కనును; నీవతనికి ఇస్సాకు అను పేరు పెట్టుదువు; అతని తరువాత అతని సంతానముకొరకు నిత్యనిబంధనగా నా నిబంధనను అతనితో స్థిరపర చెదను." },
                { "verse": 20, "text": "ఇష్మాయేలునుగూర్చి నీవు చేసిన మనవి నేను వింటిని. ఇదిగో నేనతనిని ఆశీర్వదించి అతనికి సంతానాభివృద్ధి కలుగజేసి అత్యధిక ముగా అతని విస్తరింపజేసెదను; అతడు పండ్రెండు మంది రాజులను కనును; అతనిని గొప్ప జనముగా చేసెదను;" },
                { "verse": 21, "text": "అయితే వచ్చు సంవత్సరము ఈ కాల మందు శారా నీకు కనబోవు ఇస్సాకుతో నా నిబంధనను స్థిరపరచెదనని చెప్పెను." },
                { "verse": 22, "text": "దేవుడు అబ్రాహాముతో మాటలాడుట చాలించిన తరువాత అతని యొద్దనుండి పరమునకు వెళ్లెను." },
                { "verse": 23, "text": "అప్పుడు అబ్రా హాము తన కుమారుడైన ఇష్మాయేలును, తన యింట పుట్టిన వారినందరిని, తన వెండితో కొనబడిన వారినందరిని, అబ్రాహాము ఇంటి మనుష్యులలో ప్రతివానిని పట్టుకొని దేవుడు తన" },
                { "verse": 24, "text": "అబ్రాహాము గోప్యాంగ చర్మము సున్నతి చేయబడినప్పుడు అతడు తొంబది తొమి్మది యేండ్లవాడు." },
                { "verse": 25, "text": "అతని కుమారుడైన ఇష్మాయేలు గోప్యాంగచర్మము సున్నతి చేయబడినప్పుడు అతడు పదుమూడేండ్లవాడు." },
                { "verse": 26, "text": "ఒక్కదినమందే అబ్రా హామును అతని కుమారుడైన ఇష్మాయేలును సున్నతి పొందిరి." },
                { "verse": 27, "text": "అతని యింట పుట్టినవారును అన్యునియొద్ద వెండితో కొనబడినవారును అతని యింటిలోని పురుషు లందరును అతనితో కూడ సున్నతి పొందిరి." }
            ]
        },
        {
            "chapter": 18,
            "verses": [
                { "verse": 1, "text": "మరియు మమ్రేదగ్గరనున్న సింధూరవనములో అబ్రాహాము ఎండవేళ గుడారపు ద్వారమందు కూర్చుని యున్నప్పుడు యెహోవా అతనికి కన బడెను." },
                { "verse": 2, "text": "అతడు కన్నులెత్తి చూచినప్పుడు ముగ్గురు మనుష్యులు అతని యెదుట నిలువబడి యుండిరి. అతడు వారిని చూచి గుడారపు వాకిటనుండి వారిని ఎదుర్కొనుటకు పరుగెత్తి, నేలమట్టుకు వంగి" },
                { "verse": 3, "text": "ప్రభువా, నీ కటాక్షము నామీద నున్న యెడల ఇప్పుడు నీ దాసుని దాటి పోవద్దు." },
                { "verse": 4, "text": "నేను కొంచెము నీళ్లు తెప్పించెదను; దయచేసి కాళ్లు కడుగు కొని ఈ చెట్టు క్రింద అలసట తీర్చుకొనుడి." },
                { "verse": 5, "text": "కొంచెము ఆహారము తెచ్చెదను; మీ ప్రాణములను బలపరచు కొనుడి; తరువాత మీరు వెళ్లవచ్చును; ఇందు నిమిత్తము గదా మీ దాసుని యొద్దకు వచ్చితిరనెను. వారునీవు చెప్పి నట్లు చేయుమనగా" },
                { "verse": 6, "text": "అబ్రాహాము గుడారములో నున్న శారాయొద్దకు త్వరగా వెళ్లినీవు త్వరపడి మూడు మానికల మెత్తనిపిండి తెచ్చి పిసికి రొట్టెలు చేయుమని చెప్పెను." },
                { "verse": 7, "text": "మరియు అబ్రాహాము పశువుల మందకు పరుగెత్తి ఒక మంచి లేత దూడను తెచ్చి ఒక పనివాని కప్ప గించెను. వాడు దాని త్వరగా సిద్ధపరచెను." },
                { "verse": 8, "text": "తరువాత అతడు వెన్నను పాలను తాను సిద్ధము చేయించిన దూడను తెచ్చి వారియెదుట పెట్టి వారు భోజనము చేయు చుండగా వారియొద్ద ఆ చెట్టుక్రింద నిలుచుండెను." },
                { "verse": 9, "text": "వారతనితో నీ భార్యయైన శారా ఎక్కడ నున్నదని అడుగగా అతడు అదిగో గుడారములో నున్నదని చెప్పెను." },
                { "verse": 10, "text": "అందుకాయనమీదటికి ఈ కాలమున నీయొద్దకు నిశ్చ యముగా మరల వచ్చెదను. అప్పడు నీ భార్యయైన శారాకు ఒక కుమారుడు కలుగునని చెప్పెను. శారా ఆయన వెనుక నుండిన గుడారపు ద్వాం" },
                { "verse": 11, "text": "అబ్రాహామును శారాయును బహుకాలము గడచిన వృద్ధులై యుండిరి. స్త్రీ ధర్మము శారాకు నిలిచి పోయెను గనుక" },
                { "verse": 12, "text": "శారానేను బలము ఉడిగిన దాననైన తరువాత నాకు సుఖము కలుగునా? నా యజమాను డును వృద్ధుడై యున్నాడు గదా అని తనలో నవ్వుకొనెను." },
                { "verse": 13, "text": "అంతట యెహోవా అబ్రాహాముతోవృద్ధురాలనైన నేను నిశ్చయముగా ప్రసవించెదనా అని శారా నవ్వనేల?" },
                { "verse": 14, "text": "యెహోవాకు అసాధ్యమైనది ఏదైన నున్నదా? మీదటికి ఈ కాలమున నిర్ణయకాలమందు నీ యొద్దకు తిరిగి వచ్చెదను. అప్పుడు శారాకు కుమారుడు కలుగుననెను." },
                { "verse": 15, "text": "శారా భయపడినేను నవ్వలేదని చెప్పగా ఆయన అవును నీవు నవి్వతివనెను." },
                { "verse": 16, "text": "అప్పుడా మనుష్యులు అక్కడనుండి లేచి సొదొమ తట్టు చూచిరి. అబ్రాహాము వారిని సాగనంపుటకు వారితోకూడ వెళ్లెను." },
                { "verse": 17, "text": "అప్పుడు యెహోవానేను చేయబోవు కార్యము అబ్రాహామునకు దాచెదనా?" },
                { "verse": 18, "text": "అబ్రాహాము నిశ్చయముగా బలముగల గొప్ప జనమగును. అతని మూలముగా భూమిలోని సమస్త జనములును ఆశీర్వదింపబడును." },
                { "verse": 19, "text": "ఎట్లనగా యెహోవా అబ్రాహామును గూర్చి చెప్పినది అతనికి కలుగ జేయునట్లు తన తరువాత తన పిల్లలును తన యింటి వారును నీతి న్యాయములు జరి గించుచు, యెహోవా మార్గమును గైకొనుటకు అతడు వారి కాజ్ఞాపించినట్లు నేనతని నెరిగియున్నాననెను." },
                { "verse": 20, "text": "మరియు యెహోవాసొదొమ గొమొఱ్ఱాలను గూర్చిన మొర గొప్పది గనుకను వాటి పాపము బహు భారమైనది గనుకను" },
                { "verse": 21, "text": "నేను దిగిపోయి నాయొద్దకు వచ్చిన ఆ మొర చొప్పుననే వారు సంపూర్ణముగా చేసిరో లేదో చూచెదను; చేయనియెడల నేను తెలిసికొందుననెను." },
                { "verse": 22, "text": "ఆ మనుష్యులు అక్కడనుండి తిరిగి సొదొమ వైపుగా వెళ్లిరి. అబ్రాహాము ఇంక యెహోవా సన్నిధిని నిలుచుండెను." },
                { "verse": 23, "text": "అప్పడు అబ్రాహాము సమీపించి యిట్లనెనుదుష్టులతోకూడ నీతి మంతులను నాశనము చేయుదువా?" },
                { "verse": 24, "text": "ఆ పట్టణములో ఒకవేళ ఏబదిమంది నీతిమంతులుండినయెడల దానిలోనున్న యేబదిమంది నీతి మంతుల నిమిత్తము ఆ స్థలమును నాశనము చేయక కాయవా?" },
                { "verse": 25, "text": "ఆ చొప్పున చేసి దుష్టులతో కూడ నీతి మంతులను చంపుట నీకు దూరమవునుగాక. నీతిమంతుని దుష్టు నితో సమముగా ఎంచుట నీకు దూరమవు గాక. సర్వలోకమునకు తీర్పు తీర్చువాడు న్యాయము చేయడా అని చెప్పినప్పుడు" },
                { "verse": 26, "text": "యెహోవాసొదొమ పట్టణములో ఏబదిమంది నీతిమంతులు నాకు కనబడినయెడల వారినిబట్టి ఆ స్థలమంతటిని కాయుదుననెను" },
                { "verse": 27, "text": "అందుకు అబ్రాహాముఇదిగో ధూళియు బూడిదెయునైన నేను ప్రభువుతో మాటలాడ తెగించుచున్నాను." },
                { "verse": 28, "text": "ఏబదిమంది నీతిమంతులలో ఒకవేళ ఐదుగురు తక్కువైతే ఐదుగురు తక్కువై నందున ఆ పట్టణమంతయు నాశనము చేయుదువా అని మరల అడిగెను. అందుకాయన అక్కడ నలుబది యైదు గురు నాకు కనబడినయెడల నాశనము చేయననెను;" },
                { "verse": 29, "text": "అతడింక ఆయనతో మాటలాడుచుఒకవేళ అక్కడ నలుబదిమందియే కనబడుదురేమో అనినప్పుడు ఆయనఆ నలుబదిమందిని బట్టి నాశనముచేయక యుందునని చెప్పగా" },
                { "verse": 30, "text": "అతడు ప్రభువు కోపపడనియెడల నేను మాటలాడెదను; ఒకవేళ అక్కడ ముప్పదిమందియే కన బడుదురేమో అనినప్పుడు ఆయన అక్కడ ముప్పదిమంది నాకు కనబడినయెడల నాశనము చె" },
                { "verse": 31, "text": "అందు కతడుఇదిగో ప్రభువుతో మాటలాడ తెగించితిని; ఒకవేళ అక్కడ ఇరువదిమంది కనబడుదురేమో అని నప్పుడు ఆయన ఆ యిరువదిమందినిబట్టి నాశనము చేయ కుందుననగా" },
                { "verse": 32, "text": "అతడు ప్రభువు కోపపడనియెడల నే నింకొకమారే మాటలాడెదను; ఒకవేళ అక్కడ పదిమంది కనబడుదురేమో అనినప్పుడు ఆయన ఆ పదిమందినిబట్టి నాశనము చేయక యుందుననెను." },
                { "verse": 33, "text": "యెహోవా అబ్రా హాముతో మాటలాడుట చాలించి వెళ్లిపోయెను. అబ్రాహాము తన యింటికి తిరిగి వెళ్లెను." }
            ]
        },
        {
            "chapter": 19,
            "verses": [
                { "verse": 1, "text": "ఆ సాయంకాలమందు ఆ ఇద్దరు దేవదూతలు సొదొమ చేరునప్పటికి లోతు సొదొమ గవినియొద్ద కూర్చుండియుండెను. లోతు వారిని చూచి వారిని ఎదు ర్కొనుటకు లేచి సాష్టాంగ నమస్కారముచేసి" },
                { "verse": 2, "text": "నా ప్రభువులారా, దయచేసి మీ దాసుని యింటికి వచ్చి రాత్రి వెళ్లబుచ్చి కాళ్లు కడుగుకొనుడి, మీరు పెందలకడ లేచి మీ త్రోవను వెళ్ళవచ్చుననెను. అందుకు వారుఆలాగు కాదు, నడివీధిలో రాత్రి" },
                { "verse": 3, "text": "అయినను అతడు మిక్కిలి బలవంతము చేసినప్పుడు వారు అతని తట్టు తిరిగి అతని యింట ప్రవే శించిరి. అతడు వారికి విందుచేసి పొంగని రొట్టెలు కాల్చగా వారు భోజనము చేసిరి." },
                { "verse": 4, "text": "వారు పండుకొనక ముందు ఆ పట్టణస్థులు, అనగా సొదొమ మనుష్యులు, బాలురును వృద్ధులును ప్రజలందరును నలుదిక్కులనుండి కూడివచ్చి ఆ యిల్లు చుట్టవేసి" },
                { "verse": 5, "text": "లోతును పిలిచిఈ రాత్రి నీ యొద్దకు వచ్చిన మనుష్యులు ఎక్కడ ? మేము వారిని కూడునట్లు మా యొద్దకు వారిని వెలుపలికి తీసికొని రమ్మని అతనితో చెప్పగా" },
                { "verse": 6, "text": "లోతు వెలుపల ద్వారము నొద్దనున్న వారి దగ్గరకు వెళ్లి తన వెనుక తలుపువేసి" },
                { "verse": 7, "text": "అన్నలారా, ఇంత పాతకము కట్టుకొనకుడి;" },
                { "verse": 8, "text": "ఇదిగో పురుషుని కూడని యిద్దరు కుమార్తెలు నాకున్నారు. సెల వైతే వారిని మీ యొద్దకు వెలుపలికి తీసికొని వచ్చెదను, వారిని మీ మనస్సు వచ్చినట్లు చేయుడి." },
                { "verse": 9, "text": "ఈ మనుష్యులు నా యింటినీడకు వచ్చియున్నారు గనుక వారిని మీరేమి చేయకూడదని చెప్పినప్పుడు వారునీవు అవ తలికి పొమ్మనిరి. మరియు వారువీడెవడో మనలోనికి పరదేశిగావచ్చి తీర్పరిగానుండ చూచుచున్నాడు; కాగా వారికంటె నీకు ఎక్కువ కీడు చేసెదమని చెప్పి లోతు అను ఆ మనుష్యునిమీద దొమి్మగాపడి తలుపు పగులగొట్టు టకు సమీపించిరి." },
                { "verse": 10, "text": "అయితే ఆ మనుష్యులు తమ చేతులు చాపి లోతును ఇంటిలోపలికి తమ యొద్దకు తీసికొని తలుపు వేసిరి." },
                { "verse": 11, "text": "అప్పుడు వారు పిన్నలు మొదలుకొని పెద్దలవరకు ఆ ఇంటి ద్వారము దగ్గరనున్న వారికి కనుమబ్బు కలుగజేయగా వారు ద్వారము కనుగొనలేక విసికిరి." },
                { "verse": 12, "text": "అప్పుడామనుష్యులు లోతుతోఇక్కడ నీకు మరియెవ రున్నారు? నీ అల్లుని నీ కుమారులను నీ కుమార్తెలను ఈ ఊరిలో నీకు కలిగినవారినందరిని వెలుపలికి తీసికొనిరమ్ము;" },
                { "verse": 13, "text": "మేము ఈ చోటు నాశనము చేయవచ్చితివిు; వారినిగూర్చిన మొర యెహోవా సన్నిధిలో గొప్పదాయెను గనుక దాని నాశనము చేయుటకు యెహోవా మమ్మును పంపెనని చెప్పగా" },
                { "verse": 14, "text": "లోతు బయటికి వెళ్లి తన కుమార్తెలను పెండ్లాడ నైయున్న తన అల్లుళ్లతో మాటలాడిలెండి, ఈ చోటు విడిచిపెట్టి రండి; యెహోవా ఈ పట్టణమును నాశనము చేయబోవు చున్నాడని చెప్పెను. అయితే అతడు తన అల్లుళ్లదృష్టికి ఎగతాళి చేయువానివలె నుండెను." },
                { "verse": 15, "text": "తెల్లవారినప్పుడు ఆ దూతలు లోతును త్వరపెట్టిలెమ్ము; ఈ ఊరి దోషశిక్షలో నశించిపోకుండ నీ భార్యను ఇక్కడనున్న నీ యిద్దరు కుమార్తెలను తీసికొని రమ్మని చెప్పిరి." },
                { "verse": 16, "text": "అతడు తడవు చేసెను. అప్పుడు అతనిమీద యెహోవా కనికరపడుటవలన ఆ మనుష్యులు అతనిచేతిని అతని భార్యచేతిని అతని యిద్దరు కుమార్తెల చేతులను పట్టుకొని వెలుపలికి తీసికొని వచ్చి ఆ ఊం" },
                { "verse": 17, "text": "ఆ దూతలు వారిని వెలు పలికి తీసికొని వచ్చిన తరువాత ఆయననీ ప్రాణమును దక్కించుకొనునట్లు పారిపొమ్ము, నీ వెనుక చూడకుము, ఈ మైదానములో ఎక్కడను నిలువక నీవు నశించి పోకుండ ఆ పర్వతమునకు పారిపొమ్మని చెప్పగా" },
                { "verse": 18, "text": "లోతు ప్రభువా ఆలాగు కాదు." },
                { "verse": 19, "text": "ఇదిగో నీ కటాక్షము నీ దాసునిమీద వచ్చినది; నా ప్రాణము రక్షించుటవలన నీవు నాయెడల కనుపరచిన నీ కృపను ఘనపర చితివి; నేను ఆ పర్వతమునకు తప్పించుకొని పోలేను; ఈ కీడు నాకు సంభవించి చచ్చిపోవుదు నేమో" },
                { "verse": 20, "text": "ఇదిగో పారిపోవుటకు ఈ ఊరు సమీపములో ఉన్నది, అది చిన్నది, నన్నక్కడికి తప్పించుకొని పోనిమ్ము అది చిన్నది గదా, నేను బ్రదుకుదునని చెప్పినప్పుడు" },
                { "verse": 21, "text": "ఆయన ఇదిగో నీవు చెప్పిన ఈ ఊరు నాశనము చేయను. ఈ విషయములో నీ మనవి అంగీకరించితిని;" },
                { "verse": 22, "text": "నీవు త్వరపడి అక్కడికి తప్పించుకొని పొమ్ము; నీ వక్కడ చేరువరకు నేనేమియు చేయలేననెను. అందుచేత ఆ ఊరికి సోయరు అను పేరు పెట్టబడెను." },
                { "verse": 23, "text": "లోతు సోయరుకు వచ్చినప్పుడు ఆ దేశమున సూర్యుడు ఉదయించెను." },
                { "verse": 24, "text": "అప్పుడు యెహోవా సొదొమమీదను గొమొఱ్ఱామీదను యెహోవాయొద్ద నుండి గంధకమును అగ్నిని ఆకాశమునుండి కురిపించి" },
                { "verse": 25, "text": "ఆ పట్టణములను ఆ మైదానమంతటిని ఆ పట్టణములలో నివసించినవారినందరిని నేల మొలకలను నాశనము చేసెను." },
                { "verse": 26, "text": "అయితే లోతు భార్య అతని వెనుకనుండి తిరిగి చూచి ఉప్పుస్థంభమాయెను." },
                { "verse": 27, "text": "తెల్లవారినప్పుడు అబ్రాహాము లేచి తాను యెహోవా సన్నిధిని నిలిచిన చోటికి వచ్చి" },
                { "verse": 28, "text": "సొదొమ గొమొఱ్ఱాల తట్టును ఆ మైదానపు ప్రదేశము యావత్తును చూడగా అదిగో ఆ ప్రదేశపు పొగ ఆవము పొగవలె లేచుచుండెను." },
                { "verse": 29, "text": "దేవుడు ఆ మైదానపు పట్టణములను పాడుచేసినప్పుడు దేవుడు అబ్రాహామును జ్ఞాపకము చేసికొని, లోతు కాపురమున్న పట్టణములను నాశనము చేసినప్పుడు ఆ నాశనముమధ్యన లోతు నశించకుండ అతని తప్పించెను." },
                { "verse": 30, "text": "లోతు సోయరులో నివసించుటకు భయపడి, తన యిద్దరు కుమార్తెలతో కూడ సోయరునుండి పోయి ఆ పర్వతమందు నివసించెను. అతడును అతని యిద్దరు కుమార్తెలును ఒక గుహలో నివసించిరి." },
                { "verse": 31, "text": "అట్లుండగా అక్క తన చెల్లెలితోమన తండ్రి ముసలి వాడు; సర్వ లోకమర్యాద చొప్పున మనతో పోవుటకు లోకములో ఏ పురుషుడును లేడు." },
                { "verse": 32, "text": "మన తండ్రికి ద్రాక్షారసము త్రాగించి అతనితో శయనించి మన తండ్రివలన సంతానము కలుగచేసికొందము రమ్మని చెప్పెను." },
                { "verse": 33, "text": "ఆ రాత్రి వారు తమ తండ్రికి ద్రాక్షారసము త్రాగించిన తరువాత అతని పెద్దకుమార్తె లోపలికి వెళ్లి తన తండ్రితో శయనించెను. కాని ఆమె ఎప్పుడు శయనించెనో యెప్పుడు లేచిపోయెనో అతనికి తెలియలేదు." },
                { "verse": 34, "text": "మరునాడు అక్క తన చెల్లెలిని చూచినిన్నటి రాత్రి నా తండ్రితో నేను శయ నించితిని; ఈ రాత్రి అతనికి ద్రాక్షారసము త్రాగించిన తరువాత నీవు లోపలికి వెళ్లి అతనితో శయనించుము; ఆలా గున మన తండ్రివలన సంతానము కలుగజేసికొందమని చెప్పెను." },
                { "verse": 35, "text": "ఆ రాత్రియు వారు తమ తండ్రికి ద్రాక్షా రసము త్రాగించిరి. అప్పుడా చిన్నది లేచి అతనితో శయనించెను. ఆమె యెప్పుడు శయనించెనో యెప్పుడు లేచిపోయెనో అతనికి తెలియలేదు." },
                { "verse": 36, "text": "ఆలాగున లోతు యొక్క యిద్దరు కుమార్తెలు తమ తండ్రివలన గర్భవతులైరి." },
                { "verse": 37, "text": "వారిలో పెద్దది కుమారుని కని వానికి మోయాబను పేరు పెట్టెను. అతడు నేటివరకు మోయాబీయులకు మూలపురుషుడుగా ఎంచబడును." },
                { "verse": 38, "text": "చిన్నదికూడ కుమారుని కని వానికి బెన్నమి్మ అను పేరు పెట్టెను. అతడు నేటివరకు అమ్మోనీయులకు మూలపురుషుడుగా ఎంచబడును." }
            ]
        },
        {
            "chapter": 20,
            "verses": [
                { "verse": 1, "text": "అక్కడనుండి అబ్రాహాము దక్షిణ దేశమునకు తర్లిపోయి కాదేషుకును షూరుకును మధ్య ప్రదేశములో నివసించి గెరారులో కొన్నాళ్లు ఉండెను." },
                { "verse": 2, "text": "అప్పుడు అబ్రాహాము తన భార్యయైన శారానుగూర్చి ఈమె నా చెల్లెలని చెప్పెను గనుక గెరారు రాజైన అబీమెలెకు శారాను పిలిపించి తన యింట చేర్చుకొనెను." },
                { "verse": 3, "text": "అయినను రాత్రివేళ దేవుడు స్వప్నమందు అబీమెలెకు నొద్దకు వచ్చినీవు నీ యింట చేర్చుకొనిన స్త్రీ ఒక పురుషునికి భార్య గనుక ఆమె నిమిత్తము నీవు చచ్చినవాడవు సుమా అని చెప్పెను." },
                { "verse": 4, "text": "అయితే అబీమెలెకు ఆమెతో పోలేదు గనుక అతడుప్రభువా ఇట్టి నీతిగల జన మును హతము చేయుదువా?" },
                { "verse": 5, "text": "ఈమె నా చెల్లెలని అతడు నాతో చెప్పలేదా? మరియు ఆమె కూడ అతడు నా అన్న అనెను. నేను చేతులతో ఏ దోషము చేయక యధార్థ హృదయముతో ఈ పని చేసితిననెను." },
                { "verse": 6, "text": "అందుకు దేవుడు అవును, యధార్థహృదయముతో దీని చేసితివని నేనెరుగుదును; మరియు నీవు నాకు విరోధముగా పాపము చేయకుండ నేను నిన్ను అడ్డగించితిని; అందుకే నేను నిన్ను ఆ" },
                { "verse": 7, "text": "కాబట్టి ఆ మనుష్యుని భార్యను తిరిగి అతని కప్పగించుము; అతడు ప్రవక్త, అతడు నీ కొరకు ప్రార్థనచేయును, నీవు బ్రదుకు దువు. నీవు ఆమెను అతని కప్పగించని యెడల నీవును నీవారందరును నిశ్చయముగా చచ్చెదరని తెలిసికొనుమని స్వప్నమందు అతనితో చెప్పెను." },
                { "verse": 8, "text": "తెల్లవారినప్పుడు అబీమెలెకు లేచి తన సేవకులందరిని పిలిపించి ఈ సంగతు లన్నియు వారికి వినిపించినప్పుడు ఆ మనుష్యులు మిగుల భయ పడిరి." },
                { "verse": 9, "text": "అబీమెలెకు అబ్రాహామును పిలిపించినీవు మాకు చేసిన పని యేమిటి? నీవు నా మీదికిని నా రాజ్యము మీదికిని మహాపాతకము తెప్పించునట్లు నేను నీయెడల చేసిన పాపమేమిటి? చేయరాని క" },
                { "verse": 10, "text": "మరియు అబీమెలెకునీవేమి చూచి ఈ కార్యము చేసితివని అబ్రాహాము నడుగగా" },
                { "verse": 11, "text": "అబ్రాహాముఈ స్థలమందు దేవుని భయము ఏమాత్రమును లేదు గనుక నా భార్య నిమిత్తము నన్ను చంపుదు రనుకొని చేసితిని." },
                { "verse": 12, "text": "అంతేకాకఆమె నా చెల్లెలనుమాట నిజమే; ఆమె నా తండ్రి కుమార్తెగాని నా తల్లి కుమార్తె కాదు; ఆమె నాకు భార్యయైనది." },
                { "verse": 13, "text": "దేవుడు నన్ను నా తండ్రియిల్లు విడిచి దేశాంతరము పోవునట్లు చేసినప్పుడు నేను ఆమెను చూచిమనము పోవు ప్రతి స్థలమందుఇతడు నా సహోదరుడని నన్ను గూర్చి చెప్పుము; నీవు నాకు చేయవలసిన ఉపకారమిదేయని చెప్పితిననెను." },
                { "verse": 14, "text": "అబీమెలెకు గొఱ్ఱలను గొడ్లను దాసదాసీ జనులను రప్పించి, అబ్రాహాముకిచ్చి అతని భార్యయైన శారాను అతనికి తిరిగి అప్పగించెను." },
                { "verse": 15, "text": "అప్పుడు అబీమెలెకుఇదిగో నా దేశము నీ యెదుట నున్నది. నీకిష్టమైన స్థలమందు కాపురముండుమ నెను." },
                { "verse": 16, "text": "మరియు అతడు శారాతోఇదిగో నీ అన్నకు నేను వెయ్యి రూపాయలిచ్చియున్నాను. ఇది నీ యొద్ద నున్న వారందరి దృష్టికి ప్రాయశ్చిత్తముగా నుండుటకై యిది నీ పక్షముగా ఇచ్చియున్నాను. ఈ విషయ మంతటిలో నీకు న్యాయము తీరిపోయినదనెను." },
                { "verse": 17, "text": "అబ్రాహాము దేవుని ప్రార్థింపగాదేవుడు అబీమెలెకును అతని భార్యను అతని దాసీలను బాగుచేసెను; వారు పిల్లలుకనిరి." },
                { "verse": 18, "text": "ఏలయనగా అబ్రాహాము భార్యయైన శారానుబట్టి దేవుడు అబీమెలెకు ఇంటిలో ప్రతి గర్భమును మూసియుండెను." }
            ]
        }
    ],
    "నిర్గమకాండము": [
        {
            "chapter": 1,
            "verses": [
                { "verse": 1, "text": "యాకోబుతోకూడ ఐగుప్తునకు వచ్చిన ఇశ్రాయేలు కుమారుల పేళ్లు ఇవి." },
                { "verse": 2, "text": "ప్రతివాడును తన తన కుటుంబముతో వచ్చెను." }
            ]
        }
    ],
    "యోహాను": [
      {
        "chapter": 3,
        "verses": [
          { "verse": 16, "text": "దేవుడు లోకమును ఎంతో ప్రేమించెను. కాగా ఆయన తన అద్వితీయకుమారునిగా పుట్టిన వానియందు విశ్వాసముంచు ప్రతివాడును నశింపక నిత్యజీవము పొందునట్లు ఆయనను అనుగ్రహించెను." }
        ]
      }
    ],
    "కీర్తనలు": [
        {
            "chapter": 1,
            "verses": [
                {"verse": 1, "text": "దుష్టుల ఆలోచనచొప్పున నడువక పాపుల మార్గమున నిలువక అపహాసకులు కూర్చుండు చోటను కూర్చుండక"},
                {"verse": 2, "text": "యెహోవా ధర్మశాస్త్రమునందు ఆనందించుచు దివారాత్రము దానిని ధ్యానించువాడు ధన్యుడు."},
                {"verse": 3, "text": "అతడు నీటికాలువల యోరను నాటబడినదై ఆకు వాడక తన కాలమందు ఫలమిచ్చు చెట్టువలెనుండును అతడు చేయునదంతయు సఫలమగును."}
            ]
        }
    ]
};

export const BIBLE_DATA: BibleVersion = {
    'English': BIBLE_DATA_EN,
    'Telugu': BIBLE_DATA_TE,
};