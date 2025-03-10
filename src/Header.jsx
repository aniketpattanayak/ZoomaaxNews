import React from "react";
import { Calendar, MapPin, TrendingUp, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-auto flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-yellow-400" />
            <span>{currentDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-400" />
            <span>New York, USA</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-end gap-4 mt-3 lg:mt-0 text-sm">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TrendingUp className="w-5 h-5 text-red-500" />
            <span>S&P 500: +1.2% | NASDAQ: -0.5%</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sun className="w-5 h-5 text-yellow-500" />
            <span>25°C, Sunny</span>
          </motion.div>
        </div>
      </div>

      {/* Breaking News Section */}
      <div className="bg-gray-700 text-white py-2 px-4 text-center text-sm">
        Breaking News: Market hits all-time high!{" "}
        <a
          href="#"
          className="text-yellow-400 hover:text-yellow-300 transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Header;
