"use client";
import React from "react";
import Image from "next/image";

const certificatesList = [
  {
    id: 1,
    title: "Educational Tour Certificate of Completion",
    issuer: "Holy Cross of Davao College",
    date: "2025",
    image: "/images/educ_tour_cert.jpg", // Make sure to put your image here
  },
  {
    id: 2,
    title: "DevFest Certificate of Participation",
    issuer: "Google Developers Group Davao",
    date: "2025",
    image: "/images/devfest.png", // Make sure to put your image here
  },
  {
    id: 3,
    title: "Computer Hardware Basics Course Completion",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "/images/CISCO_CHB.jpeg", // Make sure to put your image here
  },
  {
    id: 4,
    title: "Operating System Basics Course Completion",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "/images/OSB_cert2.jpeg", // Make sure to put your image here
  },
  {
    id: 5,
    title: "Gemini Certified Student Qualification",
    issuer: "Google for Education",
    date: "2023",
    image: "/images/gemini_cert.png", // Make sure to put your image here
  },
  {
    id: 6,
    title: "Information Management Certification",
    issuer: "CodeChum",
    date: "2025",
    image: "/images/codechum.png", // Make sure to put your image here
  },
 
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Certificates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#181818] rounded-xl overflow-hidden border border-[#33353F] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-52 md:h-64">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover" // Ensures the image fills the area without distortion
                />
              </div>
              
              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                <div className="flex justify-between items-center text-[#ADB7BE] text-sm">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;