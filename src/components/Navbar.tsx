import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Geçici olarak true
  const [scrolled, setScrolled] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setIsAuthenticated(false);
    setShowLogoutModal(false);
    navigate('/');
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className={`text-2xl font-bold transition-all duration-300 ${
                  scrolled ? 'text-indigo-600' : 'text-white'
                } hover:scale-105 transform`}
              >
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                  Naber
                </span>
              </Link>
            </div>
            
            <div className="flex space-x-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-indigo-500 text-white'
                    : scrolled 
                      ? 'text-gray-700 hover:bg-indigo-50' 
                      : 'text-white/90 hover:bg-white/10'
                } text-sm font-medium hover:scale-105 transform`}
              >
                Ana Sayfa
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/chat"
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive('/chat')
                        ? 'bg-indigo-500 text-white'
                        : scrolled
                          ? 'text-gray-700 hover:bg-indigo-50'
                          : 'text-white/90 hover:bg-white/10'
                    } text-sm font-medium hover:scale-105 transform`}
                  >
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Chat
                    </span>
                  </Link>
                  <Link
                    to="/dashboard"
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive('/dashboard')
                        ? 'bg-indigo-500 text-white'
                        : scrolled
                          ? 'text-gray-700 hover:bg-indigo-50'
                          : 'text-white/90 hover:bg-white/10'
                    } text-sm font-medium hover:scale-105 transform`}
                  >
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Panel
                    </span>
                  </Link>
                  <button
                    onClick={handleLogoutClick}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      scrolled
                        ? 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                        : 'text-white/90 hover:bg-white/10'
                    } text-sm font-medium hover:scale-105 transform`}
                  >
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Çıkış
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      scrolled
                        ? 'text-gray-700 hover:bg-indigo-50'
                        : 'text-white/90 hover:bg-white/10'
                    } text-sm font-medium hover:scale-105 transform`}
                  >
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Giriş
                    </span>
                  </Link>
                  <Link
                    to="/register"
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive('/register')
                        ? 'bg-indigo-500 text-white'
                        : scrolled
                          ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                          : 'bg-white/10 text-white hover:bg-white/20'
                    } text-sm font-medium hover:scale-105 transform`}
                  >
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Kayıt Ol
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Çıkış Onay Modalı */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={handleLogoutCancel}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Oturumu Kapatmak İstiyor musunuz?
              </h3>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleLogoutCancel}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Vazgeç
                </button>
                <button
                  onClick={handleLogoutConfirm}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                >
                  Çıkış Yap
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 