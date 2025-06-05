
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
    description: 'مكان المبيت أيام التشريق',
    icon: '🏕️',
    verse: 'وَاذْكُرُوا اللَّهَ فِي أَيَّامٍ مَّعْدُودَاتٍ',
    verseRef: 'البقرة: 203'
  },
  {
    id: 'arafat',
    nameAr: 'عرفات',
    nameEn: 'Arafat',
    description: 'جبل الرحمة والوقوف بعرفة',
    icon: '🏔️',
    verse: 'فَإِذَا أَفَضْتُم مِّنْ عَرَفَاتٍ',
    verseRef: 'البقرة: 198'
  },
  {
    id: 'jamarat',
    nameAr: 'الجمرات',
    nameEn: 'Jamarat',
    description: 'رمي الجمرات والتحرر من الشيطان',
    icon: '🪨',
    verse: 'وَاتَّبِعْ مِلَّةَ إِبْرَاهِيمَ حَنِيفًا',
    verseRef: 'النحل: 123'
  },
  {
    id: 'sacrifice',
    nameAr: 'الذبح',
    nameEn: 'Sacrifice',
    description: 'تقديم الأضحية تقرباً إلى الله',
    icon: '🕌',
    verse: 'لِّيَشْهَدُوا مَنَافِعَ لَهُمْ',
    verseRef: 'الحج: 28'
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
    <div className="min-h-screen bg-gradient-to-b from-islamic-cream to-islamic-olive/10 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-4">
            {journeySteps.map((step, index) => (
              <div
                key={step.id}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${
                  index <= currentStepIndex
                    ? 'bg-islamic-gold text-white shadow-lg'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step.icon}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-islamic-olive font-bold arabic">
              {currentStepIndex + 1} من {journeySteps.length}: الرحلة مع {sheepName}
            </p>
          </div>
        </div>

        {/* Current step card */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm border-islamic-gold border-2 shadow-2xl mb-8">
          <div className="text-center">
            {/* Step icon and title */}
            <div className="text-6xl mb-4">{currentStep.icon}</div>
            <h2 className="text-4xl font-quran text-islamic-olive mb-2 arabic">
              {currentStep.nameAr}
            </h2>
            <p className="text-xl text-islamic-olive-light mb-6 english font-english">
              {currentStep.nameEn}
            </p>
            
            {/* Description */}
            <p className="text-lg text-islamic-olive-dark mb-8 arabic">
              {currentStep.description}
            </p>

            {/* Quran verse */}
            <div className="bg-islamic-cream/50 p-6 rounded-lg mb-8 border border-islamic-gold/30">
              <p className="text-2xl font-quran text-islamic-olive leading-relaxed quran-text mb-3">
                "{currentStep.verse}"
              </p>
              <p className="text-sm text-islamic-olive-light arabic">
                {currentStep.verseRef}
              </p>
            </div>

            {/* Sheep companion */}
            <div className="flex justify-center items-center mb-8">
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full border-4 border-islamic-gold shadow-lg mx-auto mb-2 relative float-animation"
                  style={{ backgroundColor: sheepColor }}
                >
                  {/* Simple sheep face */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full"></div>
                </div>
                <p className="text-islamic-olive font-bold arabic">{sheepName}</p>
              </div>
            </div>

            {/* Continue button */}
            <Button
              onClick={nextJourneyStep}
              className="bg-islamic-gold hover:bg-islamic-gold-dark text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg arabic"
            >
              {currentStepIndex < journeySteps.length - 1 ? 'المرحلة التالية' : 'إنهاء الرحلة'}
              <span className="mr-3">
                {currentStepIndex < journeySteps.length - 1 ? '➡️' : '🎉'}
              </span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
