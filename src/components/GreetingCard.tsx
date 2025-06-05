
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GreetingCardProps {
  sheepName: string;
  sheepColor: string;
}

export const GreetingCard = ({ sheepName, sheepColor }: GreetingCardProps) => {
  const [isShared, setIsShared] = useState(false);

  const currentHijriDate = '١٠ ذو الحجة ١٤٤٦';
  const currentDate = new Date().toLocaleDateString('ar-SA');

  const shareMessage = encodeURIComponent(
    `🎉 تهنئة عيد أضحى مميزة من أحمد مبارك عبود عباد إليكم! 
    
شاهد رحلتي الروحانية مع أضحيتي "${sheepName}" في عيد الأضحى المبارك.

كل عام وأنتم بخير! 🐑✨

#عيد_الأضحى #رحلة_أضحيتي`
  );

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${shareMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsShared(true);
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareMessage}`;
    window.open(twitterUrl, '_blank');
    setIsShared(true);
  };

  console.log('Greeting card - Sheep:', sheepName, 'Color:', sheepColor);

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-gold/20 to-islamic-cream flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl bg-white shadow-2xl overflow-hidden">
        {/* Golden header with Ahmed's signature */}
        <div className="bg-gradient-to-r from-islamic-gold to-islamic-gold-light p-6 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <p className="text-white font-quran text-lg arabic">
              هدية من أحمد مبارك عبود عباد
            </p>
          </div>
          <h1 className="text-4xl font-quran text-white mb-2 arabic">
            عيد أضحى مبارك
          </h1>
          <p className="text-white/90 english font-english">
            Eid Al-Adha Mubarak
          </p>
        </div>

        {/* Main greeting content */}
        <div className="p-8 text-center">
          {/* Decorative Islamic pattern */}
          <div className="flex justify-center items-center mb-6">
            <div className="text-4xl">🌙</div>
            <div className="mx-4 w-20 h-px bg-islamic-gold"></div>
            <div className="text-4xl">☪️</div>
            <div className="mx-4 w-20 h-px bg-islamic-gold"></div>
            <div className="text-4xl">🕌</div>
          </div>

          {/* Personalized message */}
          <div className="bg-islamic-cream/50 p-6 rounded-lg mb-6 border border-islamic-gold/30">
            <h2 className="text-2xl font-quran text-islamic-olive mb-4 arabic">
              تمت رحلتي الروحانية بنجاح
            </h2>
            <p className="text-lg text-islamic-olive-dark mb-3 arabic">
              رافقتني أضحيتي الحبيبة "{sheepName}" في هذه الرحلة المباركة
            </p>
            
            {/* Sheep representation */}
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full border-4 border-islamic-gold shadow-lg relative"
                style={{ backgroundColor: sheepColor }}
              >
                <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Quranic verse */}
          <div className="bg-white p-6 rounded-lg border-2 border-islamic-gold/20 mb-6">
            <p className="text-xl font-quran text-islamic-olive leading-relaxed quran-text mb-3">
              "لِّيَشْهَدُوا مَنَافِعَ لَهُمْ وَيَذْكُرُوا اسْمَ اللَّهِ فِي أَيَّامٍ مَّعْلُومَاتٍ"
            </p>
            <p className="text-sm text-islamic-olive-light arabic">
              سورة الحج: آية ٢٨
            </p>
          </div>

          {/* Date information */}
          <div className="flex justify-between items-center mb-6 text-sm text-islamic-olive-light">
            <div className="arabic">
              <p>التاريخ الهجري: {currentHijriDate}</p>
            </div>
            <div className="english font-english">
              <p>{currentDate}</p>
            </div>
          </div>

          {/* Closing blessing */}
          <div className="text-center mb-8">
            <p className="text-2xl font-quran text-islamic-olive arabic">
              تقبل الله منا ومنكم صالح الأعمال
            </p>
            <p className="text-lg text-islamic-olive-light mt-2 english font-english">
              May Allah accept our good deeds
            </p>
          </div>

          {/* Share buttons */}
          <div className="space-y-4">
            <p className="text-islamic-olive font-bold arabic mb-4">
              شارك التهنئة مع الأحباب
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={shareOnWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center justify-center arabic"
              >
                <span className="ml-2">📱</span>
                شارك على واتساب
              </Button>
              
              <Button
                onClick={shareOnTwitter}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center justify-center arabic"
              >
                <span className="ml-2">🐦</span>
                شارك على تويتر
              </Button>
            </div>

            {isShared && (
              <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-700 font-bold arabic">
                  🎉 تم مشاركة التهنئة بنجاح! جزاك الله خيراً
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Golden footer */}
        <div className="bg-islamic-gold/10 p-4 text-center border-t border-islamic-gold/20">
          <p className="text-islamic-olive-light text-sm arabic">
            من القلب إلى القلب، بمناسبة عيد الأضحى المبارك
          </p>
        </div>
      </Card>
    </div>
  );
};
