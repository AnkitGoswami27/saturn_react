import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About Saturn Edge</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-6">
            Saturn Edge is a forward-thinking technology company dedicated to creating innovative digital solutions that help businesses thrive in the modern marketplace. Our team of experts combines technical excellence with creative vision to deliver exceptional results for our clients.
          </p>
          <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-300 italic">
              Our vision is to be the leading force in digital transformation, empowering businesses with cutting-edge technology solutions that drive growth and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
