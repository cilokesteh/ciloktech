"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/** ScrollProgress — thin gradient bar di atas halaman. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[70] origin-left bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500"
      style={{ scaleX }}
    />
  );
}
