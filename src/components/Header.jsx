import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold text-white">Saturn Edge</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
          Get in Touch
        </button>
      </div>
    </header>
  );
};

export default Header;
