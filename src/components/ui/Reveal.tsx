"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds before the element animates in. */
  delay?: number;
  /** Vertical offset (px) the element travels from. */
  y?: number;
  className?: string;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll-triggered fade + rise. Honors prefers-reduced-motion by rendering
 * the children immediately without any transform.
 */
export function Reveal({ children, delay = 0, y = 18, className }: RevealProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (reduce || !mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
