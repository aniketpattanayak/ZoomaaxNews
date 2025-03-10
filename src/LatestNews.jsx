// LatestNews.js
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

// Mock data (you can replace this with your actual JSON object)
const mockNewsData = [
  {
    id: "1",
    title: "Netflix: The Future of Streaming",
    image: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldGZsaXh8ZW58MHx8MHx8fDA%3D",
    category: "Entertainment",
    time: "5 min ago",
  },
  {
    id: "2",
    title: "The Rise of E-commerce Giants",
    image: "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
    category: "Business",
    time: "10 min ago",
  },
  // Add more news data here
];

gsap.registerPlugin(ScrollTrigger);

const LatestNews = () => {
  const sectionRef = useRef(null);
  const [newsData, setNewsData] = useState(mockNewsData); // Initialize with mock data
  const navigate = useNavigate();

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".news-item");

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
    }
  }, [newsData]);

  const handleCardClick = (news) => {
    navigate(`/blog/${news.id}`);
  };

  return (
    <div className="px-4 py-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Latest News</h2>
          <a href="#" className="text-red-500 font-medium hover:underline">
            See all →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.length > 0 ? (
            newsData.map((news, index) => (
              <div
                key={index}
                className="news-item rounded-lg overflow-hidden shadow-md bg-white cursor-pointer"
                onClick={() => handleCardClick(news)}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                  <p className="text-sm text-gray-500">
                    {news.category} • {news.time}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading news...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
