
import { useState, useEffect } from 'react';
import { LandingScreen } from '@/components/LandingScreen';
import { SheepCustomization } from '@/components/SheepCustomization';
import { JourneyScreen } from '@/components/JourneyScreen';
import { GreetingCard } from '@/components/GreetingCard';

export type JourneyStep = 'landing' | 'customization' | 'journey' | 'greeting';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<JourneyStep>('landing');
  const [userSheepName, setUserSheepName] = useState('');
  const [sheepColor, setSheepColor] = useState('#FFFFFF');

  useEffect(() => {
    // Load saved progress from localStorage
    const savedSheepName = localStorage.getItem('userSheepName');
    const savedProgress = localStorage.getItem('journeyProgress');
    
    if (savedSheepName) {
      setUserSheepName(savedSheepName);
    }
    
    if (savedProgress) {
      setCurrentStep(savedProgress as JourneyStep);
    }
  }, []);

  const nextStep = () => {
    const steps: JourneyStep[] = ['landing', 'customization', 'journey', 'greeting'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      const nextStepValue = steps[currentIndex + 1];
      setCurrentStep(nextStepValue);
      localStorage.setItem('journeyProgress', nextStepValue);
    }
  };

  const saveSheepData = (name: string, color: string) => {
    setUserSheepName(name);
    setSheepColor(color);
    localStorage.setItem('userSheepName', name);
    localStorage.setItem('sheepColor', color);
  };

  console.log('Current step:', currentStep);
  console.log('Sheep name:', userSheepName);

  return (
    <div className="min-h-screen bg-islamic-cream">
      {currentStep === 'landing' && (
        <LandingScreen onNext={nextStep} />
      )}
      
      {currentStep === 'customization' && (
        <SheepCustomization 
          onNext={nextStep}
          onSaveSheep={saveSheepData}
          initialSheepName={userSheepName}
          initialSheepColor={sheepColor}
        />
      )}
      
      {currentStep === 'journey' && (
        <JourneyScreen 
          onNext={nextStep}
          sheepName={userSheepName}
          sheepColor={sheepColor}
        />
      )}
      
      {currentStep === 'greeting' && (
        <GreetingCard 
          sheepName={userSheepName}
          sheepColor={sheepColor}
        />
      )}
    </div>
  );
};

export default Index;
