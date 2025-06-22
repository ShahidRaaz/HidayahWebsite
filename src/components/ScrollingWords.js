import React from 'react';

const words = [
  "Guidance", "Purpose", "Faith", "Meaning", "Beauty",
  "Intention", "Light", "Devotion", "Peace", "Blessing",
  "Sincerity", "Hope", "Patience", "Gratitude", "Compassion",
  "Unity", "Truth", "Wisdom", "Mercy", "Love",
  "Reflection", "Submission", "Tawheed", "Salah", "Sabr",
  "Du'a", "Barakah", "Trust", "Forgiveness", "Serenity",
  "Ikhlas", "Noor", "Rahma", "Taqwa", "Jannah"
];

export default function ScrollingWords() {
  return (
    <div className="w-full h-16 overflow-hidden relative">
      <div className="absolute w-max animate-marquee whitespace-nowrap flex">
        {[...words, ...words].map((word, index) => (
          <span
            key={index}
            className="text-3xl font-semibold mx-6 text-[#444444]"
          >
            /{word}
          </span>
        ))}
      </div>
    </div>
  );
}
