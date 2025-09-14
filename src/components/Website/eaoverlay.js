import React, { useState } from "react";
import { motion } from "framer-motion";

const Overlay = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mnnbwvlr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit email");
      }

      setSuccess("Thank you! We'll reach out soon.");
      setEmail("");
      // Optionally close overlay automatically after a delay:
      // setTimeout(() => onClose(), 2000);
    } catch (e) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl py-12 px-8 w-[75vw] md:w-[500px] justify-center items-center flex flex-col relative"
        onClick={(e) => e.stopPropagation()} 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          className="cursor-cta group w-[45px] h-[45px] mb-6 absolute flex items-center justify-center border-2 border-br-color rounded-full bg-white hover:bg-br-color transition duration-300 top-[-20px]"
          onClick={onClose}
          aria-label="Close overlay"
          disabled={loading}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-br-color group-hover:text-white transition duration-300"
          >
            <path
              d="M13 13.5L25 25.5M13 13.5L1 1.5M13 13.5L1 25.5M13 13.5L25 1.5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Want exclusive early access to the first global marketplace for Muslim-focused digital products?
        </h2>

        <p className="mb-6 text-center text-xl">
          Enter your email to be the first to get updates for Hidayah.
        </p>

        <form
          onSubmit={handleSubmit}
          className={`w-[55vw] md:w-[400px] rounded-full mb-2 justify-between focus-within:ring-1 focus-within:ring-br-color flex items-center p-1 ${
            email ? "border-1 border-br-color" : "border border-br-color/50 hover:border-br-color/90 transition"
          }`}
        >
          <input
            type="email"
            required
            placeholder="Your email"
            className="w-[30vw] lg:w-[20vw] bg-transparent outline-none px-4 py-2 rounded-l-full border-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="cursor-cta bg-br-color/10 text-lg relative overflow-hidden px-4 py-2 font-medium text-br-color rounded-full group border-2 border-br-color hover:text-white transition"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              {loading ? "Submitting..." : "Submit"}{" "}
            </span>
            <span
              className="absolute left-0 bottom-0 w-full h-0 bg-br-color transition-all duration-500 group-hover:h-full"
              aria-hidden="true"
            ></span>
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-br-color text-sm mt-2">{success}</p>}
      </motion.div>
    </motion.div>
  );
};

export default Overlay;
