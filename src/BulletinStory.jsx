import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = ["Netflix", "Disney", "Apple", "IDN", "Spotify", "Amazon"];

export default function BulletinStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".story-item");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
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
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Bulletin Story</h2>
          <a href="#" className="text-red-500 font-medium hover:underline">
            See all →
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto">
          {stories.map((story, index) => (
            <div
              key={index}
              className="story-item flex-shrink-0 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center font-semibold text-gray-800"
            >
              {story}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
