
import { Button } from '@/components/ui/button';

interface LandingScreenProps {
  onNext: () => void;
}

export const LandingScreen = ({ onNext }: LandingScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-islamic-cream-light to-islamic-gold/10 relative overflow-hidden">
      {/* Header with Islamic geometric pattern */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-islamic-olive/20 to-transparent"></div>
      
      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header section */}
        <header className="text-center pt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-islamic-gold/20 rounded-full mb-6 backdrop-blur-sm border border-islamic-gold/30">
              <span className="text-4xl">🕌</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-quran text-islamic-olive mb-4 arabic">
              رحلة عيد الأضحى المبارك
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-islamic-gold to-islamic-olive mx-auto mb-4"></div>
            <p className="text-xl md:text-2xl text-islamic-olive-dark font-semibold arabic">
              أحمد مبارك عبود عباد
            </p>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div className="text-center md:text-right space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-islamic-olive arabic leading-relaxed">
                  كل عام وأنت بخير
                </h2>
                <p className="text-lg md:text-xl text-islamic-olive-dark arabic leading-relaxed">
                  انطلق في رحلة روحانية تفاعلية تأخذك عبر مناسك الحج وتقاليد عيد الأضحى المبارك
                </p>
                <p className="text-base text-islamic-olive/80 english italic">
                  Experience an interactive spiritual journey through Hajj rituals and Eid Al-Adha traditions
                </p>
                
                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-islamic-gold/20">
                    <div className="text-2xl mb-2">📿</div>
                    <p className="text-sm text-islamic-olive arabic font-semibold">تجربة تفاعلية</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-islamic-gold/20">
                    <div className="text-2xl mb-2">🎯</div>
                    <p className="text-sm text-islamic-olive arabic font-semibold">محتوى تعليمي</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-islamic-gold/20">
                    <div className="text-2xl mb-2">🎁</div>
                    <p className="text-sm text-islamic-olive arabic font-semibold">بطاقة مخصصة</p>
                  </div>
                </div>
              </div>

              {/* Visual element */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-islamic-gold/30 to-islamic-olive/30 rounded-full backdrop-blur-sm border-4 border-islamic-gold/40 flex items-center justify-center relative overflow-hidden">
                    {/* Kaaba representation */}
                    <div className="w-32 h-32 bg-islamic-olive rounded-lg shadow-xl relative">
                      <div className="absolute inset-4 border-2 border-islamic-gold rounded"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-islamic-gold rounded-full"></div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-12 left-12 w-6 h-6 bg-islamic-gold/60 rounded-full animate-float"></div>
                    <div className="absolute bottom-16 right-16 w-4 h-4 bg-islamic-olive/60 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-24 right-8 w-8 h-8 bg-islamic-gold/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Call to action */}
        <footer className="text-center pb-16">
          <div className="container mx-auto px-6">
            <Button 
              onClick={onNext}
              className="bg-gradient-to-r from-islamic-gold to-islamic-gold-dark hover:from-islamic-gold-dark hover:to-islamic-gold text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 arabic"
            >
              ابدأ الرحلة الآن
              <span className="mr-3 text-2xl">✨</span>
            </Button>
            
            {/* Islamic symbols */}
            <div className="flex items-center justify-center space-x-6 mt-8 text-islamic-olive/60">
              <span className="text-3xl">☪️</span>
              <div className="w-12 h-0.5 bg-islamic-olive/30"></div>
              <span className="text-3xl">🕌</span>
              <div className="w-12 h-0.5 bg-islamic-olive/30"></div>
              <span className="text-3xl">🌙</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
