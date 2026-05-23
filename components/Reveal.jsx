"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle fade-up reveal on scroll. Respects prefers-reduced-motion.
 * Wrap any block: <Reveal delay={0.1}>...</Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  as = "div",
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce || process.env.NEXT_PUBLIC_NOANIM ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
