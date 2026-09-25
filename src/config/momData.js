/**
 * Centralized Configuration for Amma's Birthday Website
 * 
 * 💖 ROSE GOLD THEME EDITION 💖
 * 
 * From: Kuttan & Ammini
 * To: Dearest Amma
 */

export const MOM_DATA = {
  // General Info
  recipientName: "Amma",
  senderName: "Kuttan & Ammini",
  sendersDetailed: "Kuttan (Vishnu) & Ammini (Arya)",

  // Theme Settings
  theme: {
    primary: "#B76E79",        // Rose Gold
    primaryLight: "#F6D5D8",   // Soft Blush
    accent: "#E6C280",         // Warm Champagne Gold
    bg: "#FFF8F7",             // Warm Ivory Blush
    textPrimary: "#38101C",    // High-Contrast Deep Rosewood (Heading)
    textSecondary: "#4A1525",  // High-Contrast Dark Berry (Body Text)
    textMuted: "#733742",      // Medium Muted Rose
  },

  // Audio configuration
  audio: {
    title: "Amma's Birthday Song",
    artist: "Special Dedication for Amma",
    url: "/bg-music.mp3", 
  },

  // 1. The Interactive Cat & Envelope Intro Flow
  introStory: {
    frontPage: {
      headline: "Special Delivery for Amma! 💌",
      subheadline: "A sweet little messenger has something very special for you from your Kuttan & Ammini...",
      catHint: "Tap the envelope to open it! ✨",
      question: "Amma, do you want to see your birthday surprise?",
      yesButtonText: "Yes, absolutely! 💖",
      noButtonText: "No 🥺",
    },
    sadCatStage: {
      pleaTitle: "Please say yes, Amma... 🥺",
      pleaSubtitle: "Look at this face... you wouldn't break a kitten's heart on your birthday, right?",
      yesButtonText: "Okay, YES! 🥰",
      noButtonText: "Still No 🙈",
    },
    cryingCatStage: {
      pleaTitle: "Please please please say yes, Amma! 😭💔",
      pleaSubtitle: "The cat is literally drowning in tears! Just tap Yes, both your children prepared this with all their love!",
      yesButtonText: "YES! Love You Both! 💖🎉",
      noButtonText: "No 😭",
    }
  },

  // 2. The Royal Heartfelt Letter (Page 1)
  letter: {
    title: "A Letter From Our Hearts",
    subtitle: "From your Kuttan & Ammini — thoughts too deep for any ordinary greeting card.",
    salutation: "Dearest Amma,",
    
    sections: [
      {
        paragraphs: [
          "On this special day, we wanted to tell you something we probably don't say enough - how much you mean to both of us.",
          "When we think about our childhood, we realise how much of it was simply you.",
          "Kuttan was always the kuruthakkedu ulla one, finding some new mischief every day. And then there was Ammini, our little karachil queen, crying over the smallest things whenever she didn't get what she wanted. 😂",
          "And somehow, through all of it, Amma took care of both of us.",
          "You were our food, our comfort, our teacher, our scolding, our biggest cheerleader and the person who made every place feel like home."
        ]
      },
      {
        paragraphs: [
          "You didn't just raise us. You were always doing something for others too - teaching children, helping students, dancing, teaching dance, being part of programmes and simply giving your time and love wherever you could.",
          "And Amma, we wish you could see yourself the way we see you.",
          "We know sometimes you feel that you haven't done enough, or that you could have done more.",
          "But when we look at you, we don't see what you couldn't do.",
          "We see everything you did.",
          "We see a woman who gave so much of herself to her family, while still finding ways to learn, teach, create and help others."
        ]
      },
      {
        paragraphs: [
          "Then slowly, life changed.",
          "Kuttan left home for college. Ammini followed a few years later.",
          "For a while, home was still the same. We came back often, sat around, ate your food, told you everything.",
          "Then college became work. Work became responsibilities. New people, new interests, new experiences.",
          "And maybe sometimes it felt to you like your children were becoming distant."
        ],
        specialCallout: {
          malayalam: [
            "Amma, athalla.",
            "Njangal maariyittilla.",
            "Njangal valarnnu."
          ],
          english: "Our world simply became bigger."
        },
        afterCallout: [
          "We are discovering things, meeting people, finding ourselves and building lives of our own. That isn't us moving away from you. It's simply us taking the steps you taught us to take.",
          "Maybe we don't come home as often.",
          "Maybe we don't call enough.",
          "Maybe sometimes we get so caught up in our own lives that we forget to tell you what's happening.",
          "But please never mistake that for less love."
        ]
      },
      {
        paragraphs: [
          "Because no matter how big our world becomes, you will always be the safest part of it.",
          "Every \"kazhicho?\", every \"sookshichu poyi vaa\", every meal waiting for us, every little worry, every scolding, every prayer - we carry all of it with us.",
          "And Amma, if there is one thing we want you to believe, it is this:",
          "Please don't measure your life by what you think you could have achieved.",
          "Look at us.",
          "Whatever is good in Kuttan and Ammini has a little bit of Amma in it."
        ],
        virtues: [
          "Your kindness.",
          "Your patience.",
          "Your courage.",
          "Your love."
        ],
        finalParagraphs: [
          "You gave us more than a childhood.",
          "You gave us a home we could always return to.",
          "So wherever life takes us, however much we grow, and however far we go, one thing will never change:",
          "We will always be your Kuttan and Ammini.",
          "And you will always be our Amma."
        ]
      }
    ],
    
    closingQuote: "We love you, always. ❤️",
    signature: "Kuttan & Ammini"
  },

  // 3. Section 1: Moments (19 Photos - Chronological Timeline)
  memories: [
    {
      id: 1,
      image: "./images/photo_01.jpg",
      caption: "Little Amma! A precious glimpse into the sweet childhood of our queen \ud83c\udf38\ud83d\udcfa",
      note: "Precious childhood memories",
      dateOrTag: "Little Amma",
      category: "solo_vintage",
      likes: 190
    },
    {
      id: 2,
      image: "./images/photo_03.jpg",
      caption: "Where our family story began \u2014 Amma & Achan's sacred wedding day! \ud83d\udc8d\ud83c\udf8a",
      note: "Dhanya weds Maneesh",
      dateOrTag: "Wedding Vows",
      category: "couple",
      likes: 210
    },
    {
      id: 3,
      image: "./images/photo_05.jpg",
      caption: "Amma & Achan \u2014 The cutest love story in the whole universe! \ud83d\udc52\ud83d\udd76\ufe0f\u2764\ufe0f",
      note: "Sweetest couple ever",
      dateOrTag: "Sweet Romance",
      category: "couple",
      likes: 165
    },
    {
      id: 4,
      image: "./images/photo_07.jpg",
      caption: "When our family was newly complete \u2014 Amma holding baby Ammini with superhero Kuttan & Achan! \ud83e\uddb8\u200d\u2642\ufe0f\ud83d\udc76",
      note: "Superman Kuttan & baby Ammini",
      dateOrTag: "New Beginnings",
      category: "family",
      likes: 195
    },
    {
      id: 5,
      image: "./images/photo_09.jpg",
      caption: "Holding her whole world \u2014 Little Kuttan & baby Ammini with Amma! \ud83c\udf38\u2728",
      note: "Her two precious gems",
      dateOrTag: "Double Trouble",
      category: "family",
      likes: 185
    },
    {
      id: 6,
      image: "./images/photo_11.jpg",
      caption: "Colors of joy with Amma! Holi fun with little Kuttan and Achan \ud83c\udfa8\ud83d\udc96",
      note: "Smiles painted with love",
      dateOrTag: "Colors & Smiles",
      category: "kuttan",
      likes: 158
    },
    {
      id: 7,
      image: "./images/photo_13.jpg",
      caption: "Adventures & ancient wonders \u2014 exploring the world together as a family! \ud83c\udfdb\ufe0f\u2600\ufe0f",
      note: "Little Kuttan & baby Ammini",
      dateOrTag: "Family Adventures",
      category: "family",
      likes: 172
    },
    {
      id: 8,
      image: "./images/photo_15.jpg",
      caption: "Generations of love, warmth, and timeless Kerala traditions \ud83c\udf3c\ud83c\udfe1",
      note: "Family roots & blessings",
      dateOrTag: "Roots & Heritage",
      category: "family",
      likes: 160
    },
    {
      id: 9,
      image: "./images/photo_17.jpg",
      caption: "Amma's shelter of love \u2014 rainy day adventures with her little Kuttan & Ammini! \u2614\ud83d\udc66\ud83d\udc67",
      note: "Under Amma's umbrella",
      dateOrTag: "Rainy Day Joy",
      category: "family",
      likes: 182
    },
    {
      id: 10,
      image: "./images/photo_19.jpg",
      caption: "Monsoon stream splashes! Rain, pink umbrellas & muddy adventures with Amma \u2614\ud83c\udfde\ufe0f",
      note: "Unforgettable rain days",
      dateOrTag: "Monsoon Magic",
      category: "family",
      likes: 178
    },
    {
      id: 11,
      image: "./images/photo_21.jpg",
      caption: "Midnight street hugs & heart-to-heart giggles with Ammini \ud83e\udd17\ud83c\udf19",
      note: "Never too old for a hug",
      dateOrTag: "Warmest Hugs",
      category: "ammini",
      likes: 192
    },
    {
      id: 12,
      image: "./images/photo_23.jpg",
      caption: "Mountain breezes & pure excitement \u2014 Amma loving the blue toy train ride through the hills! \ud83d\ude82\ud83c\udf32\u2728",
      note: "Toy train adventures",
      dateOrTag: "Hill Station Joy",
      category: "solo_vintage",
      likes: 194
    },
    {
      id: 13,
      image: "./images/photo_25.jpg",
      caption: "Warmest smile on chilly days! Amma looking stunning in her winter shawl \u2744\ufe0f\ud83d\udc99",
      note: "Cozy winter glow",
      dateOrTag: "Winter Charm",
      category: "solo_vintage",
      likes: 188
    },
    {
      id: 14,
      image: "./images/photo_27.jpg",
      caption: "The biggest smiles with our favorite people! Kuttan, Ammini, Achan, Mama, Mami & the little cousins \ud83d\udcf8\u2728",
      note: "Family dinner & laughter",
      dateOrTag: "Family Feast",
      category: "family",
      likes: 215
    },
    {
      id: 15,
      image: "./images/photo_29.jpg",
      caption: "Amma glowing in Kasavu, surrounded by the sweet smiles of her beloved little nieces! \ud83e\ude94\ud83d\udc9a",
      note: "Temple blessings & giggles",
      dateOrTag: "Temple Smiles",
      category: "family",
      likes: 184
    },
    {
      id: 16,
      image: "./images/photo_31.jpg",
      caption: "Kuttan's graduation day! Amma's prayers turned into our proudest milestone \ud83c\udf93\ud83d\udc9c",
      note: "Moments of pride",
      dateOrTag: "Proud Amma",
      category: "kuttan",
      likes: 220
    },
    {
      id: 17,
      image: "./images/photo_33.jpg",
      caption: "Chasing waterfalls & making lifelong memories with our favorite travel buddy \u2014 Amma! \ud83c\udf0a\ud83c\udf43",
      note: "Nature trips with family",
      dateOrTag: "Waterfall Escape",
      category: "family",
      likes: 196
    },
    {
      id: 18,
      image: "./images/photo_35.jpg",
      caption: "Sweet treats & sweetest talks \u2014 Kuttan & Amma's favorite ice cream date! \ud83c\udf68\ud83c\udf6b",
      note: "Sweet tooth bonding",
      dateOrTag: "Sweet Treats",
      category: "kuttan",
      likes: 204
    },
    {
      id: 19,
      image: "./images/photo_37.jpg",
      caption: "Temple blessings, golden smiles, and the warmth of family all around \ud83e\ude94\u2728",
      note: "Divine blessings",
      dateOrTag: "Temple Blessings",
      category: "family",
      likes: 189
    }
  ],

  // 4. Interactive Birthday Cake Section (Page 3)
  cake: {
    title: "Make a Birthday Wish, Amma!",
    instruction: "Close your eyes, make the deepest wish in your heart, and tap the candles to blow them out!",
    buttonText: "Blow the Candles 🎂✨",
    wishRevealed: "🎉 Happy Birthday, Dearest Amma! May your year ahead be overflowing with glowing health, serene peace, joyful smiles, and every ounce of happiness you gave so selflessly to both of us. Remember, wherever life takes us, you will always be our home!",
    hugButtonText: "Send Amma a Warm Hug 🤗",
    hugToast: "Big warm hug sent straight to Amma's heart from Kuttan & Ammini! 🤗❤️"
  },

  // 5. Section 2: Love (19 Photos - Chronological Timeline)
  reasons: [
    {
      id: 1,
      title: "Timeless Radiance & Pure Grace",
      description: "Her sparkling smile, graceful Kasavu saree, and jasmine flowers in her hair \u2014 a portrait of timeless elegance that has inspired us our whole lives.",
      tag: "Timeless Grace",
      image: "./images/photo_02.jpg",
      caption: "Timeless beauty, sparkling eyes, and the gentlest heart \u2014 Our dearest Amma \ud83c\udf38\ud83e\udd0d"
    },
    {
      id: 2,
      title: "Sacred Beginnings & Blessings",
      description: "Surrounded by family, prayers, and sacred vows, Amma and Achan laid the foundation of love and devotion that continues to bless our home every single day.",
      tag: "Sacred Beginnings",
      image: "./images/photo_04.jpg",
      caption: "Surrounded by blessings, loved ones, and timeless promises of togetherness \ud83e\ude94\ud83d\udc90"
    },
    {
      id: 3,
      title: "Royal Companionship",
      description: "Dressed as royalty in colorful turbans and royal robes in Rajasthan \u2014 Amma and Achan's playful, loving partnership is the heart and joy of our family.",
      tag: "Royal Couple",
      image: "./images/photo_06.jpg",
      caption: "Royal vibes! When Amma & Achan ruled Rajasthan in royal style \ud83d\udc51\ud83c\udff0"
    },
    {
      id: 4,
      title: "Her Arms, Our World",
      description: "Riding high on Achan's shoulders and securely cuddled in Amma's loving arms \u2014 she made every early step of our childhood feel safe, joyous, and magical.",
      tag: "Childhood Warmth",
      image: "./images/photo_08.jpg",
      caption: "Riding high on shoulders & cuddled in Amma's arms \u2014 the happiest childhood days! \ud83c\udf88\ud83c\udfe1"
    },
    {
      id: 5,
      title: "Colors of Unconditional Love",
      description: "Bright pink and blue Holi gulal smeared with giggles across little cheeks \u2014 Amma's radiant smile and loving warmth turned every festival into pure celebration.",
      tag: "Festive Smiles",
      image: "./images/photo_10.jpg",
      caption: "Joyful colors of Holi with dearest Amma, baby Ammini and young Kuttan! \ud83c\udfa8\ud83d\udc96"
    },
    {
      id: 6,
      title: "Our Protective Pillars",
      description: "Amma in her bright orange saree and Achan in his festive red kurta, with mischievous little Kuttan and toddler Ammini \u2014 our family's unbreakable bond.",
      tag: "Family Anchor",
      image: "./images/photo_12.jpg",
      caption: "Achan, Amma, little Kuttan and toddler Ammini \u2014 our beautiful beginnings! \ud83c\udf3c\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"
    },
    {
      id: 7,
      title: "Safe in Mother's Care",
      description: "Exploring majestic stone temples together \u2014 Achan holding baby Ammini in her little blue cap while Kuttan hugs his shoulder, with Amma smiling proudly beside them.",
      tag: "Safe Sanctuary",
      image: "./images/photo_14.jpg",
      caption: "Sunlit temple steps, little blue caps, and warm family hugs with Amma! \ud83c\udfdb\ufe0f\ud83d\udc99"
    },
    {
      id: 8,
      title: "Her Joy in Our Happiness",
      description: "No matter how small or big our childhood wishes were, Amma made every temple festival and market trip unforgettable with toy shopping, sweet treats, and patient love.",
      tag: "Childhood Treats",
      image: "./images/photo_16.jpg",
      caption: "Temple visits, toy shopping & endless treats with our sweetest Amma! \ud83d\udecd\ufe0f\ud83c\udfee"
    },
    {
      id: 9,
      title: "Dancer in the Rain",
      description: "Dancing freely in the lush monsoon forest with open arms and pure joy \u2014 Amma's playful, lighthearted spirit fills every corner of our home with happiness.",
      tag: "Monsoon Bliss",
      image: "./images/photo_18.jpg",
      caption: "Dancing in the monsoon woods with a smile brighter than sunshine \ud83c\udf27\ufe0f\ud83c\udf3f\u2728"
    },
    {
      id: 10,
      title: "Leading With Grace on Stage",
      description: "Teaching children, guiding students, mastering classical arts, and speaking with poise \u2014 she gave so much of herself to the world while always being our devoted mother.",
      tag: "Grace on Stage",
      image: "./images/photo_20.jpg",
      caption: "Leading with words, grace, and an inspiring presence \u2014 Our superwoman on stage! \ud83c\udfa4\ud83d\udc99"
    },
    {
      id: 11,
      title: "On Top of the Clouds",
      description: "Surrounded by misty green mountain peaks and cool hill station breezes \u2014 exploring new heights together with our favorite family of four.",
      tag: "Misty Heights",
      image: "./images/photo_22.jpg",
      caption: "On top of the clouds! Misty hill station memories with our favorite four \u2601\ufe0f\ud83c\udfd4\ufe0f"
    },
    {
      id: 12,
      title: "Twinning in Kasavu Elegance",
      description: "Amma and Mami beautifully coordinated in traditional Kerala Set Sarees by the serene temple water \u2014 celebrating friendship, sisterhood, and family joy.",
      tag: "Kasavu Twinning",
      image: "./images/photo_24.jpg",
      caption: "Sisterhood, warm smiles, and twinning Kasavu elegance by the water \ud83e\ude94\ud83c\udf3f"
    },
    {
      id: 13,
      title: "Still Looking at Each Other Like This",
      description: "Standing before India Gate in Delhi, exchanging that same fond, tender smile that started their journey decades ago \u2014 Amma & Achan's everlasting love story.",
      tag: "Everlasting Love",
      image: "./images/photo_26.jpg",
      caption: "Amma & Achan at India Gate \u2014 A love story that grows sweeter every passing year \ud83c\udfdb\ufe0f\ud83d\udc91\u2764\ufe0f"
    },
    {
      id: 14,
      title: "Generations Gathered at Home",
      description: "Surrounded by Muthachan, Muthassi, Achan, Kuttan, Ammini, Mama, Mami, and the sweet little cousins \u2014 Amma at the center of the family tree she nurtures with endless love.",
      tag: "Family Circle",
      image: "./images/photo_28.jpg",
      caption: "Our entire family circle gathered in the courtyard \u2014 roots, branches & endless love \ud83c\udfe1\ud83c\udf33\ud83d\udc95"
    },
    {
      id: 15,
      title: "Our Whole World in One Frame",
      description: "Dressed up in traditional Kerala attire \u2014 Amma looking radiant as always, surrounded by her proud children Kuttan & Ammini and Achan.",
      tag: "Family Elegance",
      image: "./images/photo_30.jpg",
      caption: "All dressed up in tradition \u2014 Amma surrounded by her proud kids and Achan! \ud83c\udf3a\ud83e\ude94"
    },
    {
      id: 16,
      title: "Her Greatest Achievements",
      description: "From Kuttan's college graduation to Ammini's classical dance Arangetram \u2014 everything we achieve is built on Amma's selfless sacrifices and patient love.",
      tag: "Moments of Pride",
      image: "./images/photo_32.jpg",
      caption: "Amma's pride & joy \u2014 Kuttan's graduation & Ammini's classical dance debut! \ud83c\udf93\ud83d\udc83"
    },
    {
      id: 17,
      title: "Two Souls, One Heart",
      description: "Ammini and her lifelong confidante, guide, and greatest friend \u2014 sharing smiles and secrets amidst lush nature trails.",
      tag: "Mother & Daughter",
      image: "./images/photo_34.jpg",
      caption: "Ammini & her best friend forever \u2014 a mother-daughter bond like no other! \ud83d\udc6d\ud83d\udc9c"
    },
    {
      id: 18,
      title: "Framed in Grace",
      description: "Endlessly patient, wonderfully loving, and the heart of everything good in our lives \u2014 Amma, you will always be our inspiration.",
      tag: "Framed in Grace",
      image: "./images/photo_36.jpg",
      caption: "Picture perfect, endlessly graceful, and the most beautiful Amma in every frame \ud83d\udc9c\ud83d\uddbc\ufe0f"
    },
    {
      id: 19,
      title: "Her Living Legacy",
      description: "Please don't measure your life by what you think you should have achieved. Look at us \u2014 whatever is good in Kuttan and Ammini has a little bit of Amma in it.",
      tag: "Living Legacy",
      image: "./images/photo_38.jpg",
      caption: "Team Purple! Kuttan, Ammini & Amma twinning and celebrating together \ud83d\udc9c\ud83c\udf1f"
    }
  ],

  // Amma's Superpower Stats
  superpowers: [
    { name: "Building Home Anywhere", level: 100, icon: "Heart", detail: "Made every new town and house feel immediately safe, warm, and cozy." },
    { name: "Selfless Teaching & Giving", level: 100, icon: "Crown", detail: "Teaching students, dance, Malayalam, and giving love with no expectations." },
    { name: "Emotional Telepathy", level: 99, icon: "Eye", detail: "Knows what Kuttan or Ammini feel before we even whisper a single word." },
    { name: "Culinary Alchemy (Kazhicho?)", level: 100, icon: "Coffee", detail: "Healing every worry and bad day with delicious home-cooked soul food." },
    { name: "Quiet Resilience & Grace", level: 100, icon: "Shield", detail: "A fortress of quiet strength, dignity, and endless patient love." }
  ],

  // Interactive Love Jar Quotes
  loveJarQuotes: [
    "Amma, athalla. Njangal maariyittilla. Njangal valarnnu. Our world became bigger, but you will always be the safest part of it. 🌸",
    "Every 'kazhicho?' and 'sookshichu poyi vaa' is a blessing we carry wherever we go. 💖",
    "Please don't measure your life by what you think you could have achieved. Look at us — whatever is good in Kuttan and Ammini has a little bit of Amma in it. ✨",
    "Home was never just a place we lived. Home was always you, Amma. 🏡",
    "Kuttan was the kuruthakkedu ulla one, Ammini was the karachil queen, and you were our whole universe! 😂💕",
    "Teacher, dancer, mentor, friend, homemaker, and our dearest Amma — you are incredible in every way. 👑",
    "No matter how far our steps take us, the person we will always return to is you. 🌷",
    "You gave us more than a childhood. You gave us a home we could always return to. 💜",
    "We will always be your Kuttan and Ammini, and you will always be our Amma. Happy Birthday! 🎉❤️",
    "We love you, always and forever, Amma! 💖🌟"
  ]
};
