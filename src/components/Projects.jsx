import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "Stayebee",
      description: "Airbnb-style accommodation booking platform",
      category: "Mobile App",
      imageUrl: "https://media.istockphoto.com/id/2110310187/photo/luxury-tropical-pool-villa-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=3wDvy4YueLfVHI9Kycl7J-nYKJsxiJL1rpBQ-ZS0hTI=",
    },
    {
      title: "File Manager App",
      description: "Intuitive file organization and storage solution",
      category: "Utility",
      imageUrl: "https://cdn.pixabay.com/photo/2021/10/06/23/52/paper-6686880_1280.png",
    },
    {
      title: "Video Player App",
      description: "Sleek, feature-rich media player application",
      category: "Media",
      imageUrl: "https://cdn.pixabay.com/photo/2017/06/11/18/26/gramophone-2393162_1280.jpg",
    },
    {
      title: "VPN App",
      description: "Secure, high-speed virtual private network service",
      category: "Security",
      imageUrl: "https://cdn.pixabay.com/photo/2019/03/22/08/36/vpn-for-entertainment-4072717_1280.jpg",
    },
    {
      title: "Dating App",
      description: "Modern matchmaking platform with advanced algorithms",
      category: "Social",
      imageUrl: "https://images.pexels.com/photos/450050/pexels-photo-450050.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Cleaner App",
      description: "System optimization and maintenance application",
      category: "Utility",
      imageUrl: "https://images.pexels.com/photos/3850264/pexels-photo-3850264.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  useEffect(() => {
    projectRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse", // Animation works repeatedly
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
