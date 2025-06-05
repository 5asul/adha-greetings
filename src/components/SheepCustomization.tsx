
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface SheepCustomizationProps {
  onNext: () => void;
  onSaveSheep: (name: string, color: string) => void;
  initialSheepName: string;
  initialSheepColor: string;
}

const sheepColors = [
  { name: 'أبيض', color: '#FFFFFF', label: 'White' },
  { name: 'بني', color: '#8B4513', label: 'Brown' },
  { name: 'أسود', color: '#2C2C2C', label: 'Black' },
  { name: 'رمادي', color: '#696969', label: 'Gray' }
];

export const SheepCustomization = ({ 
  onNext, 
  onSaveSheep, 
  initialSheepName, 
  initialSheepColor 
}: SheepCustomizationProps) => {
  const [sheepName, setSheepName] = useState(initialSheepName);
  const [selectedColor, setSelectedColor] = useState(initialSheepColor);

  const handleNext = () => {
    if (sheepName.trim()) {
      onSaveSheep(sheepName.trim(), selectedColor);
      onNext();
    }
  };

  console.log('Sheep customization - Name:', sheepName, 'Color:', selectedColor);

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream to-islamic-cream-dark flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl p-8 bg-white/90 backdrop-blur-sm border-islamic-gold border-2 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-quran text-islamic-olive mb-4 arabic">
            تخصيص أضحيتك
          </h2>
          <p className="text-lg text-islamic-olive-dark arabic">
            اختر شكل ولون أضحيتك وأعطها اسماً مميزاً
          </p>
        </div>

        {/* 3D-like Sheep Display */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div 
              className="w-32 h-32 rounded-full border-4 border-islamic-gold shadow-lg transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: selectedColor }}
            >
              {/* Sheep face */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {/* Eyes */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-black rounded-full"></div>
                <div className="absolute top-8 right-8 w-3 h-3 bg-black rounded-full"></div>
                {/* Nose */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>
                {/* Mouth */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
              </div>
            </div>
            {/* Ears */}
            <div 
              className="absolute -top-2 left-4 w-6 h-8 rounded-full border-2 border-islamic-gold"
              style={{ backgroundColor: selectedColor }}
            ></div>
            <div 
              className="absolute -top-2 right-4 w-6 h-8 rounded-full border-2 border-islamic-gold"
              style={{ backgroundColor: selectedColor }}
            ></div>
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-islamic-olive mb-4 text-center arabic">
            اختر اللون
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sheepColors.map((colorOption) => (
              <button
                key={colorOption.color}
                onClick={() => setSelectedColor(colorOption.color)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedColor === colorOption.color 
                    ? 'border-islamic-gold bg-islamic-gold/20' 
                    : 'border-gray-300 hover:border-islamic-gold/50'
                }`}
              >
                <div 
                  className="w-8 h-8 rounded-full mx-auto mb-2 border border-gray-400"
                  style={{ backgroundColor: colorOption.color }}
                ></div>
                <p className="text-sm text-islamic-olive arabic">{colorOption.name}</p>
                <p className="text-xs text-islamic-olive-light english">{colorOption.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Name Input */}
        <div className="mb-8">
          <label className="block text-xl font-bold text-islamic-olive mb-4 text-center arabic">
            ماذا تسمي أضحيتك؟
          </label>
          <Input
            type="text"
            value={sheepName}
            onChange={(e) => setSheepName(e.target.value)}
            placeholder="أدخل اسم أضحيتك..."
            className="text-center text-lg p-4 border-islamic-gold border-2 rounded-lg arabic"
            dir="rtl"
          />
        </div>

        {/* Next Button */}
        <div className="text-center">
          <Button
            onClick={handleNext}
            disabled={!sheepName.trim()}
            className="bg-islamic-gold hover:bg-islamic-gold-dark text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg disabled:opacity-50 arabic"
          >
            ابدأ الرحلة مع {sheepName || 'أضحيتك'}
            <span className="mr-3">🐑</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};
