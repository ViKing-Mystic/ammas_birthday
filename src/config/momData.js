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
    title: "Amma's Birthday Melody",
    artist: "Acoustic Piano & Chimes",
    url: "", 
  },

  // 1. The Interactive Cat & Envelope Intro Flow
  introStory: {
    // Step 1: Front Page with Cat holding sealed envelope
    frontPage: {
      headline: "Special Delivery for Amma! 💌",
      subheadline: "A sweet little messenger has something very special for you from your Kuttan & Ammini...",
      catHint: "Tap the envelope to open it! ✨",
      
      // Revealed when envelope is tapped
      envelopePhoto: {
        image: "./images/photo_27.jpg",
        caption: "To the most radiant, wonderful Amma in the universe! 🌸✨",
        tag: "Our Queen Forever"
      },
      question: "Amma, do you want to see your birthday surprise?",
      yesButtonText: "Yes, absolutely! 💖",
      noButtonText: "No 🥺",
    },

    // Step 2: First "No" clicked -> Sad Cat
    sadCatStage: {
      pleaTitle: "Please say yes, Amma... 🥺",
      pleaSubtitle: "Look at this face... you wouldn't break a kitten's heart on your birthday, right?",
      photo: {
        image: "./images/photo_20.jpg",
        caption: "Kuttan and Ammini worked so hard to make your special day memorable! ☔🌷",
        tag: "Say Yes Please!"
      },
      yesButtonText: "Okay, YES! 🥰",
      noButtonText: "Still No 🙈",
    },

    // Step 3: Second "No" clicked -> Crying Cat
    cryingCatStage: {
      pleaTitle: "Please please please say yes, Amma! 😭💔",
      pleaSubtitle: "The cat is literally drowning in tears! Just tap Yes, both your children prepared this with all their love!",
      photo: {
        image: "./images/photo_30.jpg",
        caption: "All our happiest family memories are waiting for you inside! 👶🦸‍♂️💕",
        tag: "Don't Break Our Hearts"
      },
      yesButtonText: "YES! Love You Both! 💖🎉",
      noButtonText: "No 😭",
    }
  },

  // 2. The Royal Heartfelt Letter (Page 1)
  letter: {
    title: "A Letter From Our Hearts",
    subtitle: "From your Kuttan & Ammini — thoughts too deep for any ordinary greeting card.",
    salutation: "Dearest Amma,",
    
    // Structured letter sections weaving the story & photos
    sections: [
      {
        paragraphs: [
          "On this special day, we wanted to tell you something we probably don't say enough - how much you mean to both of us.",
          "When we think about our childhood, we realise how much of it was simply you.",
          "Kuttan was always the kuruthakkedu ulla one, finding some new mischief every day. And then there was Ammini, our little karachil queen, crying over the smallest things whenever she didn't get what she wanted. 😂",
          "And somehow, through all of it, Amma took care of both of us.",
          "You were our food, our comfort, our teacher, our scolding, our biggest cheerleader and the person who made every place feel like home."
        ],
        photo: {
          image: "./images/photo_02.jpg",
          caption: "Holding her whole world — Little Kuttan & baby Ammini with Amma! 🌸✨",
          tag: "Where It Began"
        }
      },
      {
        paragraphs: [
          "You didn't just raise us. You were always doing something for others too - teaching children, helping students, dancing, teaching dance, being part of programmes and simply giving your time and love wherever you could.",
          "And Amma, we wish you could see yourself the way we see you.",
          "We know sometimes you feel that you haven't done enough, or that you could have done more.",
          "But when we look at you, we don't see what you couldn't do.",
          "We see everything you did.",
          "We see a woman who gave so much of herself to her family, while still finding ways to learn, teach, create and help others."
        ],
        photo: {
          image: "./images/photo_25.jpg",
          caption: "Leading with words, grace, and an inspiring presence — Our superwoman on stage! 🎤💙",
          tag: "Her Radiant Spirit"
        }
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
        ],
        photo: {
          image: "./images/photo_12.jpg",
          caption: "Kuttan's graduation day! Amma's prayers turned into our proudest milestone 🎓💜",
          tag: "Taking Our Steps"
        }
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
        ],
        photo: {
          image: "./images/photo_11.jpg",
          caption: "All dressed up in tradition — Amma surrounded by her proud kids and Achan! 🌺🪔",
          tag: "Our Safe Harbor"
        }
      }
    ],
    
    closingQuote: "We love you, always. ❤️",
    signature: "Kuttan & Ammini"
  },

  // 3. Photo Album / Memory Wall (All 31 Photos with cute captions)
  memories: [
    {
      id: 1,
      image: "./images/photo_01.jpg",
      caption: "Colors of joy with Amma! Holi fun with little Kuttan and Achan 🎨💖",
      note: "Smiles painted with love",
      dateOrTag: "Colors & Smiles",
      category: "kuttan",
      likes: 128
    },
    {
      id: 2,
      image: "./images/photo_02.jpg",
      caption: "Holding her whole world — Little Kuttan & baby Ammini with Amma! 🌸✨",
      note: "Her two precious gems",
      dateOrTag: "Double Trouble",
      category: "family",
      likes: 145
    },
    {
      id: 3,
      image: "./images/photo_03.jpg",
      caption: "Temple visits, toy shopping & endless treats with our sweet Amma! 🛍️🏮",
      note: "Special festival treats",
      dateOrTag: "Festive Joy",
      category: "family",
      likes: 119
    },
    {
      id: 4,
      image: "./images/photo_04.jpg",
      caption: "Generations of love, warmth, and timeless Kerala traditions 🌼🏡",
      note: "Family roots & blessings",
      dateOrTag: "Roots & Heritage",
      category: "family",
      likes: 132
    },
    {
      id: 5,
      image: "./images/photo_05.jpg",
      caption: "Amma & Achan — The cutest love story in the whole universe! 👒🕶️❤️",
      note: "Sweetest couple ever",
      dateOrTag: "Sweet Romance",
      category: "couple",
      likes: 160
    },
    {
      id: 6,
      image: "./images/photo_06.jpg",
      caption: "Royal vibes! When Amma & Achan ruled Rajasthan in style 👑🏰",
      note: "King & Queen",
      dateOrTag: "Royal Couple",
      category: "couple",
      likes: 154
    },
    {
      id: 7,
      image: "./images/photo_07.jpg",
      caption: "Adventures & ancient wonders — exploring the world together as a family! 🏛️☀️",
      note: "Little Kuttan & baby Ammini",
      dateOrTag: "Family Adventures",
      category: "family",
      likes: 138
    },
    {
      id: 8,
      image: "./images/photo_08.jpg",
      caption: "A warm bundle of hugs, laughter, and pure home comfort with Amma! 🛋️💕",
      note: "Coziest corner of home",
      dateOrTag: "Cozy Cuddles",
      category: "family",
      likes: 147
    },
    {
      id: 9,
      image: "./images/photo_09.jpg",
      caption: "Dancing in the monsoon woods with a smile brighter than sunshine 🌧️🌿✨",
      note: "Pure natural elegance",
      dateOrTag: "Monsoon Bliss",
      category: "solo_vintage",
      likes: 168
    },
    {
      id: 10,
      image: "./images/photo_10.jpg",
      caption: "Monsoon stream splashes! Rain, pink umbrellas & muddy adventures with Amma ☔🏞️",
      note: "Unforgettable rain days",
      dateOrTag: "Monsoon Magic",
      category: "family",
      likes: 152
    },
    {
      id: 11,
      image: "./images/photo_11.jpg",
      caption: "All dressed up in tradition — Amma surrounded by her proud kids and Achan! 🌺🪔",
      note: "Picture of perfection",
      dateOrTag: "Family Elegance",
      category: "family",
      likes: 210
    },
    {
      id: 12,
      image: "./images/photo_12.jpg",
      caption: "Kuttan's graduation day! Amma's prayers turned into our proudest milestone 🎓💜",
      note: "Moments of pride",
      dateOrTag: "Proud Amma",
      category: "kuttan",
      likes: 195
    },
    {
      id: 13,
      image: "./images/photo_13.jpg",
      caption: "Chasing waterfalls & making lifelong memories with our favorite travel buddy — Amma! 🌊🍃",
      note: "Nature trips with family",
      dateOrTag: "Waterfall Escape",
      category: "family",
      likes: 176
    },
    {
      id: 14,
      image: "./images/photo_14.jpg",
      caption: "Ammini & her best friend forever — a mother-daughter bond like no other! 👭💜",
      note: "Two souls, one heart",
      dateOrTag: "Mother & Daughter",
      category: "ammini",
      likes: 189
    },
    {
      id: 15,
      image: "./images/photo_15.jpg",
      caption: "Sweet treats & sweetest talks — Kuttan & Amma's favorite ice cream date! 🍨🍫",
      note: "Sweet tooth bonding",
      dateOrTag: "Sweet Treats",
      category: "kuttan",
      likes: 182
    },
    {
      id: 16,
      image: "./images/photo_16.jpg",
      caption: "Picture perfect, endlessly graceful, and the most beautiful Amma in every frame 💜🖼️",
      note: "Framed in grace",
      dateOrTag: "Picture Perfect",
      category: "solo_vintage",
      likes: 177
    },
    {
      id: 17,
      image: "./images/photo_17.jpg",
      caption: "Temple blessings, golden smiles, and the warmth of family all around 🪔✨",
      note: "Divine blessings",
      dateOrTag: "Temple Blessings",
      category: "family",
      likes: 165
    },
    {
      id: 18,
      image: "./images/photo_18.jpg",
      caption: "Team Purple! Kuttan, Ammini & Amma twinning and celebrating together 💜🌟",
      note: "Twinning in Kasavu",
      dateOrTag: "Twinning Trio",
      category: "family",
      likes: 204
    },
    {
      id: 19,
      image: "./images/photo_19.jpg",
      caption: "Little Amma! A precious glimpse into the sweet childhood of our dearest queen 📺🌸",
      note: "Where it all began",
      dateOrTag: "Little Amma",
      category: "solo_vintage",
      likes: 190
    },
    {
      id: 20,
      image: "./images/photo_20.jpg",
      caption: "Amma's shelter of love — rainy day adventures with her little Kuttan & Ammini! ☔👦👧",
      note: "Under Amma's umbrella",
      dateOrTag: "Rainy Day Joy",
      category: "family",
      likes: 162
    },
    {
      id: 21,
      image: "./images/photo_21.jpg",
      caption: "Sunny yellow smiles! Amma carrying her little sunshine Ammini 🌻💛",
      note: "Pure sunshine",
      dateOrTag: "Sunny Smiles",
      category: "ammini",
      likes: 173
    },
    {
      id: 22,
      image: "./images/photo_22.jpg",
      caption: "The purest giggle and the most loving mother's gaze in the universe 💕👼",
      note: "Innocent giggles",
      dateOrTag: "Pure Innocence",
      category: "ammini",
      likes: 185
    },
    {
      id: 23,
      image: "./images/photo_23.jpg",
      caption: "Midnight street hugs & heart-to-heart giggles with Ammini 🤗🌙",
      note: "Never too old for a hug",
      dateOrTag: "Warmest Hugs",
      category: "ammini",
      likes: 169
    },
    {
      id: 24,
      image: "./images/photo_24.jpg",
      caption: "Amma's pride & joy — Kuttan's graduation & Ammini's classical dance debut! 🎓💃",
      note: "Proudest moments",
      dateOrTag: "Moments of Pride",
      category: "family",
      likes: 198
    },
    {
      id: 25,
      image: "./images/photo_25.jpg",
      caption: "Leading with words, grace, and an inspiring presence — Our superwoman on stage! 🎤💙",
      note: "Voice of wisdom",
      dateOrTag: "Grace on Stage",
      category: "solo_vintage",
      likes: 164
    },
    {
      id: 26,
      image: "./images/photo_26.jpg",
      caption: "On top of the clouds! Misty hill station memories with our favorite four ☁️🏔️",
      note: "Above the clouds",
      dateOrTag: "Misty Heights",
      category: "family",
      likes: 171
    },
    {
      id: 27,
      image: "./images/photo_27.jpg",
      caption: "Timeless beauty, sparkling eyes, and the gentlest heart — Our dearest Amma 🌸🤍",
      note: "Mulla poo & smiles",
      dateOrTag: "Timeless Beauty",
      category: "solo_vintage",
      likes: 215
    },
    {
      id: 28,
      image: "./images/photo_28.jpg",
      caption: "Where our family story began — Amma & Achan's sacred wedding day! 💍🎊",
      note: "Dhanya weds Maneesh",
      dateOrTag: "Wedding Vows",
      category: "couple",
      likes: 188
    },
    {
      id: 29,
      image: "./images/photo_29.jpg",
      caption: "Surrounded by blessings, loved ones, and timeless promises of togetherness 🪔💐",
      note: "Family blessings",
      dateOrTag: "Sacred Beginnings",
      category: "couple",
      likes: 181
    },
    {
      id: 30,
      image: "./images/photo_30.jpg",
      caption: "When our family was newly complete — Amma holding baby Ammini with superhero Kuttan & Achan! 🦸‍♂️👶",
      note: "Superman Kuttan & baby Ammini",
      dateOrTag: "New Beginnings",
      category: "family",
      likes: 192
    },
    {
      id: 31,
      image: "./images/photo_31.jpg",
      caption: "Riding high on shoulders & cuddled in Amma's arms — the happiest childhood days! 🎈🏡",
      note: "Unforgettable childhood",
      dateOrTag: "Childhood Joy",
      category: "family",
      likes: 175
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

  // 5. Why We Love You & Superpowers (Page 4)
  reasons: [
    {
      id: 1,
      title: "Building Home Anywhere",
      description: "Every time our family moved to a new place, Amma built a new little world for us. With her warmth, patience, and love, she made every place feel like home.",
      tag: "Our Safe Sanctuary",
      image: "./images/photo_08.jpg",
      caption: "A shelter of safety, warmth, and pure love 🛋️💕"
    },
    {
      id: 2,
      title: "Teacher, Dancer & Creator",
      description: "She didn't just raise us. She taught children, helped students, learned and performed traditional dances, participated in programmes and fashion shows, and taught Malayalam with an open heart.",
      tag: "Endless Giving",
      image: "./images/photo_25.jpg",
      caption: "Inspiring on stage and in life — our superwoman! 🎤💙"
    },
    {
      id: 3,
      title: "Kuttan's Anchor & Pride",
      description: "From the mischievous boy finding new adventures every day to college graduation and work, Amma's guidance, scolding, and endless prayers shaped everything good in Kuttan.",
      tag: "Mischief to Milestones",
      image: "./images/photo_12.jpg",
      caption: "Kuttan's graduation day — Amma's greatest pride 🎓💜"
    },
    {
      id: 4,
      title: "Ammini's Safe Haven & Best Friend",
      description: "From our little 'karachil queen' crying over small things to classical dance and grown-up talks, Amma was always her greatest comfort, confidante, and cheerleader.",
      tag: "Inseparable Bond",
      image: "./images/photo_14.jpg",
      caption: "Ammini & her best friend forever in nature 👭💜"
    },
    {
      id: 5,
      title: "Our Eternal Safe Harbor",
      description: "Every 'kazhicho?', every 'sookshichu poyi vaa', every meal waiting for us, every little worry, every scolding, and every prayer — we carry all of it with us wherever we go.",
      tag: "Always With Us",
      image: "./images/photo_15.jpg",
      caption: "Sweet treats & sweetest talks with Amma 🍨🍫"
    },
    {
      id: 6,
      title: "Her Reflection in Us",
      description: "Please don't measure your life by what you think you should have achieved. Look at us — your kindness, patience, courage, and love live on in everything Kuttan and Ammini do.",
      tag: "Our Living Legacy",
      image: "./images/photo_18.jpg",
      caption: "Team Purple: Kuttan, Ammini & Amma forever 💜"
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
