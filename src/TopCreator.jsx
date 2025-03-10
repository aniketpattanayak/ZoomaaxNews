import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const creators = [
  { name: "Alex Young", role: "BBC News", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww" },
  { name: "Joe Alen", role: "CNN", image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww" },
  { name: "Alexa Timber", role: "Formula 1", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww" },
  { name: "Asley Star", role: "Goal", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D" },
];

export default function TopCreator() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".creator-card");

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
    <div className="px-4 lg:px-8 py-8 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Top Creator</h2>
          <a href="#" className="text-red-500 font-medium hover:underline">
            See all →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="creator-card text-center bg-gray-50 rounded-lg p-4 shadow-sm"
            >
              <div className="w-24 h-24 mx-auto mb-3 overflow-hidden rounded-full border-2 border-gray-200">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{creator.name}</h3>
              <p className="text-sm text-gray-500">{creator.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
