import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const blogData = [
  {
    id: "1",
    title: "Netflix: The Future of Streaming",
    images: [
      "https://images.unsplash.com/photo-1737630047433-772dc997c5cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1737639823039-be930ae63108?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1737455336574-c1548b26d895?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D"
    ],
    category: "Entertainment",
    time: "5 min ago",
    description: "Netflix continues to dominate the streaming world with groundbreaking content.",
    content: [
      "In recent years, Netflix has shifted its focus to original content, becoming a powerhouse in the entertainment industry. The streaming giant has created hit shows like Stranger Things, The Witcher, and The Crown, among others, which have kept audiences coming back for more. Netflix continues to invest in high-budget productions, offering a wide variety of genres to cater to diverse tastes.",
      "The future of streaming seems bright, with Netflix leading the charge in terms of content production and user experience. Its new strategy focuses not just on quantity but on the quality of content, with the goal of competing with traditional film and TV studios. As more companies enter the streaming space, Netflix remains at the top of the game with its innovative approach to both content and technology.",
      "Furthermore, Netflix has been expanding its global reach, producing content from different countries, such as South Korea's 'Squid Game', which became a worldwide phenomenon. This international expansion signals Netflix's growing influence in shaping global entertainment trends. With so many shows and films being produced worldwide, Netflix has become the go-to platform for many consumers."
    ]
  },
  {
    id: "2",
    title: "The Rise of E-commerce Giants",
    images: [
      "https://images.unsplash.com/photo-1737039859990-3bf62120ac6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1736026803868-9c819e14edf6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
    ],
    category: "Business",
    time: "10 min ago",
    description: "Amazon, Alibaba, and others are reshaping the global retail industry.",
    content: [
      "E-commerce giants are growing exponentially, with Amazon at the forefront of this transformation. Amazon's success lies in its relentless pursuit of customer satisfaction, a vast product range, and fast delivery times. The company's Prime membership has been instrumental in retaining loyal customers and expanding its reach to more markets globally. With services like Amazon Web Services (AWS), Amazon is diversifying its revenue streams, becoming an even more powerful player in the tech and retail sectors.",
      "The rise of online shopping has drastically altered the traditional retail landscape. Consumers are increasingly shopping from home, and major retailers are adapting to this shift by enhancing their online platforms and offering more competitive pricing and promotions. The convenience of shopping online, especially with features like one-click ordering, has made e-commerce a preferred choice for many customers.",
      "Additionally, companies like Alibaba have transformed the e-commerce industry in China and beyond. With its Alibaba and Taobao platforms, the company has connected millions of consumers and sellers. The rise of mobile payment systems, such as Alipay, has further driven the growth of online shopping, offering consumers an easy and secure way to pay for their purchases. Together, these e-commerce giants are reshaping the global retail industry, and the future of shopping seems entirely online."
    ]
  },
 
];

const BlogPage = () => {
  const { id } = useParams(); 
  const [news, setNews] = useState(null);

  useEffect(() => {
    
    const blog = blogData.find((item) => item.id === id);
    setNews(blog);
  }, [id]);

  if (!news) {
    return <p>Loading blog details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      

      <p className="text-gray-600">{news.category} • {news.time}</p>
      <p className="mt-4">{news.description || "No additional description available."}</p>

      {news.content.map((paragraph, index) => (
        <div key={index} className="mb-8">
          <p className="text-lg">{paragraph}</p>

       
          {news.images[index] && (
            <img
              src={news.images[index]}
              alt={`Blog Image ${index + 1}`}
              className="w-full h-auto my-4 rounded shadow-lg"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
