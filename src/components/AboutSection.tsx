"use client";

import { useState, useEffect } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const tabs = [
    {
      id: "mission",
      title: "Our Mission",
      content: "At Maulana, our mission is to drive transformative innovation that creates lasting value for our clients and communities. We believe in the power of excellence, integrity, and collaborative partnerships to solve complex challenges and unlock new possibilities for growth and success."
    },
    {
      id: "vision",
      title: "Our Vision",
      content: "To be a globally recognized leader in innovation and excellence, setting new standards in every field we operate. We envision a future where our solutions contribute to a more connected, sustainable, and prosperous world for all."
    },
    {
      id: "values",
      title: "Our Values",
      content: "Excellence, Integrity, Innovation, Collaboration, and Impact guide everything we do. These core values shape our culture, drive our decisions, and ensure we deliver exceptional results while maintaining the highest ethical standards."
    }
  ];

  const achievements = [
    { number: "100+", label: "Successful Projects" },
    { number: "50+", label: "Satisfied Clients" },
    { number: "15+", label: "Industry Awards" },
    { number: "5+", label: "Years of Excellence" },
  ];

  const teamMembers = [
    {
      name: "Leadership Team",
      role: "Visionary Leaders",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/29010ead-8669-4f02-9c6d-182b24018da7.png",
      description: "Experienced leaders driving strategic vision and organizational excellence."
    },
    {
      name: "Technical Experts",
      role: "Innovation Specialists",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27ff627e-f90c-4fae-8603-0e21f988d02f.png",
      description: "Skilled professionals delivering cutting-edge technical solutions."
    },
    {
      name: "Creative Team",
      role: "Design & Strategy",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b46fa931-76e1-481b-8fdd-68c51afd7f00.png",
      description: "Creative minds crafting compelling strategies and exceptional experiences."
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Maulana</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering excellence and innovation to create transformative solutions that make a difference in the world.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6588af14-d684-4fe9-9197-c9f973758714.png"
              alt="Maulana Organization - Modern Office and Professional Team"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Column - Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Excellence Driven by Purpose
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Maulana stands as a beacon of innovation and excellence, committed to transforming ideas into impactful realities. Our journey is defined by a relentless pursuit of quality, a passion for innovation, and an unwavering commitment to our clients' success.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a team of dedicated professionals and cutting-edge expertise, we deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities. Every project we undertake is a testament to our commitment to excellence and our vision for a better future.
            </p>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[120px]">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-all duration-300 ${
                    activeTab === tab.id ? "opacity-100" : "opacity-0 absolute"
                  }`}
                >
                  {activeTab === tab.id && (
                    <p className="text-gray-600 leading-relaxed">
                      {tab.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-sm md:text-base opacity-90">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}