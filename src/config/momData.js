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
        image: "./images/photo_24.jpg",
        caption: "Cozy winter mornings \u2014 Amma wrapped in a floral shawl with her trademark warm smile.",
        tag: "Winter Warmth"
      },
      question: "Amma, do you want to see your birthday surprise?",
      yesButtonText: "Yes, absolutely! 💖",
      noButtonText: "No 🥺",
    },
    sadCatStage: {
      pleaTitle: "Please say yes, Amma... 🥺",
      pleaSubtitle: "Look at this face... you wouldn't break a kitten's heart on your birthday, right?",
      photo: {
        image: "./images/photo_37.jpg",
        caption: "Twinning in royal purple \u2014 Kuttan, Ammini, and Amma celebrating an unbreakable bond of love.",
        tag: "Unbreakable Bond"
      },
      yesButtonText: "Okay, YES! 🥰",
      noButtonText: "Still No 🙈",
    },
    cryingCatStage: {
      pleaTitle: "Please please please say yes, Amma! 😭💔",
      pleaSubtitle: "The cat is literally drowning in tears! Just tap Yes, both your children prepared this with all their love!",
      photo: {
        image: "./images/photo_29.jpg",
        caption: "A portrait of family pride \u2014 Amma and Achan with their grown-up Kuttan and Ammini dressed in tradition.",
        tag: "Family Pride"
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
          image: "./images/photo_16.jpg",
          caption: "Sharing a single umbrella through the monsoon downpour \u2014 Amma's constant protection and shelter.",
          tag: "Shelter in Rain"
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

  // 3. Section 1: Moments (12 Specific Photos in Exact Requested Order)
  memories: [
    {
      id: 1,
      image: "./images/photo_01.jpg",
      caption: "Little Amma in her school days \u2014 a rare, nostalgic glimpse into our dearest mother's childhood.",
      note: "A precious childhood glimpse",
      dateOrTag: "Early Childhood",
      category: "solo",
      likes: 182
    },
    {
      id: 2,
      image: "./images/photo_02.jpg",
      caption: "Youthful elegance and jasmine in her hair \u2014 our beautiful Amma's timeless grace.",
      note: "Traditional Kasavu & jasmine",
      dateOrTag: "Timeless Grace",
      category: "solo",
      likes: 195
    },
    {
      id: 3,
      image: "./images/photo_03.jpg",
      caption: "The sacred moment it all began \u2014 Amma and Achan exchanging wedding vows and promises of a lifetime.",
      note: "Dhanya weds Maneesh",
      dateOrTag: "Wedding Day",
      category: "couple",
      likes: 210
    },
    {
      id: 4,
      image: "./images/photo_04.jpg",
      caption: "Stepping into a lifetime of togetherness surrounded by sacred prayers and blessings.",
      note: "Sacred beginnings & vows",
      dateOrTag: "Wedding Stage",
      category: "couple",
      likes: 204
    },
    {
      id: 5,
      image: "./images/photo_06.jpg",
      caption: "Amma and Achan embracing royal Rajasthani traditions with cheerful smiles.",
      note: "Rajasthani turbans & smiles",
      dateOrTag: "Royal Companions",
      category: "couple",
      likes: 188
    },
    {
      id: 6,
      image: "./images/photo_07.jpg",
      caption: "When our family became four \u2014 Amma holding baby Ammini with her little superhero Kuttan and Achan.",
      note: "Superman Kuttan & baby Ammini",
      dateOrTag: "Family of Four",
      category: "family",
      likes: 224
    },
    {
      id: 7,
      image: "./images/photo_08.jpg",
      caption: "Shoulder rides and cozy hugs \u2014 early childhood memories in the comfort of Amma's care.",
      note: "Shoulder rides with Kuttan",
      dateOrTag: "Childhood Warmth",
      category: "kuttan",
      likes: 190
    },
    {
      id: 8,
      image: "./images/photo_10.jpg",
      caption: "Holi celebrations with family \u2014 colorful cheeks, bright smiles, and baby Ammini joining the fun.",
      note: "First Holi with Ammini",
      dateOrTag: "Festival of Colors",
      category: "ammini",
      likes: 176
    },
    {
      id: 9,
      image: "./images/photo_11.jpg",
      caption: "Achan, Amma, and young Kuttan covered in vibrant Holi gulal after festive mischief.",
      note: "Holi mischief with Kuttan",
      dateOrTag: "Holi Mischief",
      category: "kuttan",
      likes: 182
    },
    {
      id: 10,
      image: "./images/photo_12.jpg",
      caption: "Dressed in bright festive wear \u2014 Amma and Achan keeping their little children close and protected.",
      note: "Festive family shelter",
      dateOrTag: "Family Foundation",
      category: "family",
      likes: 196
    },
    {
      id: 11,
      image: "./images/photo_13.jpg",
      caption: "Exploring historic stone monuments together \u2014 Achan holding baby Ammini in her cap while Kuttan and Amma smile by the ancient pillars.",
      note: "Heritage temple exploration",
      dateOrTag: "Temple Heritage Trip",
      category: "family",
      likes: 185
    },
    {
      id: 12,
      image: "./images/photo_09.jpg",
      caption: "Amma holding her whole world \u2014 little Kuttan and baby Ammini cuddled together at home.",
      note: "Cozy cuddles at home",
      dateOrTag: "Cozy Cuddles",
      category: "family",
      likes: 230
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

  // 5. Section 2: Love (Ordered: All Solo -> All Duo -> All Trio -> All Group)
  reasons: [
    // --- SOLO IMAGES (6 Photos) ---
    {
      id: 1,
      title: "Teacher, Orator & Guiding Star",
      description: "Beyond raising a family, Amma dedicated herself to teaching children, choreographing traditional dance, and speaking on stage with remarkable poise and confidence.",
      tag: "Inspiring Poise",
      image: "./images/photo_19.jpg",
      caption: "Commanding the stage with poise and grace \u2014 our multifaceted Amma inspiring everyone around her."
    },
    {
      id: 2,
      title: "Joyful Spirit & Free Soul",
      description: "Winding through lush green mountain slopes on the heritage toy train with the mountain breeze in her hair \u2014 Amma's radiant, adventurous smile brightens the world.",
      tag: "Free Spirit",
      image: "./images/photo_22.jpg",
      caption: "Winding through lush green mountain slopes on the heritage blue toy train with wind in her hair."
    },
    {
      id: 3,
      title: "Timeless Grace & Radiance",
      description: "Framed in grace, dignity, and warmth \u2014 our dearest Amma brightening every single room she enters with her gentle, loving presence.",
      tag: "Radiant Grace",
      image: "./images/photo_35.jpg",
      caption: "Framed in grace and radiance \u2014 our dearest Amma brightening every single room she enters."
    },
    {
      id: 4,
      title: "Lighting Up Every Occasion",
      description: "Standing beside the traditional Nilavilakku adorned with fragrant jasmine \u2014 Amma's serene smile and effortless elegance bring auspicious light and joy to every gathering.",
      tag: "Traditional Elegance",
      image: "./images/photo_38.jpg",
      caption: "Standing with the ceremonial Nilavilakku \u2014 our radiant Amma gracing every gathering with warmth and dignity."
    },
    {
      id: 5,
      title: "Devotion, Blessings & Pongala Prayers",
      description: "Kneeling with the sacred earthen pot and fresh blossoms during festival prayers \u2014 Amma's heartfelt devotion and selfless prayers are the divine protection surrounding our family.",
      tag: "Sacred Devotion",
      image: "./images/photo_39.jpg",
      caption: "Preparing the sacred Pongala pot with pure devotion \u2014 Amma's prayers and boundless blessings for our family."
    },
    {
      id: 6,
      title: "Inspiring Teacher & Loving Mentor",
      description: "Watching over students with encouragement and gentle guidance \u2014 Amma selflessly pouring her creative talents, passion, and patience into shaping young minds.",
      tag: "Nurturing Mentor",
      image: "./images/photo_15.jpg",
      caption: "Guiding young artists with encouragement and care \u2014 Amma sharing her creative spirit and wisdom."
    },

    // --- DUO IMAGES (6 Photos) ---
    {
      id: 7,
      title: "Sunny Days & Sweet Laughter",
      description: "Young and carefree \u2014 Amma and Achan enjoying sunny outdoor days together, building memories filled with sweet laughter and enduring love.",
      tag: "Early Couple Days",
      image: "./images/photo_05.jpg",
      caption: "Young and carefree \u2014 Amma and Achan enjoying sunny outdoor days together."
    },
    {
      id: 8,
      title: "Mother & Daughter Heart-to-Heart",
      description: "Nighttime strolls, sweet hugs, and endless giggles \u2014 Ammini and Amma sharing laughter and a deep, comforting bond under the city lights.",
      tag: "Mother-Daughter Bond",
      image: "./images/photo_20.jpg",
      caption: "Nighttime strolls and sweet hugs \u2014 Ammini and Amma sharing laughter under city lights."
    },
    {
      id: 9,
      title: "Sisterhood & Shared Heritage",
      description: "Twinning gracefully in matching traditional Kerala Set Sarees by the water \u2014 celebrating family roots, elegance, and timeless sisterly affection.",
      tag: "Sisterly Twinning",
      image: "./images/photo_23.jpg",
      caption: "Sisterly bond by the water \u2014 Amma and Mami twinning gracefully in matching Kerala Set Sarees."
    },
    {
      id: 10,
      title: "Decades of Devotion & Companionship",
      description: "Standing in front of India Gate, exchanging the very same loving gaze that began their story decades ago \u2014 Amma & Achan's companionship growing richer every day.",
      tag: "Decades of Love",
      image: "./images/photo_25.jpg",
      caption: "A tender glance in Delhi \u2014 Amma and Achan's companionship growing richer with every passing year."
    },
    {
      id: 11,
      title: "Walking Hand in Hand",
      description: "Walking along scenic green trails \u2014 Amma and Ammini sharing quiet conversations, gentle walks, and sweet smiles together in nature.",
      tag: "Peaceful Trails",
      image: "./images/photo_33.jpg",
      caption: "Walking along scenic green trails \u2014 Amma and Ammini sharing quiet conversations and smiles."
    },
    {
      id: 12,
      title: "Sweet Treats & Late-Night Chats",
      description: "Late-evening dessert dates \u2014 sharing laughs, sweet treats, and heart-to-heart conversations with Kuttan, making ordinary evenings feel special.",
      tag: "Sweet Moments",
      image: "./images/photo_34.jpg",
      caption: "Late-evening dessert treat \u2014 Kuttan and Amma enjoying ice cream and fond memories together."
    },

    // --- TRIO IMAGES (3 Photos) ---
    {
      id: 13,
      title: "Onam Festivities & Joyous Smiles",
      description: "Posing with Mahabali at Kerala Samajam Onam celebrations in Mysore \u2014 Amma, Achan, and Ammini celebrating our rich heritage, laughter, and togetherness.",
      tag: "Onam Celebrations",
      image: "./images/photo_17.jpg",
      caption: "Onam celebrations with Achan and Ammini \u2014 sharing Kerala traditions and bright festive smiles together."
    },
    {
      id: 14,
      title: "Endless Warmth for the Little Ones",
      description: "Temple festival morning in Kasavu \u2014 Amma warmly embracing her two sweet nieces in matching green frocks with boundless auntie love.",
      tag: "Temple Nieces",
      image: "./images/photo_28.jpg",
      caption: "Temple festival morning \u2014 Amma in Kasavu warmly embracing her two sweet nieces in matching green frocks."
    },
    {
      id: 15,
      title: "Her Greatest Milestones Reflected in Us",
      description: "Celebrating Kuttan's graduation and Ammini's dance achievements \u2014 every triumph of our youth is a testament to Amma's love and unwavering belief.",
      tag: "Children's Achievements",
      image: "./images/photo_31.jpg",
      caption: "Celebrating Kuttan's graduation and Ammini's dance achievements \u2014 Amma's proudest moments as a mother."
    },

    // --- GROUP IMAGES (7 Photos) ---
    {
      id: 16,
      title: "Generations of Blessings",
      description: "Gathered at our ancestral home \u2014 rooted in the love, warmth, and blessings of Muthassi, Muthachan, Amma, and the little ones.",
      tag: "Ancestral Roots",
      image: "./images/photo_14.jpg",
      caption: "Gathered at our ancestral home \u2014 generations of blessings with Muthassi, Muthachan, Amma, and the little ones."
    },
    {
      id: 17,
      title: "Monsoon Stream Adventures",
      description: "Splashing through forest rocks with pink umbrellas and muddy shoes \u2014 adventurous family days spent laughing through the monsoon rain.",
      tag: "Rainy Adventure",
      image: "./images/photo_18.jpg",
      caption: "Monsoon stream exploration \u2014 splashing through forest rocks with pink umbrellas and muddy shoes."
    },
    {
      id: 18,
      title: "Above the Clouds Together",
      description: "Above the mist and clouds \u2014 a chilly hill station getaway surrounded by mountain breeze, warmth, and our favorite four.",
      tag: "Misty Heights",
      image: "./images/photo_21.jpg",
      caption: "Above the mist and clouds \u2014 a chilly hill station getaway with our favorite four."
    },
    {
      id: 19,
      title: "Laughter Around the Dinner Table",
      description: "A joyful family dinner \u2014 Kuttan taking the wide selfie with Amma, Achan, Ammini, Mama, Mami, and the little cousins surrounded by pure happiness.",
      tag: "Full Family Gathering",
      image: "./images/photo_26.jpg",
      caption: "A joyful family dinner \u2014 Kuttan taking the wide selfie with Amma, Achan, Ammini, Mama, Mami, and the little cousins."
    },
    {
      id: 20,
      title: "The Heart of Our Family Tree",
      description: "Three generations united in our ancestral courtyard \u2014 surrounded by parents, brother, sister-in-law, children, and nieces, Amma stands at the loving center.",
      tag: "Family Heritage",
      image: "./images/photo_27.jpg",
      caption: "Three generations united in our ancestral courtyard \u2014 rooted in timeless love and cherished heritage."
    },
    {
      id: 21,
      title: "Standing by Roaring Waterfalls",
      description: "Scenic family hiking trails and unforgettable laughter before the roaring forest waterfall \u2014 making memories that will last a lifetime.",
      tag: "Waterfall Expedition",
      image: "./images/photo_32.jpg",
      caption: "Standing before the roaring forest waterfall \u2014 scenic family hiking trails and unforgettable laughter."
    },
    {
      id: 22,
      title: "Quiet Gratitude & Sacred Blessings",
      description: "A quiet, sacred day of gratitude, prayers, and togetherness at the temple \u2014 peaceful moments carrying Amma's love and blessings.",
      tag: "Temple Darshan",
      image: "./images/photo_36.jpg",
      caption: "Traditional temple blessings \u2014 a quiet, sacred day of gratitude and togetherness with Amma."
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
