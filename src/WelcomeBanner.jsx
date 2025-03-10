import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WelcomeBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={bannerRef} className="flex items-center justify-center px-4 py-8">
      <div className="w-full text-center bg-gray-100 shadow-md rounded-2xl py-8 px-6 max-w-screen-lg">
        <h1 className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-4">
          Welcome to Buletin
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Craft narratives ✍️ that ignite <span className="text-red-500">inspiration 💡</span>,
          <span className="text-red-500"> knowledge 📕</span>, and <span className="text-red-500">entertainment 🎬</span>
        </h2>
      </div>
    </div>
  );
}