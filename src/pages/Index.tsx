
import { useState } from 'react';
import { NameInput } from '@/components/NameInput';
import { GreetingCard } from '@/components/GreetingCard';

const Index = () => {
  const [userName, setUserName] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setShowCard(true);
  };

  const goBack = () => {
    setShowCard(false);
    setUserName('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/10">
      {!showCard ? (
        <NameInput onSubmit={handleNameSubmit} />
      ) : (
        <GreetingCard userName={userName} onBack={goBack} />
      )}
    </div>
  );
};

export default Index;
