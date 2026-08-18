import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquareIcon } from 'lucide-react';
export function EnquiryButton() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: 1.2,
        duration: 0.5
      }}
      className="fixed bottom-6 right-6 z-40">
      
      <Link
        to="/contact"
        className="group flex items-center gap-2 bg-ink text-bone pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:bg-terracotta transition-colors">
        
        <MessageSquareIcon className="w-5 h-5" strokeWidth={1.5} />
        <span className="text-xs uppercase tracking-[0.15em]">Enquire</span>
      </Link>
    </motion.div>);

}