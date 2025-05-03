import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const imageRef = useRef();
  const edgeRef = useRef();

  useEffect(() => {
    // Text animation for "EDGE" in the word SATURN
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });

    timeline
      .to(edgeRef.current, { duration: 0.13, text: "E", ease: "none" })
      .to(edgeRef.current, { duration: 0.13, text: "ED", ease: "none" })
      .to(edgeRef.current, { duration: 0.13, text: "EDG", ease: "none" })
      .to(edgeRef.current, { duration: 0.13, text: "EDGE", ease: "none" })
      .to(edgeRef.current, { duration: 0.13, text: "EDG", ease: "none" })
      .to(edgeRef.current, { duration: 0.13, text: "ED", ease: "none" })
      .to(edgeRef.current, { duration: 0.13, text: "E", ease: "none" })
      .to(edgeRef.current, { duration: 0.13, text: "", ease: "none" });

    // Image animation: slide from top to right, stay within the hero section height
    gsap.fromTo(
      imageRef.current,
      { y: -500, opacity: 0 }, // Start position above and hidden
      {
        duration: 2,
        y: 0, // Final position (within the hero section height)
        opacity: 1, // Fade in
        ease: "power2.out",
        delay: 0.2, // Delay to sync with page load
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-40 pb-40 bg-gray-900 relative"
    >
      {/* Background Image Animation */}
      <div
        ref={imageRef}
        className="absolute top-0 right-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184309/pexels-photo-3184309.jpeg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-blue-500 font-medium mb-2">HI THERE! WE ARE</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            SATURN <span ref={edgeRef} className="text-blue-500" />
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Where Innovation Meets Execution
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              Our Services
            </button>
            <button className="border border-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
