import { motion } from 'framer-motion';
import ChatLayout from '../components/layouts/ChatLayout';
import ChatInterface from '../components/chat/ChatInterface';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Chat = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-16"
    >
      <ChatLayout>
        <motion.div variants={itemVariants}>
          <ChatInterface />
        </motion.div>
      </ChatLayout>
    </motion.div>
  );
};

export default Chat; 