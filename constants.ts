import type { SongCategory, Event, BibleBook, BibleBookGroup, BibleChapter, BibleVersion } from './types';

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
        lyrics: `Amazing grace! How sweet the sound\nThat saved a wretch like me!\nI once was lost, but now am found;\nWas blind, but now I see.\n\n'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!\n\nThrough many dangers, toils, and snares,\nI have already come;\n'Tis grace hath brought me safe thus far,\nAnd grace will lead me home.\n\nThe Lord has promised good to me,\nHis Word my hope secures;\nHe will my Shield and Portion be,\nAs long as life endures.`
      },
      {
        title: "Blessed Assurance",
        artist: "Fanny J. Crosby",
        youtubeUrl: "https://www.youtube.com/watch?v=r26-4_y_z-g",
        spotifyUrl: "https://open.spotify.com/track/0Y29pSAhQ651j1CEXp2e76",
        lyricist: "Fanny J. Crosby",
        album: "N/A (Hymn)",
        year: "1873",
        background: "Lyricist Fanny Crosby, who was blind from infancy, was visiting her friend Phoebe Knapp, who played a new melody for her. When Knapp asked Crosby what the tune said to her, she immediately replied, 'Blessed assurance, Jesus is mine!' The rest of the hymn's lyrics were composed shortly after, becoming a joyful declaration of a believer's security in Christ.",
        theme: "Assurance of salvation, joy in Christ, glimpse of heaven.",
        summary: "A joyful declaration of faith and the believer's firm assurance in Jesus as their Savior, with a foretaste of heavenly glory.",
        imageUrl: "https://images.unsplash.com/photo-1542901184-1c1929a00b8a?q=80&w=2670&auto=format&fit=crop",
        lyrics: `Blessed assurance, Jesus is mine!\nOh, what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of His Spirit, washed in His blood.\n\n(Chorus)\nThis is my story, this is my song,\nPraising my Savior all the day long;\nThis is my story, this is my song,\nPraising my Savior all the day long.\n\nPerfect submission, perfect delight,\nVisions of rapture now burst on my sight;\nAngels, descending, bring from above\nEchoes of mercy, whispers of love.\n\n(Chorus)\n\nPerfect submission, all is at rest,\nI in my Savior am happy and blest;\nWatching and waiting, looking above,\nFilled with His goodness, lost in His love.\n\n(Chorus)`
      }
    ],
    "Telugu": [
      {
        title: "ఇదిగో దేవా నా జీవితం",
        artist: "బ్ర. యెసన్న",
        youtubeUrl: "https://www.youtube.com/watch?v=d_pZqJkFjRc",
        spotifyUrl: "https://open.spotify.com/track/5m1V9oTz8jJ4Z1J1J1J1J1",
        lyricist: "బ్ర. యెసన్న",
        album: "యెసన్న కృపా క్షేమము",
        year: "1990s",
        background: "ప్రభావవంతమైన తెలుగు క్రైస్తవ గాయకుడు బ్రదర్ యెసన్న రచించిన ఈ ప్రియమైన క్లాసిక్ పాట, సమర్పణ యొక్క సరళమైన ఇంకా లోతైన ప్రార్థన. ఇది వ్యక్తిగత పునఃఅంకిత సమయాల్లో తరచుగా ఉపయోగించబడుతుంది, మరియు ఒకరి పూర్తి జీవితాన్ని దేవునిచే ఉపయోగించబడటానికి సజీవ త్యాగంగా అర్పించాలనే హృదయపూర్వక కోరికను వ్యక్తపరుస్తుంది.",
        theme: "సమర్పణ, అంకితభావం, మరియు ప్రతిష్ఠ",
        summary: "ఒకరి జీవితాన్ని పూర్తిగా ప్రభువుకు సమర్పించి, దానిని సజీవ యాగముగా అర్పించే ఒక గీతం.",
        imageUrl: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd6c?q=80&w=2574&auto=format&fit=crop",
        lyrics: `ఇదిగో దేవా నా జీవితం\nఅంకితమిస్తున్నా నీకే ప్రభో (2)\nమలిచి నీ చిత్తము నెరవేర్చుమా\nమహిమకై వాడుకొనుమా (2)\n\n(Stanza 1)\nఎన్నో జంతు బలులర్పించినా\nపాప పరిహారం కలగలేదని\nనీ శరీరమనే బలియాగమై\nసిలువలో నాకై అర్పించితివా\n\n(Stanza 2)\nలోక ఆశలతో నిండియున్న\nనా ఈ హృదయం నీకిచ్చితిన్\nనీ వాక్యమనే ఖడ్గముతో\nపరిశుద్ధ పరచి వాడుకొనుమా`
      },
      {
        title: "ఈ జీవితం విలువైనది",
        artist: "వివిధ కళాకారులు",
        youtubeUrl: "https://www.youtube.com/watch?v=8KZKBqu4eqA",
        spotifyUrl: "https://open.spotify.com/track/6l0V7oTz7jJ3Z0J0J0J0J0",
        lyricist: "సాంప్రదాయం",
        album: "వర్తించదు (సాంప్రదాయ గీతం)",
        year: "Unknown",
        background: "ఈ సాంప్రదాయ తెలుగు క్రైస్తవ జానపద గీతం జీవితం యొక్క విలువను మరియు దాని అశాశ్వత స్వభావాన్ని శక్తివంతంగా గుర్తు చేస్తుంది. దీని సాహిత్యం శ్రోతలను, ముఖ్యంగా యువతను, వారి జీవితాల విలువను గుర్తించి, సమయం ముగియకముందే క్రీస్తుకు అంకితం చేయాలని, మరియు నిత్యత్వం కోసం సిద్ధపడటం యొక్క ప్రాముఖ్యతను నొక్కి చెబుతుంది.",
        theme: "రక్షణ ఆవశ్యకత, నిత్యత్వ దృక్పథం, జీవిత విలువ",
        summary: "విశ్వాసులకు జీవితం యొక్క విలువను మరియు సంక్షిప్తతను గుర్తుచేస్తూ, దేవునితో నిత్యత్వం కోసం సిద్ధం కావాలని కోరే ఒక గీతం.",
        imageUrl: "https://images.unsplash.com/photo-1512413316925-fd4b9338206d?q=80&w=2670&auto=format&fit=crop",
        lyrics: `ఈ జీవితం విలువైనది - సోదరా\nనీవు మరచిపోవద్దు (2)\nదేవుని కొరకే జీవించు - పరలోకం చేరుకో\n\nయవ్వన కాలమందున\nదేవుని సేవ చేయాలి\nలోక ఆశలు విడిచిపెట్టి\nదేవునితో నడవాలి\n\nడబ్బు, ఆస్తి, అంతస్తులు\nనీ వెంట రావు సోదరా\nనీవు చేసిన మంచి పనులు\nమాత్రమే నీతో వచ్చును`
      }
    ]
  }
};

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "2024-08-04T10:00:00",
    description: "Join us for our weekly worship service. All are welcome!",
    city: "Hyderabad"
  },
  {
    id: 2,
    title: "Mid-week Bible Study",
    date: "2024-08-07T19:00:00",
    description: "A deep dive into the book of Romans. Refreshments provided.",
    city: "Chennai"
  },
  {
    id: 3,
    title: "Youth Group Night",
    date: "2024-08-09T18:30:00",
    description: "Fun, games, and a message for teens.",
    city: "Hyderabad"
  },
  {
    id: 4,
    title: "Community Outreach",
    date: "2024-08-17T09:00:00",
    description: "Serving our local community by partnering with the city food bank.",
    city: "Delhi"
  }
];

export const BIBLE_BOOK_GROUPS: BibleBookGroup[] = [
    { group: "The Law (Pentateuch)", books: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"] },
    { group: "History", books: ["Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther"] },
    { group: "Poetry & Wisdom", books: ["Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon"] },
    { group: "Major Prophets", books: ["Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel"] },
    { group: "Minor Prophets", books: ["Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"] },
    { group: "Gospels", books: ["Matthew", "Mark", "Luke", "John"] },
    { group: "Acts (History)", books: ["Acts"] },
    { group: "Pauline Epistles", books: ["Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon"] },
    { group: "General Epistles", books: ["Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude"] },
    { group: "Prophecy (Apocalyptic)", books: ["Revelation"] }
];

const createChapter = (verses: string[]): BibleChapter[] => [{ chapter: 1, verses: verses.map((text, i) => ({ verse: i + 1, text })) }];

const BIBLE_DATA_EN: BibleBook = {
    "Genesis": createChapter([
        "In the beginning God created the heaven and the earth.",
        "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
        "And God said, Let there be light: and there was light.",
        "And God saw the light, that it was good: and God divided the light from the darkness.",
        "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.",
        "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.",
        "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.",
        "And God called the firmament Heaven. And the evening and the morning were the second day.",
        "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.",
        "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.",
        "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
        "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.",
        "And the evening and the morning were the third day.",
        "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:",
        "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.",
        "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.",
        "And God set them in the firmament of the heaven to give light upon the earth,",
        "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.",
        "And the evening and the morning were the fourth day.",
        "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.",
        "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.",
        "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.",
        "And the evening and the morning were the fifth day.",
        "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.",
        "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.",
        "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.",
        "So God created man in his own image, in the image of God created he him; male and female created he them.",
        "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.",
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.",
        "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.",
        "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day."
    ]),
    "Exodus": createChapter([
        "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob.",
        "Reuben, Simeon, Levi, and Judah,",
        "Issachar, Zebulun, and Benjamin,",
        "Dan, and Naphtali, Gad, and Asher.",
        "And all the souls that came out of the loins of Jacob were seventy souls: for Joseph was in Egypt already.",
        "And Joseph died, and all his brethren, and all that generation.",
        "And the children of Israel were fruitful, and increased abundantly, and multiplied, and waxed exceeding mighty; and the land was filled with them.",
        "Now there arose up a new king over Egypt, which knew not Joseph.",
        "And he said unto his people, Behold, the people of the children of Israel are more and mightier than we:",
        "Come on, let us deal wisely with them; lest they multiply, and it come to pass, that, when there falleth out any war, they join also unto our enemies, and fight against us, and so get them up out of the land.",
        "Therefore they did set over them taskmasters to afflict them with their burdens. And they built for Pharaoh treasure cities, Pithom and Raamses.",
        "But the more they afflicted them, the more they multiplied and grew. And they were grieved because of the children of Israel.",
        "And the Egyptians made the children of Israel to serve with rigour:",
        "And they made their lives bitter with hard bondage, in morter, and in brick, and in all manner of service in the field: all their service, wherein they made them serve, was with rigour.",
        "And the king of Egypt spake to the Hebrew midwives, of which the name of the one was Shiphrah, and the name of the other Puah:",
        "And he said, When ye do the office of a midwife to the Hebrew women, and see them upon the stools; if it be a son, then ye shall kill him: but if it be a daughter, then she shall live.",
        "But the midwives feared God, and did not as the king of Egypt commanded them, but saved the men children alive.",
        "And the king of Egypt called for the midwives, and said unto them, Why have ye done this thing, and have saved the men children alive?",
        "And the midwives said unto Pharaoh, Because the Hebrew women are not as the Egyptian women; for they are lively, and are delivered ere the midwives come in unto them.",
        "Therefore God dealt well with the midwives: and the people multiplied, and waxed very mighty.",
        "And it came to pass, because the midwives feared God, that he made them houses.",
        "And Pharaoh charged all his people, saying, Every son that is born ye shall cast into the river, and every daughter ye shall save alive."
    ]),
    "Psalms": createChapter([
        "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.",
        "But his delight is in the law of the LORD; and in his law doth he meditate day and night.",
        "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
        "The ungodly are not so: but are like the chaff which the wind driveth away.",
        "Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.",
        "For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish."
    ]),
    "John": [{
        chapter: 3,
        verses: [
            { verse: 16, text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." }
        ]
    }],
    "Nehemiah": createChapter([
        "The words of Nehemiah the son of Hachaliah. And it came to pass in the month Chisleu, in the twentieth year, as I was in Shushan the palace,",
        "That Hanani, one of my brethren, came, he and certain men of Judah; and I asked them concerning the Jews that had escaped, which were left of the captivity, and concerning Jerusalem.",
        "And they said unto me, The remnant that are left of the captivity there in the province are in great affliction and reproach: the wall of Jerusalem also is broken down, and the gates thereof are burned with fire.",
        "And it came to pass, when I heard these words, that I sat down and wept, and mourned certain days, and fasted, and prayed before the God of heaven,",
        "And said, I beseech thee, O LORD God of heaven, the great and terrible God, that keepeth covenant and mercy for them that love him and observe his commandments:",
        "Let thine ear now be attentive, and thine eyes open, that thou mayest hear the prayer of thy servant, which I pray before thee now, day and night, for the children of Israel thy servants, and confess the sins of the children of Israel, which we have sinned against thee: both I and my father's house have sinned.",
        "We have dealt very corruptly against thee, and have not kept the commandments, nor the statutes, nor the judgments, which thou commandedst thy servant Moses.",
        "Remember, I beseech thee, the word that thou commandedst thy servant Moses, saying, If ye transgress, I will scatter you abroad among the nations:",
        "But if ye turn unto me, and keep my commandments, and do them; though there were of you cast out unto the uttermost part of the heaven, yet will I gather them from thence, and will bring them unto the place that I have chosen to set my name there.",
        "Now these are thy servants and thy people, whom thou hast redeemed by thy great power, and by thy strong hand.",
        "O LORD, I beseech thee, let now thine ear be attentive to the prayer of thy servant, and to the prayer of thy servants, who desire to fear thy name: and prosper, I pray thee, thy servant this day, and grant him mercy in the sight of this man. For I was the king's cupbearer."
    ])
};

const BIBLE_DATA_TE: BibleBook = {
    "Genesis": createChapter([
        "ఆదియందు దేవుడు ఆకాశమును భూమిని సృజించెను.",
        "భూమి నిరాకారముగాను శూన్యముగాను ఉండెను; మరియు చీకటి అగాధ జలములపైన కమ్మియుండెను; దేవుని ఆత్మ జలములపైన అల్లాడుచుండెను.",
        "దేవుడు వెలుగు కమ్మని పలుకగా వెలుగు కలిగెను.",
        "వెలుగు మంచిదై యుండుట దేవుడు చూచెను; దేవుడు వెలుగును చీకటిని వేరుపరచెను.",
        "దేవుడు వెలుగునకు పగలనియు, చీకటికి రాత్రి అనియు పేరు పెట్టెను. అస్తమయమును ఉదయమును కలుగగా అది మొదటి దినమాయెను."
    ]),
    "Exodus": createChapter([
        "ఐగుప్తులోనికి వచ్చిన ఇశ్రాయేలు కుమారుల పేర్లు ఇవే; ప్రతివాడు తన తన కుటుంబముతో యాకోబుతోకూడ వచ్చెను.",
        "రూబేను, షిమ్యోను, లేవి, యూదా,",
        "ఇశ్శాఖారు, జెబూలూను, బెన్యామీను,",
        "దాను, నఫ్తాలి, గాదు, ఆషేరు.",
        "యాకోబు గర్భమున పుట్టినవారందరు డెబ్బది మంది. యోసేపు ఐగుప్తులో ఉండెను."
    ]),
    "Psalms": createChapter([
        "దుష్టుల ఆలోచనచొప్పున నడువక పాపుల మార్గమున నిలువక అపహాసకులు కూర్చుండు చోటను కూర్చుండక",
        "యెహోవా ధర్మశాస్త్రమునందు ఆనందించుచు దివారాత్రము దానిని ధ్యానించువాడు ధన్యుడు.",
        "అతడు నీటికాలువల యోరను నాటబడినదై ఆకు వాడక తన కాలమందు ఫలమిచ్చు చెట్టువలెనుండును అతడు చేయునదంతయు సఫలమగును.",
        "దుష్టులు ఆలాగున నుండక గాలి చెదరగొట్టు పొట్టువలె నుందురు.",
        "కాబట్టి న్యాయవిమర్శలో దుష్టులును నీతిమంతుల సభలో పాపులును నిలువరు.",
        "నీతిమంతుల మార్గము యెహోవాకు తెలియును దుష్టుల మార్గము నాశనమునకు నడుపును."
    ]),
    "John": [{
        chapter: 3,
        verses: [
            { verse: 16, text: "దేవుడు లోకమును ఎంతో ప్రేమించెను. కాగా ఆయన తన అద్వితీయకుమారునిగా పుట్టిన వానియందు విశ్వాసముంచు ప్రతివాడును నశింపక నిత్యజీవము పొందునట్లు ఆయనను అనుగ్రహించెను." }
        ]
    }]
};

export const BIBLE_DATA: BibleVersion = {
    "English": BIBLE_DATA_EN,
    "Telugu": BIBLE_DATA_TE,
};