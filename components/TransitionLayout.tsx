'use client';
import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

export function TransitionLayout({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: '15%' }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
