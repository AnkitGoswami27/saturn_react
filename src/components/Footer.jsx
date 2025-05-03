import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">Saturn Edge</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Where innovation meets execution. We create digital solutions that transform businesses and delight users.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <a href="mailto:helpsaturnedge@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors mb-4">
              helpsaturnedge@gmail.com
            </a>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                <span>Li</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                <span>In</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 pt-8 border-t border-gray-800">
          © {new Date().getFullYear()} Saturn Edge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
