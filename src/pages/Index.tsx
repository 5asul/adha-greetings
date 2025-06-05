
import { useState, useEffect } from 'react';
import { LandingScreen } from '@/components/LandingScreen';
import { SpiritualPreferences } from '@/components/SpiritualPreferences';
import { JourneyScreen } from '@/components/JourneyScreen';
import { GreetingCard } from '@/components/GreetingCard';

export type JourneyStep = 'landing' | 'preferences' | 'journey' | 'greeting';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<JourneyStep>('landing');
  const [userName, setUserName] = useState('');
  const [userIntention, setUserIntention] = useState('');
  const [userSupplication, setUserSupplication] = useState('');

  useEffect(() => {
    // تحميل البيانات المحفوظة من localStorage
    const savedUserName = localStorage.getItem('userName');
    const savedIntention = localStorage.getItem('userIntention');
    const savedSupplication = localStorage.getItem('userSupplication');
    const savedProgress = localStorage.getItem('journeyProgress');
    
    if (savedUserName) setUserName(savedUserName);
    if (savedIntention) setUserIntention(savedIntention);
    if (savedSupplication) setUserSupplication(savedSupplication);
    
    if (savedProgress) {
      setCurrentStep(savedProgress as JourneyStep);
    }
  }, []);

  const nextStep = () => {
    const steps: JourneyStep[] = ['landing', 'preferences', 'journey', 'greeting'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      const nextStepValue = steps[currentIndex + 1];
      setCurrentStep(nextStepValue);
      localStorage.setItem('journeyProgress', nextStepValue);
    }
  };

  const saveUserPreferences = (name: string, intention: string, supplication: string) => {
    setUserName(name);
    setUserIntention(intention);
    setUserSupplication(supplication);
    localStorage.setItem('userName', name);
    localStorage.setItem('userIntention', intention);
    localStorage.setItem('userSupplication', supplication);
  };

  console.log('Current step:', currentStep);
  console.log('User data:', { userName, userIntention, userSupplication });

  return (
    <div className="min-h-screen bg-islamic-cream">
      {currentStep === 'landing' && (
        <LandingScreen onNext={nextStep} />
      )}
      
      {currentStep === 'preferences' && (
        <SpiritualPreferences 
          onNext={nextStep}
          onSavePreferences={saveUserPreferences}
          initialUserName={userName}
          initialIntention={userIntention}
          initialSupplication={userSupplication}
        />
      )}
      
      {currentStep === 'journey' && (
        <JourneyScreen 
          onNext={nextStep}
          sheepName={userName}
          sheepColor="#F9A825"
        />
      )}
      
      {currentStep === 'greeting' && (
        <GreetingCard 
          userName={userName}
          userIntention={userIntention}
        />
      )}
    </div>
  );
};

export default Index;
