
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
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/10 flex items-center justify-center p-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-islamic-gold rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-islamic-olive rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-islamic-gold-light rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <Card className="w-full max-w-4xl bg-white/95 backdrop-blur-lg shadow-2xl overflow-hidden border-2 border-islamic-gold/30 rounded-3xl relative z-10 animate-fade-in-up">
        {/* Enhanced header with Ahmed's signature */}
        <div className="relative bg-gradient-to-r from-islamic-gold via-islamic-gold-light to-islamic-gold p-8 text-center overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-8 w-8 h-8 border border-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-8 py-4 mb-6 border-2 border-white/40">
              <p className="text-white font-quran text-xl arabic font-bold">
                هدية من أحمد مبارك عبود عباد
              </p>
            </div>
            
            <h1 className="text-5xl font-quran text-white mb-4 arabic drop-shadow-lg">
              عيد أضحى مبارك
            </h1>
            <p className="text-white/90 english font-english text-xl font-semibold">
              Eid Al-Adha Mubarak
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center mt-6">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="w-24 h-1 bg-white/30 mx-4"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced main content */}
        <div className="p-10 text-center space-y-8">
          {/* Enhanced Islamic symbols */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center space-x-6">
              <div className="text-5xl animate-float">🌙</div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-islamic-gold to-transparent"></div>
              <div className="text-5xl animate-float" style={{animationDelay: '1s'}}>☪️</div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-islamic-gold to-transparent"></div>
              <div className="text-5xl animate-float" style={{animationDelay: '2s'}}>🕌</div>
            </div>
          </div>

          {/* Enhanced personalized message */}
          <div className="bg-gradient-to-br from-islamic-cream/60 to-islamic-gold/20 p-8 rounded-2xl border-2 border-islamic-gold/30 relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-islamic-gold/30"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-islamic-gold/30"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-islamic-gold/30"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-islamic-gold/30"></div>

            <h2 className="text-3xl font-quran text-islamic-olive mb-6 arabic">
              تمت رحلتي الروحانية بنجاح
            </h2>
            
            <p className="text-xl text-islamic-olive-dark mb-6 arabic leading-relaxed">
              أخي الكريم "{userName}"، لقد رافقتني نيتي المباركة في هذه الرحلة الروحانية المميزة
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-islamic-gold/20 relative">
              <div className="absolute top-2 left-2 text-2xl text-islamic-gold/30">❝</div>
              <div className="absolute bottom-2 right-2 text-2xl text-islamic-gold/30">❞</div>
              <p className="text-lg font-quran text-islamic-olive arabic leading-relaxed relative z-10">
                نيتي: "{userIntention}"
              </p>
            </div>
            
            {/* Enhanced ornamental design */}
            <div className="flex justify-center mt-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-islamic-gold to-islamic-gold-dark rounded-full border-4 border-white shadow-2xl flex items-center justify-center relative animate-pulse-glow">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-islamic-olive rounded-full"></div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-islamic-olive rounded-full"></div>
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-islamic-olive rounded-full"></div>
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-islamic-olive rounded-full"></div>
                </div>
                
                {/* Corner ornaments with animation */}
                <div className="absolute -top-4 -left-4 text-islamic-gold text-2xl animate-float">✦</div>
                <div className="absolute -top-4 -right-4 text-islamic-gold text-2xl animate-float" style={{animationDelay: '0.5s'}}>✦</div>
                <div className="absolute -bottom-4 -left-4 text-islamic-gold text-2xl animate-float" style={{animationDelay: '1s'}}>✦</div>
                <div className="absolute -bottom-4 -right-4 text-islamic-gold text-2xl animate-float" style={{animationDelay: '1.5s'}}>✦</div>
              </div>
            </div>
          </div>

          {/* Enhanced Quranic verse */}
          <div className="bg-gradient-to-r from-white via-islamic-cream/20 to-white p-8 rounded-2xl border-2 border-islamic-gold/20 relative">
            <div className="absolute top-4 left-4 text-3xl text-islamic-gold/20">📖</div>
            <p className="text-2xl font-quran text-islamic-olive leading-relaxed quran-text mb-4">
              "لِّيَشْهَدُوا مَنَافِعَ لَهُمْ وَيَذْكُرُوا اسْمَ اللَّهِ فِي أَيَّامٍ مَّعْلُومَاتٍ"
            </p>
            <p className="text-islamic-olive-light arabic font-medium">
              سورة الحج: آية ٢٨
            </p>
          </div>

          {/* Enhanced date information */}
          <div className="flex justify-between items-center text-islamic-olive-light bg-islamic-cream/30 p-4 rounded-xl">
            <div className="arabic text-center">
              <p className="font-bold">التاريخ الهجري</p>
              <p>{currentHijriDate}</p>
            </div>
            <div className="w-px h-12 bg-islamic-gold/30"></div>
            <div className="english font-english text-center">
              <p className="font-bold">Date</p>
              <p>{currentDate}</p>
            </div>
          </div>

          {/* Enhanced closing blessing */}
          <div className="text-center bg-gradient-to-r from-islamic-olive/5 to-islamic-gold/5 p-6 rounded-2xl">
            <p className="text-3xl font-quran text-islamic-olive arabic mb-3">
              تقبل الله منا ومنكم صالح الأعمال
            </p>
            <p className="text-lg text-islamic-olive-light english font-english">
              May Allah accept our good deeds
            </p>
          </div>

          {/* Enhanced share buttons */}
          <div className="space-y-6">
            <p className="text-islamic-olive font-bold arabic mb-6 text-xl">
              شارك التهنئة مع الأحباب
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={shareOnWhatsApp}
                className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full flex items-center justify-center arabic font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                شارك على واتساب
              </Button>
              
              <Button
                onClick={shareOnTwitter}
                className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full flex items-center justify-center arabic font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                شارك على X
              </Button>
            </div>

            {isShared && (
              <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-300 rounded-2xl animate-fade-in-up">
                <p className="text-green-700 font-bold arabic text-lg flex items-center justify-center">
                  <span className="text-2xl ml-3">🎉</span>
                  تم مشاركة التهنئة بنجاح! جزاك الله خيراً
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced footer */}
        <div className="bg-gradient-to-r from-islamic-gold/10 via-islamic-cream/20 to-islamic-gold/10 p-6 text-center border-t-2 border-islamic-gold/20">
          <p className="text-islamic-olive-light arabic font-medium">
            من القلب إلى القلب، بمناسبة عيد الأضحى المبارك
          </p>
          <div className="flex justify-center items-center mt-3 space-x-4">
            <span className="text-islamic-gold">✨</span>
            <span className="text-islamic-olive">•</span>
            <span className="text-islamic-gold">✨</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
