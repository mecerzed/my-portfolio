"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  { text: "Good design is obvious. Great design is transparent.", author: "Joe Sparano" },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Your brand is what other people say about you when you're not in the room.", author: "Jeff Bezos" },
  { text: "Design is intelligence made visible.", author: "Alina Wheeler" },
  { text: "Good design is as little design as possible.", author: "Dieter Rams" },
  { text: "Branding is the art of aligning what you want people to think about your company with what people actually think.", author: "Jay Baer" },
  { text: "Design creates culture. Culture shapes values. Values determine the future.", author: "Robert L. Peters" },
];

export default function DesignQuote() {
  const [index] = useState(() => Math.floor(Math.random() * quotes.length));

  return (
    <div className="max-w-2xl mx-auto text-center px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl font-medium text-dark leading-snug italic">
            &ldquo;{quotes[index].text}&rdquo;
          </p>
          <p className="mt-4 text-sm text-text/50 uppercase tracking-wide">
            — {quotes[index].author}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}