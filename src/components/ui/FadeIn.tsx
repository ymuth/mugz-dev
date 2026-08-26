"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMediaQuery } from "react-responsive";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  delayMobile?: number;
  x?: number;
  y?: number;
};



export default function FadeIn({
  children,
  delay = 0,
  delayMobile = delay,
  x = 0,
  y = 80,
}: FadeInProps) {

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const reduceMotion = useReducedMotion();
  const actualDelay = isDesktop ? delay : delayMobile;

  return (
    <motion.div
      initial={reduceMotion ? false : {
        opacity: 0,
        x,
        y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: actualDelay,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
