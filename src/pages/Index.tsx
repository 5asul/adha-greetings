
import { useState, useEffect } from 'react';
import { NameInput } from '@/components/NameInput';
import { GreetingCard } from '@/components/GreetingCard';

const Index = () => {
  const [userName, setUserName] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [senderName, setSenderName] = useState('');

  useEffect(() => {
    // قراءة اسم المرسل من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const fromParam = urlParams.get('from');
    if (fromParam) {
      setSenderName(decodeURIComponent(fromParam));
    }
  }, []);

  const handleNameSubmit = (name: string) => {
    setUserName(name.trim());
    setShowCard(true);
  };

  const goBack = () => {
    setShowCard(false);
    setUserName('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/10">
      {!showCard ? (
        <NameInput onSubmit={handleNameSubmit} senderName={senderName} />
      ) : (
        <GreetingCard userName={userName} senderName={senderName} onBack={goBack} />
      )}
    </div>
  );
};

export default Index;
