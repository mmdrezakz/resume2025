"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "./AuroraBackground.jsx";
import React from "react";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col justify-center items-center gap-4 px-4"
      >
        <div className="font-bold dark:text-white text-3xl md:text-7xl text-center">
          Background lights are cool you know.
        </div>
        <div className="py-4 font-extralight dark:text-neutral-200 text-base md:text-4xl">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white px-4 py-2 rounded-full w-fit text-white dark:text-black">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}