"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="container-custom py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 max-w-md mx-auto"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rotaract-pink/30 to-rotaract-pink/30" />
        <div className="flex items-center gap-2">
          <span className="text-rotaract-pink text-sm">✦</span>
          <span className="text-rotaract-gold text-base">✦</span>
          <span className="text-rotaract-pink text-sm">✦</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-rotaract-pink/30 to-rotaract-pink/30" />
      </motion.div>
    </div>
  );
}
