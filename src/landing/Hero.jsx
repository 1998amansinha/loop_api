"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Discover and explore{" "}
        <Highlight className="text-black dark:text-white">LoopAPI</Highlight>,
        the ultimate hub for free APIs across various categories.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-base px-6 md:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl text-center mx-auto mt-4"
      >
        Search, rate, and contribute to a growing collection of APIs. Whether
        you're building a new project or looking for inspiration, LoopAPI is
        your go-to resource for free and open APIs.
      </motion.p>
    </HeroHighlight>
  );
}
