import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SubscribeSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="px-4 py-8 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-gray-500 mb-6">Stay updated with our latest content</p>
        <form className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 border rounded-md w-72"
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
