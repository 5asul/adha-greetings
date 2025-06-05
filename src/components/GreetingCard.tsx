
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Download, Share2, Gift, Copy } from 'lucide-react';
import html2canvas from 'html2canvas';

interface GreetingCardProps {
  userName: string;
  onBack: () => void;
}

export const GreetingCard = ({ userName, onBack }: GreetingCardProps) => {
  const [isShared, setIsShared] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentHijriDate = '١٠ ذو الحجة ١٤٤٦';
  const currentDate = new Date().toLocaleDateString('ar-SA');
  const appUrl = 'https://adha-journey-greetings.vercel.app/';

  const shareMessage = encodeURIComponent(
    `🎉 تهنئة عيد أضحى مبارك من ${userName}

أهديكم أجمل التهاني بمناسبة عيد الأضحى المبارك

🌙 تقبل الله منا ومنكم صالح الأعمال 🕌

كل عام وأنتم بخير
${userName}

#عيد_الأضحى #تهنئة`
  );

  const giftMessage = encodeURIComponent(
    `🎁 هدية لك من ${userName}

أرسل تهنئة عيد الأضحى المبارك لأحبائك:
${appUrl}

بطاقة تهنئة شخصية مجانية 🌙

#عيد_الأضحى #هدية`
  );

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${shareMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsShared(true);
  };

  const shareOnX = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareMessage}`;
    window.open(twitterUrl, '_blank');
    setIsShared(true);
  };

  const shareGiftLink = () => {
    const whatsappUrl = `https://wa.me/?text=${giftMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyGiftLink = async () => {
    try {
      await navigator.clipboard.writeText(appUrl);
      setIsLinkCopied(true);
      setTimeout(() => setIsLinkCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const downloadCard = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          scale: 2,
          backgroundColor: '#FFF8E1'
        });
        
        const link = document.createElement('a');
        link.download = `تهنئة-عيد-الأضحى-من-${userName}.png`;
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Error downloading card:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/10 flex items-center justify-center p-2">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Button
          onClick={onBack}
          className="mb-4 bg-white/80 hover:bg-white text-islamic-olive border border-islamic-gold/30 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
        >
          <ArrowLeft size={16} />
          <span className="arabic text-sm">رجوع</span>
        </Button>

        {/* Greeting Card */}
        <Card 
          ref={cardRef}
          className="bg-white/95 backdrop-blur-lg shadow-2xl border-2 border-islamic-gold/30 rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-islamic-gold via-islamic-gold-light to-islamic-gold p-6 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-3xl mb-3">🌙</div>
              <h1 className="text-2xl font-quran text-white mb-2 arabic">
                عيد أضحى مبارك
              </h1>
              <p className="text-white/90 english font-english text-sm">
                Eid Al-Adha Mubarak
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 text-center space-y-6">
            {/* From the user */}
            <div className="bg-gradient-to-br from-islamic-cream/60 to-islamic-gold/20 p-4 rounded-xl border border-islamic-gold/30">
              <p className="text-islamic-olive arabic font-bold text-lg">
                من: {userName}
              </p>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center items-center">
              <div className="flex items-center space-x-3">
                <div className="text-2xl animate-float">🌙</div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-islamic-gold to-transparent"></div>
                <div className="text-2xl animate-float" style={{animationDelay: '1s'}}>☪️</div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-islamic-gold to-transparent"></div>
                <div className="text-2xl animate-float" style={{animationDelay: '2s'}}>🕌</div>
              </div>
            </div>

            {/* Message */}
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-islamic-gold/20">
              <p className="text-islamic-olive arabic text-lg leading-relaxed">
                أهديكم أجمل التهاني بمناسبة عيد الأضحى المبارك
              </p>
            </div>

            {/* Quran verse */}
            <div className="bg-gradient-to-r from-islamic-cream/20 to-islamic-gold/10 p-4 rounded-xl border border-islamic-gold/20">
              <p className="text-islamic-olive font-quran text-lg leading-relaxed mb-2">
                "تقبل الله منا ومنكم صالح الأعمال"
              </p>
              <p className="text-islamic-olive-light arabic text-sm">
                دعاء مبارك
              </p>
            </div>

            {/* Date */}
            <div className="flex justify-between items-center text-islamic-olive-light bg-islamic-cream/30 p-3 rounded-lg text-sm">
              <div className="arabic text-center">
                <p className="font-bold">التاريخ الهجري</p>
                <p>{currentHijriDate}</p>
              </div>
              <div className="w-px h-8 bg-islamic-gold/30"></div>
              <div className="english font-english text-center">
                <p className="font-bold">Date</p>
                <p>{currentDate}</p>
              </div>
            </div>

            {/* Gift section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Gift className="text-emerald-600" size={20} />
                <p className="text-emerald-700 arabic font-bold text-lg">
                  هدية لأحبائك
                </p>
              </div>
              <p className="text-emerald-600 arabic text-sm mb-3">
                شارك الرابط مع من تحب ليرسلوا تهانيهم أيضاً
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={shareGiftLink}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 arabic text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  إرسال
                </Button>
                <Button
                  onClick={copyGiftLink}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 arabic text-sm"
                >
                  <Copy size={16} />
                  نسخ
                </Button>
              </div>
            </div>

            {/* Copyright - subtle */}
            <div className="text-center">
              <p className="text-gray-400 text-xs english">
                Ahmed Mubarak
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="mt-4 space-y-3">
          <Button
            onClick={downloadCard}
            className="w-full bg-islamic-olive hover:bg-islamic-olive-dark text-white py-3 rounded-xl flex items-center justify-center gap-2 arabic font-bold shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Download size={20} />
            حفظ البطاقة
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={shareOnWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 arabic font-bold shadow-lg hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              واتساب
            </Button>
            
            <Button
              onClick={shareOnX}
              className="bg-black hover:bg-gray-800 text-white py-3 rounded-xl flex items-center justify-center gap-2 arabic font-bold shadow-lg hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X
            </Button>
          </div>

          {(isShared || isLinkCopied) && (
            <div className="p-3 bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-300 rounded-xl animate-fade-in-up">
              <p className="text-green-700 font-bold arabic text-sm flex items-center justify-center gap-2">
                <span className="text-lg">🎉</span>
                {isLinkCopied ? 'تم نسخ الرابط بنجاح!' : 'تم المشاركة بنجاح! جزاك الله خيراً'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
