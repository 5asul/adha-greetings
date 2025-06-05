
// خدمة للحصول على الآيات القرآنية من API موثوق
export interface QuranVerse {
  text: string;
  surah: string;
  verse: number;
  surahName: string;
  translation?: string;
}

export const quranVerses = {
  // آيات متعلقة بالحج والأضحية من مصادر موثوقة
  hajj: [
    {
      text: "وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ",
      surah: "22",
      verse: 27,
      surahName: "الحج",
      translation: "And proclaim to mankind the Hajj pilgrimage. They will come to you on foot and on every lean camel; they will come from every distant pass"
    },
    {
      text: "لِّيَشْهَدُوا مَنَافِعَ لَهُمْ وَيَذْكُرُوا اسْمَ اللَّهِ فِي أَيَّامٍ مَّعْلُومَاتٍ عَلَىٰ مَا رَزَقَهُم مِّن بَهِيمَةِ الْأَنْعَامِ",
      surah: "22",
      verse: 28,
      surahName: "الحج",
      translation: "That they may witness benefits for themselves and mention the name of Allah on known days over what He has provided for them of [sacrificial] animals"
    },
    {
      text: "وَمَن يُعَظِّمْ شَعَائِرَ اللَّهِ فَإِنَّهَا مِن تَقْوَى الْقُلُوبِ",
      surah: "22",
      verse: 32,
      surahName: "الحج",
      translation: "And whoever honors the symbols of Allah - indeed, it is from the piety of hearts"
    },
    {
      text: "فَإِذَا أَفَضْتُم مِّنْ عَرَفَاتٍ فَاذْكُرُوا اللَّهَ عِندَ الْمَشْعَرِ الْحَرَامِ",
      surah: "2",
      verse: 198,
      surahName: "البقرة",
      translation: "But when you depart from Arafat, remember Allah at al- Mash'ar al-Haram"
    }
  ],
  
  sacrifice: [
    {
      text: "وَالْبُدْنَ جَعَلْنَاهَا لَكُم مِّن شَعَائِرِ اللَّهِ لَكُمْ فِيهَا خَيْرٌ",
      surah: "22",
      verse: 36,
      surahName: "الحج",
      translation: "And the camels and cattle We have appointed for you as among the symbols of Allah; for you therein is good"
    },
    {
      text: "لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا وَلَٰكِن يَنَالُهُ التَّقْوَىٰ مِنكُمْ",
      surah: "22",
      verse: 37,
      surahName: "الحج",
      translation: "Their meat will not reach Allah, nor will their blood, but what reaches Him is piety from you"
    }
  ],
  
  general: [
    {
      text: "وَبَشِّرِ الْمُحْسِنِينَ",
      surah: "2",
      verse: 2,
      surahName: "البقرة",
      translation: "And give good tidings to the doers of good"
    },
    {
      text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
      surah: "2",
      verse: 153,
      surahName: "البقرة",
      translation: "Indeed, Allah is with the patient"
    }
  ]
};

export const getRandomVerse = (category: keyof typeof quranVerses): QuranVerse => {
  const verses = quranVerses[category];
  const randomIndex = Math.floor(Math.random() * verses.length);
  return verses[randomIndex];
};

export const getVerseById = (category: keyof typeof quranVerses, index: number): QuranVerse => {
  const verses = quranVerses[category];
  return verses[index] || verses[0];
};

// للاستخدام المستقبلي - يمكن ربطها بـ API خارجي موثوق
export const fetchVerseFromAPI = async (surahNumber: number, verseNumber: number): Promise<QuranVerse | null> => {
  try {
    // يمكن استخدام API مثل Al-Quran Cloud أو Quran.com API
    // const response = await fetch(`https://api.alquran.cloud/v1/ayah/${surahNumber}:${verseNumber}/ar`);
    // const data = await response.json();
    // return data.data;
    
    // في الوقت الحالي نعيد null لعدم وجود API مفعل
    return null;
  } catch (error) {
    console.error('Error fetching verse from API:', error);
    return null;
  }
};
