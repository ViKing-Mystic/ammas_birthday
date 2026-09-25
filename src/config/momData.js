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

  // 1. The Interactive Cat & Envelope Intro Flow (3 Selected Photos)
  introStory: {
    frontPage: {
      headline: "Special Delivery for Amma! 💌",
      subheadline: "A sweet little messenger has something very special for you from your Kuttan & Ammini...",
      catHint: "Tap the envelope to open it! ✨",
      envelopePhoto: {
        image: "./images/photo_02.jpg",
        caption: "Youthful elegance and jasmine in her hair \u2014 our beautiful Amma's timeless grace.",
        tag: "Timeless Grace"
      },
      question: "Amma, do you want to see your birthday surprise?",
      yesButtonText: "Yes, absolutely! 💖",
      noButtonText: "No 🥺",
    },
    sadCatStage: {
      pleaTitle: "Please say yes, Amma... 🥺",
      pleaSubtitle: "Look at this face... you wouldn't break a kitten's heart on your birthday, right?",
      photo: {
        image: "./images/photo_09.jpg",
        caption: "Amma holding her whole world \u2014 little Kuttan and baby Ammini cuddled together at home.",
        tag: "Cozy Cuddles"
      },
      yesButtonText: "Okay, YES! 🥰",
      noButtonText: "Still No 🙈",
    },
    cryingCatStage: {
      pleaTitle: "Please please please say yes, Amma! 😭💔",
      pleaSubtitle: "The cat is literally drowning in tears! Just tap Yes, both your children prepared this with all their love!",
      photo: {
        image: "./images/photo_07.jpg",
        caption: "When our family became four \u2014 Amma holding baby Ammini with her little superhero Kuttan and Achan.",
        tag: "Family of Four"
      },
      yesButtonText: "YES! Love You Both! 💖🎉",
      noButtonText: "No 😭",
    }
  },

  // 2. The Royal Heartfelt Letter (2 Selected Photos)
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
        ],
        photo: {
          image: "./images/photo_37.jpg",
          caption: "Twinning in royal purple \u2014 Kuttan, Ammini, and Amma celebrating an unbreakable bond of love.",
          tag: "Unbreakable Bond"
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
        ],
        photo: {
          image: "./images/photo_30.jpg",
          caption: "Kuttan's college graduation day \u2014 a proud milestone made possible by Amma's endless prayers, support, and sacrifices.",
          tag: "Graduation Milestone"
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
        ]
      }
    ],
    
    closingQuote: "We love you, always. ❤️",
    signature: "Kuttan & Ammini"
  },

  // 3. Section 1: Moments (20 Photos - Chronological Rhythm: Solo -> Duo/Trio -> Group)
  memories: [
    {
        "id": 1,
        "image": "./images/photo_01.jpg",
        "caption": "Little Amma in her school days — a rare, nostalgic glimpse into our dearest mother's childhood.",
        "note": "A precious childhood glimpse",
        "dateOrTag": "Early Childhood",
        "category": "solo",
        "likes": 182
    },
    {
        "id": 2,
        "image": "./images/photo_03.jpg",
        "caption": "The sacred moment it all began — Amma and Achan exchanging wedding vows and promises of a lifetime.",
        "note": "Dhanya weds Maneesh",
        "dateOrTag": "Wedding Day",
        "category": "couple",
        "likes": 210
    },
    {
        "id": 3,
        "image": "./images/photo_10.jpg",
        "caption": "Holi celebrations with family — colorful cheeks, bright smiles, and baby Ammini joining the fun.",
        "note": "First festival colors",
        "dateOrTag": "Festival of Colors",
        "category": "family",
        "likes": 172
    },
    {
        "id": 4,
        "image": "./images/photo_17.jpg",
        "caption": "A moment of pure joy — Amma dancing in the green monsoon woods with a smile brighter than the rain.",
        "note": "Dancing in the woods",
        "dateOrTag": "Monsoon Joy",
        "category": "solo",
        "likes": 192
    },
    {
        "id": 5,
        "image": "./images/photo_05.jpg",
        "caption": "Young and carefree — Amma and Achan enjoying sunny outdoor days together.",
        "note": "Sunny days and sweet laughs",
        "dateOrTag": "Early Couple Days",
        "category": "couple",
        "likes": 164
    },
    {
        "id": 6,
        "image": "./images/photo_13.jpg",
        "caption": "Exploring historic stone monuments together — Achan holding baby Ammini in her cap while Kuttan and Amma smile by the ancient pillars.",
        "note": "Heritage temple exploration",
        "dateOrTag": "Temple Heritage Trip",
        "category": "family",
        "likes": 178
    },
    {
        "id": 7,
        "image": "./images/photo_11.jpg",
        "caption": "Achan, Amma, and young Kuttan covered in vibrant Holi gulal after festive mischief.",
        "note": "Colors and smiles",
        "dateOrTag": "Holi Mischief",
        "category": "kuttan",
        "likes": 160
    },
    {
        "id": 8,
        "image": "./images/photo_14.jpg",
        "caption": "Gathered at our ancestral home — generations of blessings with Muthassi, Muthachan, Amma, and the little ones.",
        "note": "Deep family roots",
        "dateOrTag": "Ancestral Roots",
        "category": "family",
        "likes": 165
    },
    {
        "id": 9,
        "image": "./images/photo_15.jpg",
        "caption": "Temple festival stalls and toy shopping — Amma treating young Kuttan to special festival treats.",
        "note": "Temple festival shopping",
        "dateOrTag": "Festival Treats",
        "category": "kuttan",
        "likes": 155
    },
    {
        "id": 10,
        "image": "./images/photo_16.jpg",
        "caption": "Sharing a single umbrella through the monsoon downpour — Amma's constant protection.",
        "note": "Monsoon rain shelter",
        "dateOrTag": "Shelter in Rain",
        "category": "family",
        "likes": 185
    },
    {
        "id": 11,
        "image": "./images/photo_20.jpg",
        "caption": "Nighttime strolls and sweet hugs — Ammini and Amma sharing laughter under city lights.",
        "note": "Nighttime cuddles",
        "dateOrTag": "Mother & Daughter Hugs",
        "category": "ammini",
        "likes": 186
    },
    {
        "id": 12,
        "image": "./images/photo_18.jpg",
        "caption": "Monsoon stream exploration — splashing through forest rocks with pink umbrellas and muddy shoes.",
        "note": "Rainy stream adventure",
        "dateOrTag": "Stream Adventure",
        "category": "family",
        "likes": 174
    },
    {
        "id": 13,
        "image": "./images/photo_23.jpg",
        "caption": "Sisterly bond by the water — Amma and Mami twinning gracefully in matching Kerala Set Sarees.",
        "note": "Kasavu twinning by the lake",
        "dateOrTag": "Sisterly Twinning",
        "category": "family",
        "likes": 182
    },
    {
        "id": 14,
        "image": "./images/photo_21.jpg",
        "caption": "Above the mist and clouds — a chilly hill station getaway with our favorite four.",
        "note": "Misty mountain trip",
        "dateOrTag": "Misty Heights",
        "category": "family",
        "likes": 170
    },
    {
        "id": 15,
        "image": "./images/photo_28.jpg",
        "caption": "Temple festival morning — Amma in Kasavu warmly embracing her two sweet nieces in matching green frocks.",
        "note": "Temple blessings with nieces",
        "dateOrTag": "Temple Nieces",
        "category": "family",
        "likes": 190
    },
    {
        "id": 16,
        "image": "./images/photo_26.jpg",
        "caption": "A joyful family dinner — Kuttan taking the wide selfie with Amma, Achan, Ammini, Mama, Mami, and the little cousins.",
        "note": "Family dinner feast",
        "dateOrTag": "Full Family Gathering",
        "category": "family",
        "likes": 218
    },
    {
        "id": 17,
        "image": "./images/photo_33.jpg",
        "caption": "Walking along scenic green trails — Amma and Ammini sharing quiet conversations and smiles.",
        "note": "Quiet mother-daughter moments",
        "dateOrTag": "Mother & Daughter Trail",
        "category": "ammini",
        "likes": 189
    },
    {
        "id": 18,
        "image": "./images/photo_31.jpg",
        "caption": "Celebrating Kuttan's graduation and Ammini's dance achievements — Amma's proudest moments as a mother.",
        "note": "Milestone achievements",
        "dateOrTag": "Children's Achievements",
        "category": "family",
        "likes": 215
    },
    {
        "id": 19,
        "image": "./images/photo_36.jpg",
        "caption": "Traditional temple blessings — a quiet, sacred day of gratitude and togetherness with Amma.",
        "note": "Temple blessings and peace",
        "dateOrTag": "Temple Darshan",
        "category": "family",
        "likes": 186
    },
    {
        "id": 20,
        "image": "./images/photo_32.jpg",
        "caption": "Standing before the roaring forest waterfall — scenic family hiking trails and unforgettable laughter.",
        "note": "Lush waterfall trail",
        "dateOrTag": "Waterfall Expedition",
        "category": "family",
        "likes": 194
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

  // 5. Section 2: Love (12 Photos - Chronological 4-Cycle Rhythm: Solo -> Duo/Trio -> Group)
  reasons: [
    {
        "id": 1,
        "title": "Timeless Grace & Radiant Presence",
        "description": "Framed in grace and warm radiance — Amma's natural elegance, heartfelt smile, and gentle soul have been the guiding light of our lives.",
        "tag": "Radiant Frame",
        "image": "./images/photo_35.jpg",
        "caption": "Framed in grace and radiance — our dearest Amma brightening every single room she enters."
    },
    {
        "id": 2,
        "title": "The Sacred Foundation of Our Home",
        "description": "With blessings from elders and sacred vows on the wedding stage, Amma and Achan built a foundation of trust, laughter, and devotion that surrounds our family every day.",
        "tag": "Sacred Beginnings",
        "image": "./images/photo_04.jpg",
        "caption": "Stepping into a lifetime of togetherness surrounded by sacred prayers and blessings."
    },
    {
        "id": 3,
        "title": "Carrying Our Entire World",
        "description": "Riding high on Achan's shoulders and resting securely in Amma's warm embrace — she gave us endless patience, cozy comfort, and a childhood filled with wonder.",
        "tag": "Childhood Warmth",
        "image": "./images/photo_08.jpg",
        "caption": "Shoulder rides and cozy hugs — early childhood memories in the comfort of Amma's care."
    },
    {
        "id": 4,
        "title": "Teacher, Orator & Guiding Star",
        "description": "Beyond raising a family, Amma dedicated herself to teaching children, choreographing traditional dance, and speaking on stage with remarkable poise and confidence.",
        "tag": "Inspiring Poise",
        "image": "./images/photo_19.jpg",
        "caption": "Commanding the stage with poise and grace — our multifaceted Amma inspiring everyone around her."
    },
    {
        "id": 5,
        "title": "Partners in Adventure & Laughter",
        "description": "Donning vibrant Rajasthani turbans and royal attire during their travels — Amma and Achan's joyful companionship and shared laughter make them the warmest pair.",
        "tag": "Royal Companions",
        "image": "./images/photo_06.jpg",
        "caption": "Amma and Achan embracing royal Rajasthani traditions with cheerful smiles."
    },
    {
        "id": 6,
        "title": "The Shelter of Home",
        "description": "No matter where life moved our family, Amma always established a haven of security and warmth where Kuttan and Ammini could grow, laugh, and thrive.",
        "tag": "Family Foundation",
        "image": "./images/photo_12.jpg",
        "caption": "Dressed in bright festive wear — Amma and Achan keeping their little children close and protected."
    },
    {
        "id": 7,
        "title": "Joy in Every Journey",
        "description": "Winding through lush green mountain slopes on the heritage blue toy train with wind in her hair — Amma's adventurous spirit and vibrant energy inspire us every day.",
        "tag": "Mountain Toy Train",
        "image": "./images/photo_22.jpg",
        "caption": "Winding through lush green mountain slopes on the heritage blue toy train with wind in her hair."
    },
    {
        "id": 8,
        "title": "Decades of Devotion & Companionship",
        "description": "Standing in front of India Gate, exchanging the very same loving, affectionate gaze that began their story decades ago — Amma & Achan's bond only deepens with time.",
        "tag": "Decades of Love",
        "image": "./images/photo_25.jpg",
        "caption": "A tender glance in Delhi — Amma and Achan's companionship growing richer with every passing year."
    },
    {
        "id": 9,
        "title": "The Heart of Our Family Tree",
        "description": "Surrounded by her parents (Muthachan & Muthassi), her brother & sister-in-law, her children, and her nieces — Amma stands at the loving center of our entire extended family.",
        "tag": "Family Heritage",
        "image": "./images/photo_27.jpg",
        "caption": "Three generations united in our ancestral courtyard — rooted in timeless love and cherished heritage."
    },
    {
        "id": 10,
        "title": "Gentle Soul & Winter Warmth",
        "description": "Wrapped in a warm floral shawl with her trademark peaceful smile — Amma brings comfort, tranquility, and reassurance wherever she is.",
        "tag": "Winter Warmth",
        "image": "./images/photo_24.jpg",
        "caption": "Cozy winter mornings — Amma wrapped in a floral shawl with her trademark warm smile."
    },
    {
        "id": 11,
        "title": "Sweet Memories & Shared Laughter",
        "description": "Late-evening dessert treats, spontaneous laughs, and ice cream outings — every simple moment spent with Amma becomes an unforgettable memory.",
        "tag": "Sweet Memories",
        "image": "./images/photo_34.jpg",
        "caption": "Late-evening dessert treat — Kuttan and Amma enjoying ice cream and fond memories together."
    },
    {
        "id": 12,
        "title": "Our Living Anchor & Pride",
        "description": "Seeing her children grown up into confident young adults, standing proudly beside Achan in traditional Kasavu — Amma's selfless dedication reflected in every smile.",
        "tag": "Family Pride",
        "image": "./images/photo_29.jpg",
        "caption": "A portrait of family pride — Amma and Achan with their grown-up Kuttan and Ammini dressed in tradition."
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
