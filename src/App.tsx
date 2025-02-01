import { BrowserRouter, useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { routes } from './routes';
import PageTransitionLayout from './components/layouts/PageTransitionLayout';
import { motion } from 'framer-motion';

// Animated background bubbles component
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

const AppRoutes = () => {
  const element = useRoutes(routes);
  return <PageTransitionLayout>{element}</PageTransitionLayout>;
};

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
