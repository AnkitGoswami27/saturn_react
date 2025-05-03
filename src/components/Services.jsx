import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceRefs = useRef([]);

  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging interfaces.",
    },
    {
      title: "App Development",
      description: "Building fast and scalable mobile apps.",
    },
    {
      title: "Web Development",
      description: "Creating responsive and interactive websites.",
    },
    {
      title: "SEO Optimization",
      description: "Improving search engine rankings organically.",
    },
    {
      title: "Cloud Integration",
      description: "Scalable cloud solutions for your business.",
    },
    {
      title: "Security Audits",
      description: "Ensuring application and data protection.",
    },
  ];

  useEffect(() => {
    serviceRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse", // repeated animation
          },
        }
      );
    });
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-blue-500 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
