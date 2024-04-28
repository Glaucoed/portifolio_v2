"use client";
import { containerAnimation } from "@/Animations/AnimationDefault";
import SwipperComponent from "@/components/SwipperComponent";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isView) {
      mainControls.start("visible");
    }
    }, [isView, mainControls]);

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate={mainControls}
      ref={ref}
      className="lg:px-20 px-4 pt-20 dark:bg-black bg-white"
    >
      <div>
      <h2 className="text-h1 text-escuro uppercase font-bold dark:text-white">
        Projetos
      </h2>
      <div className="bg-dourado h-2 w-24" />
    </div>
      <SwipperComponent />
    </motion.div>
  )
}
