import { useState } from 'react';
import { motion } from 'framer-motion';

interface Channel {
  id: string;
  name: string;
  unreadCount: number;
}

interface DirectMessage {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
  lastMessage?: string;
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<'channels' | 'dms'>('channels');

  // Dummy data
  const channels: Channel[] = [
    { id: '1', name: 'genel', unreadCount: 3 },
    { id: '2', name: 'teknoloji', unreadCount: 0 },
    { id: '3', name: 'sohbet', unreadCount: 5 },
  ];

  const directMessages: DirectMessage[] = [
    { id: '1', name: 'Ahmet Yılmaz', avatar: '👨', online: true, lastMessage: 'Merhaba!' },
    { id: '2', name: 'Ayşe Demir', avatar: '👩', online: false, lastMessage: 'Görüşürüz' },
    { id: '3', name: 'Mehmet Kaya', avatar: '👨', online: true },
  ];

  return (
    <div className="h-full flex flex-col text-gray-700">
      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Ara..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'channels'
              ? 'text-indigo-600 border-b-2 border-indigo-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('channels')}
        >
          Kanallar
        </button>
        <button
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'dms'
              ? 'text-indigo-600 border-b-2 border-indigo-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('dms')}
        >
          Mesajlar
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="p-4 space-y-2"
        >
          {activeTab === 'channels' ? (
            // Channels
            channels.map((channel) => (
              <motion.button
                key={channel.id}
                variants={itemVariants}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="flex items-center">
                  <span className="text-gray-500 mr-2">#</span>
                  {channel.name}
                </span>
                {channel.unreadCount > 0 && (
                  <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">
                    {channel.unreadCount}
                  </span>
                )}
              </motion.button>
            ))
          ) : (
            // Direct Messages
            directMessages.map((dm) => (
              <motion.button
                key={dm.id}
                variants={itemVariants}
                className="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="relative mr-3 text-xl">
                  {dm.avatar}
                  {dm.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white" />
                  )}
                </span>
                <div className="flex-1 text-left">
                  <div className="font-medium">{dm.name}</div>
                  {dm.lastMessage && (
                    <div className="text-xs text-gray-500 truncate">{dm.lastMessage}</div>
                  )}
                </div>
              </motion.button>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar; 