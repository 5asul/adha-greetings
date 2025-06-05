
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface NameInputProps {
  onSubmit: (name: string) => void;
}

export const NameInput = ({ onSubmit }: NameInputProps) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-lg shadow-2xl border-2 border-islamic-gold/30 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-islamic-gold via-islamic-gold-light to-islamic-gold p-6 text-center">
          <div className="text-4xl mb-3">🌙</div>
          <h1 className="text-2xl font-quran text-white mb-2 arabic">
            عيد أضحى مبارك
          </h1>
          <p className="text-white/90 english font-english text-sm">
            Eid Al-Adha Mubarak
          </p>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <div className="mb-6">
            <h2 className="text-xl font-quran text-islamic-olive mb-3 arabic">
              تهنئة من أحمد مبارك عبود عباد
            </h2>
            <p className="text-islamic-olive-dark arabic text-sm leading-relaxed">
              أدخل اسمك لتستقبل تهنئة شخصية بمناسبة عيد الأضحى المبارك
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="اكتب اسمك هنا..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-center arabic border-islamic-gold/30 focus:border-islamic-gold"
                dir="rtl"
              />
            </div>
            
            <Button
              type="submit"
              disabled={!name.trim()}
              className="w-full bg-islamic-gold hover:bg-islamic-gold-dark text-white py-3 rounded-xl font-bold arabic text-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              استقبل التهنئة
            </Button>
          </form>

          {/* Decorative elements */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <div className="text-2xl animate-float">🕌</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-islamic-gold to-transparent"></div>
            <div className="text-2xl animate-float" style={{animationDelay: '1s'}}>☪️</div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-islamic-cream/30 p-4 text-center">
          <p className="text-islamic-olive-light arabic text-xs">
            بطاقة تهنئة مخصصة لعيد الأضحى المبارك
          </p>
        </div>
      </Card>
    </div>
  );
};
