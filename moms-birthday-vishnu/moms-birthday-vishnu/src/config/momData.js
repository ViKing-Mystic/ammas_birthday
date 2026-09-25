/**
 * Centralized Configuration for Amma's Birthday Website
 * 
 * 💖 ROSE GOLD THEME EDITION 💖
 * 
 * From: Kuttan (Vishnu) & Ammini (Arya)
 * To: Dearest Amma
 * 
 * All photo slots are designed as a crisp 1:1 square aspect ratio.
 * Kuttan & Ammini can easily replace these placeholder URLs with real family pictures!
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

  // Audio configuration (Synthesized ambient chime lullaby or custom mp3)
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
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
        caption: "Kuttan and Ammini worked so hard to make your special day memorable! 🌷",
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
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        caption: "All our happiest family memories are waiting for you inside! 💕",
        tag: "Don't Break Our Hearts"
      },
      yesButtonText: "YES! Love You Both! 💖🎉",
      noButtonText: "No 😭",
    }
  },

  // 2. The Royal Heartfelt Letter (Page 1)
  letter: {
    title: "A Letter From Our Hearts",
    subtitle: "From your Kuttan & Ammini — some thoughts too deep for any ordinary greeting card.",
    salutation: "Dearest Amma,",
    paragraphs: [
      "On this special day, words feel almost too small to capture how much you truly mean to both of us. Every single day of our lives, you give so much of your heart, your time, and your energy to make sure our home is overflowing with warmth, peace, and comfort.",
      "We see all the quiet sacrifices you make every single day without ever asking for applause. We remember your gentle comforting words whenever things were tough, the hot and delicious food always waiting for us, and the unconditional belief you have forever placed in both of us.",
      "You inspire us more than you could ever know. Your kindness, your resilience, and your timeless grace teach us what really matters in this life. No matter where we go or how old we get, your love is our greatest sanctuary.",
      "Thank you for being our anchor, our teacher, our biggest cheerleader, and the greatest blessing God has ever given to us. May this upcoming year return to you a hundredfold all the boundless love, joy, and peace you shower upon us every single day."
    ],
    closing: "With all our love and deepest respect forever,",
    signature: "Kuttan & Ammini ❤️",
    // 1:1 Photos woven into the letter
    photos: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
        caption: "Amma's glowing smile that brightens our entire world ✨",
        tag: "Our Constant Light"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1490578474895-699bc4e2cf59?auto=format&fit=crop&w=800&q=80",
        caption: "Walking through life guided by your gentle footsteps 🌷",
        tag: "Forever Grateful"
      }
    ]
  },

  // 3. Photo Album / Memory Wall (Page 2 - 1:1 format)
  memories: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      caption: "Amma's beautiful radiant smile that lights up every room ✨",
      note: "Always graceful & kind",
      dateOrTag: "Timeless Grace",
      likes: 108
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      caption: "Cherished moments, silly jokes, and endless family laughter with Kuttan & Ammini 🌸",
      note: "Pure family happiness",
      dateOrTag: "Joyful Memories",
      likes: 95
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
      caption: "Quiet mornings, warm tea, and Amma's endless gentle wisdom ☕",
      note: "Our peaceful haven",
      dateOrTag: "Comfort & Peace",
      likes: 124
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1490578474895-699bc4e2cf59?auto=format&fit=crop&w=800&q=80",
      caption: "Every celebration is brighter because of Amma's loving presence 🌷",
      note: "Heart of our home",
      dateOrTag: "Celebration",
      likes: 142
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      caption: "The queen of our hearts, looking stunning and elegant as always 👑",
      note: "Inspirational grace",
      dateOrTag: "Queen Amma",
      likes: 160
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      caption: "Thank you for always believing in both of us and guiding our dreams 💖",
      note: "Our greatest blessing",
      dateOrTag: "Endless Love",
      likes: 199
    }
  ],

  // 4. Interactive Birthday Cake Section (Page 3)
  cake: {
    title: "Make a Birthday Wish, Amma!",
    instruction: "Close your eyes, make the deepest wish in your heart, and tap the candles to blow them out!",
    buttonText: "Blow the Candles 🎂✨",
    wishRevealed: "🎉 Happy Birthday, Amma! May your year ahead be overflowing with glowing health, serene peace, spontaneous laughter, and every ounce of happiness you give so selflessly to both of us!",
    hugButtonText: "Send Amma a Warm Hug 🤗",
    hugToast: "Big warm hug sent straight to Amma's heart from Kuttan & Ammini! 🤗❤️"
  },

  // 5. Why We Love You & Superpowers (Page 4)
  reasons: [
    {
      id: 1,
      title: "Our Warmest Sanctuary",
      description: "No matter how turbulent or stressful the outside world gets, Amma's warm hug and soothing voice instantly put everything at ease.",
      tag: "Pure Comfort",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
      caption: "A shelter of safety and pure love 🌸"
    },
    {
      id: 2,
      title: "The Undefeated Masterchef",
      description: "No Michelin star restaurant on Earth could ever rival the taste, warmth, and unmatched love Amma packs into every single meal for us.",
      tag: "Made with Love",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      caption: "Amma's cooking that feeds our souls 🍲✨"
    },
    {
      id: 3,
      title: "Silent Telepathic Radar",
      description: "Amma has that mystical motherly superpower of knowing exactly what Kuttan or Ammini need before we even whisper a single word.",
      tag: "Super Intuition",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      caption: "Always understanding us without words 💫"
    },
    {
      id: 4,
      title: "Unshakable Strength & Grace",
      description: "You handle every challenge with quiet dignity, patience, and a smile that reassures all of us that everything will be alright.",
      tag: "Our Pillar",
      image: "https://images.unsplash.com/photo-1490578474895-699bc4e2cf59?auto=format&fit=crop&w=800&q=80",
      caption: "An unbreakable pillar of dignity 🌷"
    },
    {
      id: 5,
      title: "The Sunshine of Our House",
      description: "Amma's laugh is completely contagious. When you are truly happy, our whole home lights up with pure joy and warmth.",
      tag: "Radiant Light",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      caption: "Bringing sunshine to every single morning ☀️"
    },
    {
      id: 6,
      title: "Our Forever Cheerleader",
      description: "You believed in us when we hesitated, celebrated our smallest milestones, and always gave both of us the wings to fly higher.",
      tag: "Greatest Guide",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      caption: "Cheering for Kuttan & Ammini always 🏆"
    }
  ],

  // Amma's Superpower Stats
  superpowers: [
    { name: "Unconditional Love", level: 100, icon: "Heart", detail: "Limitless, unwavering, and forever expanding." },
    { name: "Emotional Telepathy", level: 99, icon: "Eye", detail: "Knows what Kuttan or Ammini feel before we say a word." },
    { name: "Finding Lost Items", level: 100, icon: "Search", detail: "Magically spawns items that vanished into thin air." },
    { name: "Culinary Alchemy", level: 98, icon: "Coffee", detail: "Turns everyday ingredients into healing, delicious soul food." },
    { name: "Quiet Resilience", level: 100, icon: "Shield", detail: "A fortress of quiet strength, dignity, and patient grace." }
  ],

  // Interactive Love Jar Quotes
  loveJarQuotes: [
    "Amma, your hug is our favorite place in the whole wide world. 🌸",
    "Thank you for teaching both Kuttan and Ammini how to be kind, strong, and honest. ✨",
    "You have the most beautiful, selfless soul we have ever known, Amma. 💖",
    "Every good quality in both of us is a direct reflection of your love. 🌷",
    "No matter how tall or old we grow, we will always look up to you, Amma. 🌟",
    "Thank you for celebrating all of our life's little milestones with so much pride. 🎉",
    "Home is never a physical place — it is wherever you are, Amma. 🏡",
    "Wishing you endless peace, radiant health, and sweet smiles today and always! 🥂",
    "You make the hard days feel simple and the good days feel magical. 🌈",
    "To the queen of our hearts, Happy Birthday from your Kuttan & Ammini! 👑❤️"
  ]
};
