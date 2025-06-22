import React from 'react';

const words = [
  "Guidance", "Purpose", "Faith", "Meaning", "Beauty",
  "Intention", "Light", "Devotion", "Peace", "Blessing"
];

export default function ScrollingWords() {
  return (
    <div className="w-full h-16 overflow-hidden relative">
      <div className="absolute w-max animate-marquee whitespace-nowrap flex">
        {[...words, ...words].map((word, index) => (
          <span
            key={index}
            className="text-2xl font-semibold mx-6 text-gray-700"
          >
            /{word}
          </span>
        ))}
      </div>
    </div>
  );
}
