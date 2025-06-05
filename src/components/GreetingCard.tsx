import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GreetingCardProps {
  userName: string;
  userIntention: string;
}

export const GreetingCard = ({ userName, userIntention }: GreetingCardProps) => {
  const [isShared, setIsShared] = useState(false);

  const currentHijriDate = '١٠ ذو الحجة ١٤٤٦';
  const currentDate = new Date().toLocaleDateString('ar-SA');

  const shareMessage = encodeURIComponent(
    `🎉 تهنئة عيد أضحى مميزة من أحمد مبارك عبود عباد إليكم! 
    
شاهد رحلتي الروحانية في عيد الأضحى المبارك مع نيتي: "${userIntention}"

كل عام وأنتم بخير! 🕌✨

#عيد_الأضحى #رحلة_روحانية`
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

  console.log('Greeting card - User:', userName, 'Intention:', userIntention);

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
              أخي الكريم "{userName}"، لقد رافقتني نيتي المباركة في هذه الرحلة الروحانية
            </p>
            <div className="bg-white/60 p-4 rounded-lg mb-4">
              <p className="text-lg font-quran text-islamic-olive arabic">
                نيتي: "{userIntention}"
              </p>
            </div>
            
            {/* Islamic ornamental design */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                {/* Central Islamic pattern */}
                <div className="w-20 h-20 bg-gradient-to-br from-islamic-gold to-islamic-gold-light rounded-full border-4 border-white shadow-xl flex items-center justify-center relative">
                  {/* Inner geometric pattern */}
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Decorative dots around */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-islamic-olive rounded-full"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-islamic-olive rounded-full"></div>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-islamic-olive rounded-full"></div>
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-islamic-olive rounded-full"></div>
                </div>
                
                {/* Corner ornaments */}
                <div className="absolute -top-3 -left-3 text-islamic-gold text-xl">✦</div>
                <div className="absolute -top-3 -right-3 text-islamic-gold text-xl">✦</div>
                <div className="absolute -bottom-3 -left-3 text-islamic-gold text-xl">✦</div>
                <div className="absolute -bottom-3 -right-3 text-islamic-gold text-xl">✦</div>
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

          {/* Share buttons with updated icons */}
          <div className="space-y-4">
            <p className="text-islamic-olive font-bold arabic mb-4">
              شارك التهنئة مع الأحباب
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={shareOnWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center justify-center arabic"
              >
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                شارك على واتساب
              </Button>
              
              <Button
                onClick={shareOnTwitter}
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full flex items-center justify-center arabic"
              >
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                شارك على X
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
