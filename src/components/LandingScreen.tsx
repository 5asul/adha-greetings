
import { Button } from '@/components/ui/button';

interface LandingScreenProps {
  onNext: () => void;
}

export const LandingScreen = ({ onNext }: LandingScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-islamic-gold rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-islamic-olive rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-islamic-gold-light rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 opacity-5 islamic-pattern"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
        {/* Header section with enhanced design */}
        <div className="text-center mb-12 animate-fade-in-up">
          {/* Enhanced mosque icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-islamic-gold to-islamic-gold-dark rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm animate-pulse-glow">
              <span className="text-6xl">🕌</span>
            </div>
            {/* Decorative elements around the icon */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-islamic-olive/20 rounded-full"></div>
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-islamic-gold/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-islamic-gold/30 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-islamic-olive/20 rounded-full"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-quran text-islamic-olive mb-6 arabic leading-tight">
            رحلة عيد الأضحى المبارك
          </h1>
          
          {/* Enhanced decorative line */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-islamic-gold/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-islamic-gold rounded-full"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-islamic-gold to-transparent mx-4"></div>
            <div className="w-8 h-8 bg-islamic-olive/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-islamic-olive rounded-full"></div>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-islamic-olive-dark font-bold arabic mb-4">
            أحمد مبارك عبود عباد
          </p>
          <p className="text-lg text-islamic-olive/80 english italic">
            Ahmed Mubarak Aboud Abbad
          </p>
        </div>

        {/* Main content card */}
        <div className="max-w-4xl w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-islamic-gold/20 p-8 mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-olive arabic">
              كل عام وأنتم بخير
            </h2>
            
            <p className="text-xl text-islamic-olive-dark arabic leading-relaxed max-w-2xl mx-auto">
              انطلق في رحلة روحانية تفاعلية تأخذك عبر مناسك الحج وتقاليد عيد الأضحى المبارك مع تجربة شخصية فريدة
            </p>
            
            <p className="text-base text-islamic-olive/70 english italic">
              Experience a personalized interactive spiritual journey through Hajj rituals and Eid Al-Adha traditions
            </p>
            
            {/* Enhanced features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-gradient-to-br from-islamic-gold/10 to-islamic-gold/5 rounded-2xl p-6 border border-islamic-gold/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">📿</div>
                <h3 className="text-lg font-bold text-islamic-olive arabic mb-2">تجربة تفاعلية</h3>
                <p className="text-sm text-islamic-olive/80 arabic">رحلة شخصية مخصصة</p>
              </div>
              
              <div className="bg-gradient-to-br from-islamic-olive/10 to-islamic-olive/5 rounded-2xl p-6 border border-islamic-olive/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-islamic-olive arabic mb-2">محتوى تعليمي</h3>
                <p className="text-sm text-islamic-olive/80 arabic">معلومات دينية أصيلة</p>
              </div>
              
              <div className="bg-gradient-to-br from-islamic-cream/50 to-islamic-cream/30 rounded-2xl p-6 border border-islamic-gold/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-lg font-bold text-islamic-olive arabic mb-2">بطاقة مخصصة</h3>
                <p className="text-sm text-islamic-olive/80 arabic">تهنئة شخصية للمشاركة</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced call to action */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button 
            onClick={onNext}
            className="group relative bg-gradient-to-r from-islamic-gold via-islamic-gold-light to-islamic-gold hover:from-islamic-gold-dark hover:to-islamic-gold-light text-white px-16 py-8 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 arabic border-4 border-white/30"
          >
            <span className="relative z-10 flex items-center">
              ابدأ الرحلة الآن
              <span className="mr-4 text-3xl group-hover:animate-bounce">✨</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-islamic-olive/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          {/* Islamic symbols with enhanced animation */}
          <div className="flex items-center justify-center space-x-8 mt-10 text-islamic-olive/40">
            <span className="text-4xl animate-float">☪️</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-islamic-olive/30 to-transparent"></div>
            <span className="text-4xl animate-float" style={{animationDelay: '1s'}}>🕌</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-islamic-olive/30 to-transparent"></div>
            <span className="text-4xl animate-float" style={{animationDelay: '2s'}}>🌙</span>
          </div>
        </div>
      </div>
    </div>
  );
};
