import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animasyonlu Arka Plan Bileşeni
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-200" />
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/30 rounded-full backdrop-blur-sm"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const MessageBubble = ({ className, size = "normal" }: { className: string; size?: "small" | "normal" | "large" }) => {
  const sizeClasses = {
    small: "w-32",
    normal: "w-48",
    large: "w-64"
  };

  return (
    <div className={`absolute opacity-30 ${className} ${sizeClasses[size]}`}>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-indigo-100">
        <div className="w-3 h-3 bg-indigo-400 rounded-full mb-2"></div>
        <div className="w-24 h-2 bg-indigo-100 rounded mb-2"></div>
        <div className="w-16 h-2 bg-indigo-100 rounded"></div>
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Message Bubbles */}
        <MessageBubble className="animate-float-slow top-10 left-10" size="small" />
        <MessageBubble className="animate-float-slower top-1/4 right-16" size="normal" />
        <MessageBubble className="animate-float-slowest bottom-1/4 left-20" size="large" />
        <MessageBubble className="animate-float-slow bottom-32 right-24" size="small" />
        <MessageBubble className="animate-float-slower top-1/3 left-1/3" size="normal" />
        <MessageBubble className="animate-float-slowest bottom-1/3 right-1/3" size="large" />
        <MessageBubble className="animate-float-slow top-20 right-1/4" size="small" />
        <MessageBubble className="animate-float-slower bottom-20 left-1/4" size="normal" />
        <MessageBubble className="animate-float-slowest top-1/2 right-20" size="small" />
        <MessageBubble className="animate-float-slow bottom-1/2 left-16" size="large" />
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-white/30 backdrop-blur-sm p-8 rounded-2xl shadow-xl inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-900">
              Naber
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-800 animate-fade-in-delay max-w-2xl mx-auto">
              Güvenli, açık kaynak ve ücretsiz mesajlaşma platformu
            </p>
            <div className="space-x-4">
              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Hemen Başla
              </Link>
              <a
                href="https://github.com/yourusername/naber"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">
            Neden Naber?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="fade-in">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Gizlilik Odaklı</h3>
                <p className="text-gray-600">
                  Uçtan uca şifreleme ve güçlü gizlilik politikalarıyla verileriniz güvende
                </p>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Açık Kaynak</h3>
                <p className="text-gray-600">
                  Tamamen açık kaynak kodlu ve topluluk tarafından denetlenen şeffaf geliştirme
                </p>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-blue-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ücretsiz</h3>
                <p className="text-gray-600">
                  Herkes için ücretsiz ve reklamsız iletişim platformu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-4xl font-bold mb-8">Hakkımızda</h2>
            <p className="text-xl text-gray-600 mb-8">
              Naber, İlbayen Sarıokumuş tarafından geliştirilen, kullanıcı gizliliğini ve güvenliğini ön planda tutan
              bir mesajlaşma platformudur. Projemiz, iletişimin herkes için erişilebilir ve güvenli olması
              gerektiği inancıyla açık kaynak olarak geliştirilmektedir.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-4xl font-bold mb-8">Bize Katılın</h2>
            <p className="text-xl text-gray-600 mb-8">
              Açık kaynak topluluğumuza katılın ve daha güvenli bir iletişim platformu oluşturmamıza yardımcı olun.
            </p>
            <Link
              to="/register"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Hemen Başlayın
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 