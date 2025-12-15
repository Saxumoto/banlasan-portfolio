"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const journalData = [
  {
    id: 0,
    title: "Holy Cross of Davao College BS in Information Technology LEARNING JOURNAL",
    date: "November 2025",
    image: "/images/j0.jpg",
    description: "This document chronicles my academic journey experience during the Educational Tour in Cebu and Bohol.",
  },
  {
    id: 1,
    title: "WORLDTECH INFORMATION SOLUTIONS INC.",
    date: "November 19, 2025",
    image: "/images/j1.jpg",
    description: "WorldTech Information Solutions, Inc. is a Philippine-based company with offices in Cebu, Manila, and international presence in Australia and Singapore. The company specializes in IT consulting, cybersecurity solutions, and professional training.",
  },
  {
    id: 2,
    title: "CODECHUM",
    date: "November 20, 2025",
    image: "/images/j4.jpg",
    description: "CodeChum is an educational technology platform based in Cebu, Philippines, designed to make learning programming accessible and engaging for students and teachers.",
  },
  {
    id: 3,
    title: "RIVAN IT CEBU",
    date: "November 20, 2025",
    image: "/images/j2.jpg",
    description: "Rivan IT Cebu is a training center. Established under the network of Rivan School of Technology Inc. (founded 1999), it specializes in IT and networking certification courses such as Cisco CCNA/CCNP, Linux, security, and VoIP.",
  },
  {
    id: 4,
    title: "MATA TECHNOLOGIES INC.",
    date: "November 21, 2025",
    image: "/images/j3.jpg",
    description: "Mata Technologies Inc. is a homegrown provider of virtual tours for real estate in the Philippines. It is also the virtual reality map provider of tourist destinations in the country.",
  },
  {
    id: 5,
    title: "TAGBILARAN CITY DRRMO",
    date: "November 22, 2025",
    image: "/images/j5.jpg",
    description: "Disaster Risk Reduction and Management ensures disaster prevention & mitigation, preparedness, response, recovery & rehabilitation for the City.",
  },
  {
    id: 6,
    title: "IMPRESSION SHEET",
    date: "November 2025",
    image: "/images/j6.jpg",
    description: "This document contains my personal reflections and feedback regarding the Educational Tour experience in Cebu and Bohol.",
  },
];

const JournalSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="journal" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Journal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {journalData.map((item) => (
            <div
              key={item.id}
              className="bg-[#181818] rounded-xl overflow-hidden border border-[#33353F] shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image Container - Image is ALWAYS visible */}
              <div className="relative w-full h-52 md:h-64 group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay only appears on HOVER, showing the 'View Image' text */}
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-medium bg-black bg-opacity-50 px-3 py-1 rounded-full border border-white">
                    View Image
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#ADB7BE] text-xs font-bold uppercase tracking-wider mb-2">
                  {item.date}
                </p>
                <p className="text-gray-400 text-sm line-clamp-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button className="absolute top-6 right-6 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-white hover:text-black transition-all z-[110]">
              <XMarkIcon className="h-8 w-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default JournalSection;