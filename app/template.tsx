"use client";

import { MotionConfig, motion } from "framer-motion";

// Templates remount on navigation: a curtain lifts and the page settles in.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 origin-top bg-saffron"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="pointer-events-none fixed inset-0 z-40 origin-top bg-brand"
        aria-hidden
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </MotionConfig>
  );
}
