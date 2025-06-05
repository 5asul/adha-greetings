import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Download, Share2, Gift, Copy } from 'lucide-react';
import html2canvas from 'html2canvas';
interface GreetingCardProps {
  userName: string;
  senderName?: string;
  onBack: () => void;
}
export const GreetingCard = ({
  userName,
  senderName,
  onBack
}: GreetingCardProps) => {
  const [isShared, setIsShared] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const currentHijriDate = '١٠ ذو الحجة ١٤٤٦';
  const currentDate = new Date().toLocaleDateString('ar-SA');
  const appUrl = window.location.origin;
  const defaultSender = "أحمد مبارك عباد";
  const currentSender = senderName || defaultSender;

  // رسالة التهنئة المستلمة
  const receivedGreetingMessage = encodeURIComponent(`🌙 عيد أضحى مبارك! 🌙

من: ${currentSender}
إلى: ${userName}

أهديكم أجمل التهاني بمناسبة عيد الأضحى المبارك
تقبل الله منا ومنكم صالح الأعمال

🕌 كل عام وأنتم بخير 🕌

#عيد_الأضحى_مبارك`);

  // رسالة هدية الرابط للأحباء
  const personalGiftMessage = encodeURIComponent(`🎁 هدية خاصة لك من ${userName}

أرسل تهنئة عيد الأضحى المبارك لأحبائك:
${appUrl}/?from=${encodeURIComponent(userName)}

بطاقة تهنئة شخصية مجانية 🌙✨

#عيد_الأضحى #هدية_خاصة`);
  const shareReceivedGreeting = () => {
    const whatsappUrl = `https://wa.me/?text=${receivedGreetingMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsShared(true);
  };
  const shareOnX = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${receivedGreetingMessage}`;
    window.open(twitterUrl, '_blank');
    setIsShared(true);
  };
  const sharePersonalGiftLink = () => {
    const whatsappUrl = `https://wa.me/?text=${personalGiftMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  const copyPersonalGiftLink = async () => {
    try {
      const personalLink = `${appUrl}/?from=${encodeURIComponent(userName)}`;
      await navigator.clipboard.writeText(personalLink);
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
          scale: 3,
          backgroundColor: '#FFF8E1',
          useCORS: true,
          allowTaint: true
        });
        const link = document.createElement('a');
        link.download = `تهنئة-عيد-الأضحى-من-${currentSender}-إلى-${userName}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
      } catch (error) {
        console.error('Error downloading card:', error);
      }
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-islamic-cream via-white to-islamic-gold/20 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-4">
        {/* Back button */}
        <Button onClick={onBack} className="mb-3 bg-white/90 hover:bg-white text-islamic-olive border-2 border-islamic-gold/40 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <ArrowLeft size={16} />
          <span className="arabic text-sm font-bold">رجوع</span>
        </Button>

        {/* التهنئة المستلمة */}
        <Card ref={cardRef} className="bg-gradient-to-br from-white via-islamic-cream/30 to-white shadow-2xl border-2 border-islamic-gold/50 rounded-3xl overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-islamic-gold via-islamic-gold-light to-islamic-gold p-4 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.3) 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-3">
                <div className="h-px bg-white/50 flex-1 max-w-8"></div>
                <div className="text-xl mx-3 animate-pulse">🌙</div>
                <div className="h-px bg-white/50 flex-1 max-w-8"></div>
              </div>
              
              <h1 className="text-xl sm:text-2xl font-quran text-white mb-1 arabic font-bold tracking-wide">
                عيد أضحى مبارك
              </h1>
              <p className="text-white/95 english font-english text-xs font-medium">
                Eid Al-Adha Mubarak
              </p>
              
              <div className="flex items-center justify-center mt-3">
                <div className="h-px bg-white/50 flex-1 max-w-8"></div>
                <div className="text-lg mx-3">☪️</div>
                <div className="h-px bg-white/50 flex-1 max-w-8"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 text-center space-y-4">
            {/* From Section */}
            <div className="bg-gradient-to-r from-islamic-cream/80 to-islamic-gold/30 p-3 rounded-xl border-2 border-islamic-gold/40 shadow-inner">
              <p className="text-islamic-olive arabic font-bold text-base mb-1">
                من: {currentSender}
              </p>
              <p className="text-islamic-olive arabic font-bold text-base">
                إلى: {userName}
              </p>
              <div className="flex justify-center mt-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-islamic-gold to-transparent"></div>
              </div>
            </div>

            {/* Main Message */}
            <div className="bg-gradient-to-br from-white to-islamic-cream/50 p-4 rounded-xl border border-islamic-gold/30 shadow-lg">
              <p className="text-islamic-olive arabic text-base leading-relaxed font-semibold">
                أهديكم أجمل التهاني بمناسبة عيد الأضحى المبارك
              </p>
            </div>

            {/* Quran Verse */}
            <div className="bg-gradient-to-r from-islamic-gold/10 via-islamic-cream/40 to-islamic-gold/10 p-4 rounded-xl border-2 border-islamic-gold/30 shadow-inner">
              <div className="text-center">
                <div className="text-islamic-gold mb-1">✨</div>
                <p className="text-islamic-olive font-quran text-base leading-relaxed mb-2 font-bold">
                  "تقبل الله منا ومنكم صالح الأعمال"
                </p>
                <p className="text-islamic-olive-light arabic text-xs italic">عيد مبارك</p>
                <div className="text-islamic-gold mt-1">✨</div>
              </div>
            </div>

            {/* Date Section */}
            <div className="flex justify-between items-center bg-gradient-to-r from-islamic-cream/60 to-islamic-gold/20 p-3 rounded-lg border border-islamic-gold/30 text-xs">
              <div className="arabic text-center flex-1">
                <p className="font-bold text-islamic-olive">التاريخ الهجري</p>
                <p className="text-islamic-olive-light mt-1">{currentHijriDate}</p>
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-islamic-gold to-transparent mx-2"></div>
              <div className="english font-english text-center flex-1">
                <p className="font-bold text-islamic-olive">Date</p>
                <p className="text-islamic-olive-light mt-1">{currentDate}</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-xs english font-medium opacity-60">
                Ahmed Mubarak
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons للتهنئة المستلمة */}
        <div className="space-y-3">
          <Button onClick={downloadCard} className="w-full bg-gradient-to-r from-islamic-olive to-islamic-olive-dark hover:from-islamic-olive-dark hover:to-islamic-olive text-white py-3 rounded-2xl flex items-center justify-center gap-3 arabic font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-islamic-gold/30">
            <Download size={18} />
            حفظ البطاقة
            <div className="text-lg">💾</div>
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button onClick={shareReceivedGreeting} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-2xl flex items-center justify-center gap-2 arabic font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              واتساب
            </Button>
            
            <Button onClick={shareOnX} className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white py-3 rounded-2xl flex items-center justify-center gap-2 arabic font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X
            </Button>
          </div>
        </div>

        {/* هدية خاصة للأحباء */}
        <Card className="bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 border-2 border-emerald-300/50 shadow-lg rounded-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Gift className="text-emerald-600 animate-pulse" size={20} />
              <p className="text-emerald-700 arabic font-bold text-base">
                هدية خاصة من {currentSender} إلى {userName}
              </p>
              <Gift className="text-emerald-600 animate-pulse" size={20} />
            </div>
            <p className="text-emerald-600 arabic text-sm mb-4 leading-relaxed text-center">
              شارك رابطك الخاص مع أحبائك ليرسلوا تهانيهم باسمك
            </p>
            <div className="flex gap-2">
              <Button onClick={sharePersonalGiftLink} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 arabic text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                إرسال الرابط
              </Button>
              <Button onClick={copyPersonalGiftLink} className="flex-1 bg-slate-500 hover:bg-slate-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 arabic text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Copy size={16} />
                نسخ الرابط
              </Button>
            </div>
          </div>
        </Card>

        {(isShared || isLinkCopied) && <div className="p-4 bg-gradient-to-r from-green-100 via-emerald-50 to-green-100 border-2 border-green-400 rounded-2xl animate-fade-in-up shadow-lg">
            <p className="text-green-700 font-bold arabic text-sm flex items-center justify-center gap-2">
              <span className="text-xl animate-bounce">🎉</span>
              {isLinkCopied ? 'تم نسخ الرابط بنجاح!' : 'تم المشاركة بنجاح! جزاك الله خيراً'}
              <span className="text-xl animate-bounce">🎉</span>
            </p>
          </div>}
      </div>
    </div>;
};
