
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
    category: 'دعاء القبول',
    icon: '🤲'
  },
  {
    arabic: 'رب اغفر لي ولوالدي',
    meaning: 'دعاء للوالدين',
    category: 'دعاء الوالدين',
    icon: '💝'
  },
  {
    arabic: 'اللهم بارك لنا فيما رزقتنا',
    meaning: 'دعاء الرزق والبركة',
    category: 'دعاء البركة',
    icon: '🌟'
  },
  {
    arabic: 'اللهم أعني على ذكرك وشكرك وحسن عبادتك',
    meaning: 'دعاء التوفيق في العبادة',
    category: 'دعاء التوفيق',
    icon: '🕌'
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
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-islamic-olive/5 flex items-center justify-center p-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-islamic-gold rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-islamic-olive rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        {/* Header section */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-islamic-gold to-islamic-gold-dark rounded-full mb-6 shadow-xl border-4 border-white/30">
            <span className="text-3xl">🤲</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-quran text-islamic-olive mb-4 arabic">
            التفضيلات الروحانية
          </h2>
          <p className="text-xl text-islamic-olive-dark arabic max-w-2xl mx-auto leading-relaxed">
            شارك نيتك ودعاءك المفضل لهذه الرحلة المباركة ودعنا نخصص لك تجربة فريدة
          </p>
        </div>

        {/* Main content card */}
        <Card className="bg-white/90 backdrop-blur-lg border-2 border-islamic-gold/20 shadow-2xl rounded-3xl overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="p-10">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Personal Information Section */}
              <div className="space-y-8">
                <div className="text-center lg:text-right mb-8">
                  <h3 className="text-2xl font-bold text-islamic-olive arabic mb-2">معلوماتك الشخصية</h3>
                  <p className="text-islamic-olive/70 arabic">أخبرنا عن نفسك ونيتك</p>
                </div>

                <div className="space-y-6">
                  {/* Name input with enhanced design */}
                  <div className="relative">
                    <label className="block text-xl font-bold text-islamic-olive mb-4 arabic flex items-center">
                      <span className="text-2xl ml-3">👤</span>
                      الاسم الكريم
                    </label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="أدخل اسمك الكريم..."
                        className="text-right text-lg p-6 border-2 border-islamic-gold/30 rounded-2xl arabic bg-white/80 backdrop-blur-sm focus:border-islamic-gold focus:ring-4 focus:ring-islamic-gold/20 transition-all duration-300"
                        dir="rtl"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-islamic-gold/50">
                        <span className="text-xl">✨</span>
                      </div>
                    </div>
                  </div>

                  {/* Intention textarea with enhanced design */}
                  <div className="relative">
                    <label className="block text-xl font-bold text-islamic-olive mb-4 arabic flex items-center">
                      <span className="text-2xl ml-3">💭</span>
                      نيتك من هذه الرحلة
                    </label>
                    <div className="relative">
                      <textarea
                        value={intention}
                        onChange={(e) => setIntention(e.target.value)}
                        placeholder="مثال: أسأل الله أن يتقبل مني هذا العمل ويجعله خالصاً لوجهه الكريم، وأن يبارك لي في هذا العيد..."
                        className="w-full text-right text-lg p-6 border-2 border-islamic-gold/30 rounded-2xl arabic bg-white/80 backdrop-blur-sm h-40 resize-none focus:border-islamic-gold focus:ring-4 focus:ring-islamic-gold/20 transition-all duration-300"
                        dir="rtl"
                      />
                      <div className="absolute left-4 bottom-4 text-islamic-gold/50">
                        <span className="text-xl">🌟</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supplication Selection Section */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-islamic-olive arabic mb-2 flex items-center justify-center">
                    <span className="text-3xl ml-3">📿</span>
                    اختر دعاءك المفضل
                  </h3>
                  <p className="text-islamic-olive/70 arabic">اختر الدعاء الذي يرافقك في رحلتك</p>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {supplications.map((supplication, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedSupplication(supplication.arabic)}
                      className={`group relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedSupplication === supplication.arabic
                          ? 'border-islamic-gold bg-gradient-to-br from-islamic-gold/20 to-islamic-gold/10 shadow-xl ring-4 ring-islamic-gold/20' 
                          : 'border-islamic-cream-dark hover:border-islamic-gold/50 bg-white/60 hover:bg-white/80'
                      }`}
                    >
                      <div className="text-center space-y-3">
                        <div className="text-3xl mb-2">{supplication.icon}</div>
                        <p className="text-lg font-quran text-islamic-olive arabic leading-relaxed">
                          {supplication.arabic}
                        </p>
                        <p className="text-sm text-islamic-olive-dark arabic font-semibold">
                          {supplication.meaning}
                        </p>
                        <span className="inline-block px-4 py-2 bg-islamic-gold/20 text-islamic-olive text-xs rounded-full arabic font-medium">
                          {supplication.category}
                        </span>
                      </div>
                      
                      {/* Selection indicator */}
                      {selectedSupplication === supplication.arabic && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-islamic-gold rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center mt-12">
              <Button
                onClick={handleNext}
                disabled={!userName.trim() || !intention.trim() || !selectedSupplication}
                className="group relative bg-gradient-to-r from-islamic-gold to-islamic-gold-dark hover:from-islamic-gold-dark hover:to-islamic-olive text-white px-16 py-6 text-xl font-bold rounded-full shadow-2xl disabled:opacity-50 arabic transform hover:scale-110 transition-all duration-500 border-4 border-white/20"
              >
                <span className="relative z-10 flex items-center">
                  تابع الرحلة مع دعائك
                  <span className="mr-4 text-2xl group-hover:animate-bounce">🤲</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-islamic-olive/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </Card>

        {/* Quranic Verse */}
        <div className="mt-10 p-8 bg-gradient-to-r from-islamic-olive/10 via-islamic-cream/30 to-islamic-olive/10 rounded-2xl border border-islamic-olive/20 text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <p className="text-2xl font-quran text-islamic-olive arabic leading-relaxed mb-4">
            "وَمَن يُعَظِّمْ شَعَائِرَ اللَّهِ فَإِنَّهَا مِن تَقْوَى الْقُلُوبِ"
          </p>
          <p className="text-islamic-olive-dark arabic">
            سورة الحج - آية 32
          </p>
        </div>
      </div>
    </div>
  );
};
