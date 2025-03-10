import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mustReadData = [
  {
    title: "Ukraine's silence along southern front fuels counteroffensive...",
    category: "War",
    image:
      "https://images.unsplash.com/photo-1735736617209-1eb11346c798?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
    time: "10 hours ago • 8 min read",
  },
  {
    title: "Taylor Swift is sending a powerful message to women on the Eras...",
    category: "Entertainment",
    image:
      "https://plus.unsplash.com/premium_photo-1737590253949-20eeb43a58be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D",
    time: "5 hours ago • 10 min read",
  },
  {
    title: "Inside Qatar’s ‘city of the future’...",
    category: "Travel",
    image:
      "https://plus.unsplash.com/premium_photo-1736517212352-759d55e856d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzN8fHxlbnwwfHx8fHw%3D",
    time: "20 hours ago • 4 min read",
  },
];

export default function MustRead() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".must-read-item");

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
    <div className="px-4 lg:px-8 py-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Must Read</h2>
          <a href="#" className="text-red-500 font-medium hover:underline">
            See all →
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {mustReadData.map((article, index) => (
            <div
              key={index}
              className={`must-read-item rounded-lg overflow-hidden shadow-md bg-white flex-shrink-0 ${
                index === 1 ? "sm:flex-[1.4]" : "sm:flex-1"
              }`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-500">
                  {article.category} • {article.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
