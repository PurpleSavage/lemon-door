"use client";
import { motion } from "framer-motion";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useRef } from "react";

interface TextMotionProps {
  children: React.ReactNode;
  positionEndX: number;
  styles?: string;
}

export default function TextMotion({ children, positionEndX, styles }: TextMotionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { hasAnimated } = useSectionObserver({ sectionRef }); // ✅ Solo necesitamos `hasAnimated`

  return (
    <motion.div
      initial={{ opacity: 0, x: positionEndX }}
      animate={hasAnimated ? { opacity: 1, x: 0 } : {}} // ✅ Se anima solo una vez
      transition={{ duration: 0.8, delay: 0.2 }}
      className={styles || ""}
      ref={sectionRef}
    >
      {children}
    </motion.div>
  );
}
