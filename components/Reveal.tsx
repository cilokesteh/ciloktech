"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const EASE = [0.12, 1, 0.22, 1] as [number, number, number, number];
const DURATION = 1.9;

type Dir = "up" | "left" | "right" | "scale";

const offsets: Record<Dir, { x: number; y: number; scale: number }> = {
  up: { x: 0, y: 64, scale: 1 },
  left: { x: -64, y: 0, scale: 1 },
  right: { x: 64, y: 0, scale: 1 },
  scale: { x: 0, y: 0, scale: 0.95 },
};

/**
 * Reveal — single element scroll reveal.
 * Pakai whileInView (bukan useInView+animate) supaya TIAP elemen
 * track viewport-nya sendiri — sinkron sama posisi scroll.
 */
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
  const o = offsets[dir];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: o.x, y: o.y, scale: o.scale, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: DURATION, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * RevealGrid — staggered children reveal.
 * Tiap child pakai whileInView sendiri supaya sinkron scroll.
 * stagger via delay index (bukan parent container).
 */
export function RevealGrid({
  children,
  className,
  stagger = 0.25,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const item: Variants = {
    hidden: { opacity: 0, y: 64, filter: "blur(12px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: DURATION, ease: EASE } },
  };

  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: DURATION, delay: i * stagger, ease: EASE }}
            >
              {child}
            </motion.div>
          ))
        : <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>{children}</motion.div>}
    </div>
  );
}
