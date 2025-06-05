
import { Button } from '@/components/ui/button';

interface LandingScreenProps {
  onNext: () => void;
}

export const LandingScreen = ({ onNext }: LandingScreenProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden desert-bg flex items-center justify-center">
      {/* Floating Islamic geometric patterns */}
      <div className="absolute inset-0 islamic-pattern opacity-30"></div>
      
      {/* Floating lanterns */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-islamic-gold rounded-full float-animation opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-islamic-gold rounded-full float-animation opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-10 h-10 bg-islamic-gold rounded-full float-animation opacity-50" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main greeting in Arabic */}
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-quran text-islamic-olive mb-6 leading-tight arabic">
            أحمد مبارك
          </h1>
          <p className="text-2xl md:text-3xl text-islamic-gold font-bold mb-4 arabic">
            كل عام وأنت بخير!
          </p>
          <p className="text-xl md:text-2xl text-islamic-olive-dark mb-8 arabic" style={{animationDelay: '0.3s'}}>
            ابدأ رحلتك الروحانية في عيد الأضحى المبارك
          </p>
        </div>

        {/* English subtitle */}
        <div className="animate-fade-in-up mb-12" style={{animationDelay: '0.6s'}}>
          <p className="text-lg md:text-xl text-islamic-olive english font-english opacity-80">
            Begin your spiritual journey through Eid Al-Adha traditions
          </p>
        </div>

        {/* Call to action button */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <Button 
            onClick={onNext}
            className="bg-islamic-gold hover:bg-islamic-gold-dark text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl animate-pulse-glow arabic"
          >
            اهبط إلى منى
            <span className="mr-3 text-2xl">🕌</span>
          </Button>
        </div>

        {/* Decorative Islamic elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <div className="flex items-center space-x-4 text-islamic-gold text-3xl">
            <span>☪️</span>
            <span className="text-islamic-olive">•</span>
            <span>🕌</span>
            <span className="text-islamic-olive">•</span>
            <span>🌙</span>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-islamic-cream opacity-80">
          <path d="M0,40 C120,20 240,60 360,40 C480,20 600,60 720,40 C840,20 960,60 1080,40 C1140,30 1170,35 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>
  );
};
