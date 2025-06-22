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
  const wordElements = words.map((word, i) => (
    <span key={i} className="text-3xl font-semibold mx-6 text-[#FFFFFF] whitespace-nowrap shrink-0">
      /{word}
    </span>
  ));

  return (
    <div className="relative w-full overflow-hidden h-16 bg-br-color flex items-center">
      <div className="flex w-max animate-marquee">
        <div className="flex">{wordElements}</div>
        <div className="flex">{wordElements}</div>
      </div>
    </div>
  );
}
