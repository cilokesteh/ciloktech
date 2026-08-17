"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.12, 1, 0.22, 1] as [number, number, number, number];
const DURATION = 0.8;

type Dir = "up" | "left" | "right" | "scale";

const offsets: Record<Dir, { x: number; y: number; scale: number }> = {
  up: { x: 0, y: 40, scale: 1 },
  left: { x: -50, y: 0, scale: 1 },
  right: { x: 50, y: 0, scale: 1 },
  scale: { x: 0, y: 0, scale: 0.95 },
};

/** Reveal — single element scroll reveal (blur + slide, 0.8s ease-out expo) */
export function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const o = offsets[dir];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: o.x, y: o.y, scale: o.scale, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: DURATION, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** RevealGrid — staggered children reveal */
export function RevealGrid({
  children,
  className,
  stagger = 0.15,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: DURATION, ease: EASE } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={item}>{children}</motion.div>}
    </motion.div>
  );
}
