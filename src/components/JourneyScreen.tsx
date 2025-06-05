
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface JourneyScreenProps {
  onNext: () => void;
  sheepName: string;
  sheepColor: string;
}

const journeySteps = [
  {
    id: 'mina',
    nameAr: 'منى',
    nameEn: 'Mina',
    description: 'مكان المبيت أيام التشريق والتأمل في رحمة الله',
    icon: '🏕️',
    verse: 'وَاذْكُرُوا اللَّهَ فِي أَيَّامٍ مَّعْدُودَاتٍ',
    verseRef: 'البقرة: 203',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50'
  },
  {
    id: 'arafat',
    nameAr: 'عرفات',
    nameEn: 'Arafat',
    description: 'جبل الرحمة والوقوف بعرفة، مكان الدعاء والتوبة',
    icon: '🏔️',
    verse: 'فَإِذَا أَفَضْتُم مِّنْ عَرَفَاتٍ فَاذْكُرُوا اللَّهَ',
    verseRef: 'البقرة: 198',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50'
  },
  {
    id: 'jamarat',
    nameAr: 'الجمرات',
    nameEn: 'Jamarat',
    description: 'رمي الجمرات والتحرر من الشيطان، رمز للتطهر',
    icon: '🪨',
    verse: 'وَاتَّبِعْ مِلَّةَ إِبْرَاهِيمَ حَنِيفًا',
    verseRef: 'النحل: 123',
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'sacrifice',
    nameAr: 'الذبح',
    nameEn: 'Sacrifice',
    description: 'تقديم الأضحية تقرباً إلى الله، تجديد للعهد',
    icon: '🕌',
    verse: 'لِّيَشْهَدُوا مَنَافِعَ لَهُمْ وَيَذْكُرُوا اسْمَ اللَّهِ',
    verseRef: 'الحج: 28',
    color: 'from-rose-400 to-pink-500',
    bgColor: 'bg-rose-50'
  }
];

export const JourneyScreen = ({ onNext, sheepName, sheepColor }: JourneyScreenProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = journeySteps[currentStepIndex];

  const nextJourneyStep = () => {
    if (currentStepIndex < journeySteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      onNext();
    }
  };

  console.log('Journey screen - Current step:', currentStep.nameAr, 'Sheep:', sheepName);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-islamic-cream via-white to-islamic-olive/5 flex items-center justify-center p-6 transition-all duration-1000`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-islamic-gold rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-islamic-olive rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-islamic-gold-light rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Enhanced Progress indicator */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex justify-center items-center space-x-4 mb-8">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-500 ${
                    index <= currentStepIndex
                      ? `bg-gradient-to-br ${step.color} text-white shadow-2xl scale-110 ring-4 ring-white/30`
                      : 'bg-gray-200 text-gray-500 scale-100'
                  }`}
                >
                  {step.icon}
                  {index <= currentStepIndex && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  )}
                </div>
                {index < journeySteps.length - 1 && (
                  <div className={`w-12 h-1 mx-2 rounded-full transition-all duration-500 ${
                    index < currentStepIndex ? 'bg-islamic-gold' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-2xl text-islamic-olive font-bold arabic mb-2">
              المرحلة {currentStepIndex + 1} من {journeySteps.length}
            </p>
            <p className="text-lg text-islamic-olive/70 arabic">
              الرحلة مع {sheepName}
            </p>
          </div>
        </div>

        {/* Enhanced Current step card */}
        <Card className={`relative overflow-hidden bg-white/95 backdrop-blur-lg border-2 border-islamic-gold/30 shadow-2xl rounded-3xl mb-8 animate-fade-in-up ${currentStep.bgColor}/20`} style={{animationDelay: '0.2s'}}>
          {/* Gradient overlay */}
          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${currentStep.color}`}></div>
          
          <div className="p-12">
            <div className="text-center space-y-8">
              {/* Enhanced step icon and title */}
              <div className="relative">
                <div className={`inline-flex w-24 h-24 rounded-full bg-gradient-to-br ${currentStep.color} text-white text-6xl items-center justify-center shadow-2xl mb-6 animate-pulse-glow`}>
                  {currentStep.icon}
                </div>
                
                <h2 className="text-5xl font-quran text-islamic-olive mb-4 arabic">
                  {currentStep.nameAr}
                </h2>
                <p className="text-2xl text-islamic-olive-light english font-english mb-6">
                  {currentStep.nameEn}
                </p>
              </div>
              
              {/* Enhanced description */}
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-islamic-olive-dark arabic leading-relaxed mb-8">
                  {currentStep.description}
                </p>
              </div>

              {/* Enhanced Quran verse */}
              <div className="relative bg-gradient-to-br from-islamic-cream/50 to-islamic-gold/10 p-8 rounded-2xl border-2 border-islamic-gold/30 mb-8">
                <div className="absolute top-4 left-4 text-4xl text-islamic-gold/30">❝</div>
                <div className="absolute bottom-4 right-4 text-4xl text-islamic-gold/30">❞</div>
                
                <p className="text-2xl font-quran text-islamic-olive leading-relaxed quran-text mb-4 relative z-10">
                  "{currentStep.verse}"
                </p>
                <p className="text-islamic-olive-light arabic font-medium">
                  {currentStep.verseRef}
                </p>
              </div>

              {/* Enhanced Sheep companion */}
              <div className="flex justify-center items-center mb-8">
                <div className="relative group">
                  <div className="text-center">
                    <div 
                      className="relative w-28 h-28 rounded-full border-4 border-islamic-gold shadow-2xl mx-auto mb-4 float-animation group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: sheepColor }}
                    >
                      {/* Enhanced sheep face */}
                      <div className="absolute top-6 left-6 w-3 h-3 bg-black rounded-full"></div>
                      <div className="absolute top-6 right-6 w-3 h-3 bg-black rounded-full"></div>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>
                      
                      {/* Sparkle effects */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-islamic-gold rounded-full animate-ping"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-islamic-olive rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    </div>
                    <p className="text-xl text-islamic-olive font-bold arabic bg-white/80 px-4 py-2 rounded-full shadow-lg">
                      {sheepName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Continue button */}
              <Button
                onClick={nextJourneyStep}
                className={`group relative bg-gradient-to-r ${currentStep.color} hover:scale-110 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl arabic transform transition-all duration-500 border-4 border-white/20`}
              >
                <span className="relative z-10 flex items-center">
                  {currentStepIndex < journeySteps.length - 1 ? 'المرحلة التالية' : 'إنهاء الرحلة'}
                  <span className="mr-4 text-2xl group-hover:animate-bounce">
                    {currentStepIndex < journeySteps.length - 1 ? '➡️' : '🎉'}
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </Card>

        {/* Step indicator dots */}
        <div className="flex justify-center space-x-2 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          {journeySteps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentStepIndex ? 'bg-islamic-gold' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
