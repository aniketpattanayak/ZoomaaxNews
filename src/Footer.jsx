import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white px-4 lg:px-8 py-8 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-red-500 text-lg font-bold mb-2">Zoomax News</h3>
            <p className="text-sm text-gray-500 mb-4">
              Craft narratives that ignite inspiration, knowledge, and
              entertainment.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-400 hover:text-white transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          {[
            { title: "Business", items: ["Startup", "Employee", "Markets"] },
            { title: "Technology", items: ["Gadget", "Innovative Cities"] },
            { title: "Sports", items: ["Football", "Tennis"] },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-md font-semibold mb-3">{section.title}</h4>
              <ul className="text-sm text-gray-500">
                {section.items.map((item, i) => (
                  <li key={i} className="mb-1">
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">
          Copyright © 2025 Zoomster News by Zoomster Hub. All rights reserved.
        </p>
      </div>
    </div>
  );
}
