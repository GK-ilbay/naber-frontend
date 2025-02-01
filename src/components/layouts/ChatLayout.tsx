import { motion } from 'framer-motion';
import Sidebar from '../chat/Sidebar';
import UserProfile from '../chat/UserProfile';

interface ChatLayoutProps {
  children: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: (custom: number) => ({
    x: custom < 0 ? -100 : 100,
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 400,
      duration: 0.15
    }
  }
};

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-6"
    >
      <div className="flex gap-4 h-[calc(100vh-7rem)]">
        {/* Sidebar */}
        <motion.div
          variants={itemVariants}
          custom={-1}
          className="w-64 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
        >
          <Sidebar />
        </motion.div>

        {/* User Profile */}
        <motion.div
          variants={itemVariants}
          custom={-0.5}
          className="w-80 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
        >
          <UserProfile />
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          variants={itemVariants}
          custom={1}
          className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChatLayout; 