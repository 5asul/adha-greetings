
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface SpiritualPreferencesProps {
  onNext: () => void;
  onSavePreferences: (name: string, intention: string, favoriteSupplication: string) => void;
  initialUserName: string;
  initialIntention: string;
  initialSupplication: string;
}

const supplications = [
  {
    arabic: 'اللهم تقبل منا إنك أنت السميع العليم',
    meaning: 'اللهم تقبل منا عملنا',
    category: 'دعاء القبول'
  },
  {
    arabic: 'رب اغفر لي ولوالدي',
    meaning: 'دعاء للوالدين',
    category: 'دعاء الوالدين'
  },
  {
    arabic: 'اللهم بارك لنا فيما رزقتنا',
    meaning: 'دعاء الرزق والبركة',
    category: 'دعاء البركة'
  },
  {
    arabic: 'اللهم أعني على ذكرك وشكرك وحسن عبادتك',
    meaning: 'دعاء التوفيق في العبادة',
    category: 'دعاء التوفيق'
  }
];

export const SpiritualPreferences = ({ 
  onNext, 
  onSavePreferences, 
  initialUserName,
  initialIntention,
  initialSupplication
}: SpiritualPreferencesProps) => {
  const [userName, setUserName] = useState(initialUserName);
  const [intention, setIntention] = useState(initialIntention);
  const [selectedSupplication, setSelectedSupplication] = useState(initialSupplication);

  const handleNext = () => {
    if (userName.trim() && intention.trim() && selectedSupplication) {
      onSavePreferences(userName.trim(), intention.trim(), selectedSupplication);
      onNext();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream to-islamic-cream-dark flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl p-8 bg-white/95 backdrop-blur-sm border-islamic-gold border-2 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-islamic-gold/20 rounded-full mb-4">
            <span className="text-2xl">🤲</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-quran text-islamic-olive mb-4 arabic">
            التفضيلات الروحانية
          </h2>
          <p className="text-lg text-islamic-olive-dark arabic">
            شارك نيتك ودعاءك المفضل لهذه الرحلة المباركة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <div>
              <label className="block text-xl font-bold text-islamic-olive mb-4 arabic">
                الاسم الكريم
              </label>
              <Input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="أدخل اسمك الكريم..."
                className="text-right text-lg p-4 border-islamic-gold border-2 rounded-lg arabic bg-white/80"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-xl font-bold text-islamic-olive mb-4 arabic">
                نيتك من هذه الرحلة
              </label>
              <textarea
                value={intention}
                onChange={(e) => setIntention(e.target.value)}
                placeholder="مثال: أسأل الله أن يتقبل مني هذا العمل ويجعله خالصاً لوجهه الكريم..."
                className="w-full text-right text-lg p-4 border-islamic-gold border-2 rounded-lg arabic bg-white/80 h-32 resize-none"
                dir="rtl"
              />
            </div>
          </div>

          {/* Supplication Selection */}
          <div>
            <h3 className="text-xl font-bold text-islamic-olive mb-6 text-center arabic">
              اختر دعاءك المفضل
            </h3>
            <div className="space-y-4">
              {supplications.map((supplication, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSupplication(supplication.arabic)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedSupplication === supplication.arabic
                      ? 'border-islamic-gold bg-islamic-gold/10 shadow-lg' 
                      : 'border-gray-300 hover:border-islamic-gold/50 bg-white/60'
                  }`}
                >
                  <div className="text-center">
                    <p className="text-lg font-quran text-islamic-olive mb-2 arabic leading-relaxed">
                      {supplication.arabic}
                    </p>
                    <p className="text-sm text-islamic-olive-dark arabic font-semibold">
                      {supplication.meaning}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-islamic-gold/20 text-islamic-olive text-xs rounded-full arabic">
                      {supplication.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <Button
            onClick={handleNext}
            disabled={!userName.trim() || !intention.trim() || !selectedSupplication}
            className="bg-islamic-gold hover:bg-islamic-gold-dark text-white px-12 py-4 text-lg font-bold rounded-full shadow-lg disabled:opacity-50 arabic transform hover:scale-105 transition-all duration-300"
          >
            تابع الرحلة مع دعائك
            <span className="mr-3">🤲</span>
          </Button>
        </div>

        {/* Quranic Verse */}
        <div className="mt-8 p-6 bg-islamic-olive/10 rounded-lg border border-islamic-olive/20">
          <p className="text-center text-lg font-quran text-islamic-olive arabic leading-relaxed">
            "وَمَن يُعَظِّمْ شَعَائِرَ اللَّهِ فَإِنَّهَا مِن تَقْوَى الْقُلُوبِ"
          </p>
          <p className="text-center text-sm text-islamic-olive-dark arabic mt-2">
            سورة الحج - آية 32
          </p>
        </div>
      </Card>
    </div>
  );
};
