"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, EyeIcon } from "@heroicons/react/24/solid";

const galleryImages = [
  { id: 1, src: "/images/pic1.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/images/day1.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/images/world-tech.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/images/codechum.jpg", alt: "Gallery Image 4" },
  { id: 5, src: "/images/codechum2.jpeg", alt: "Gallery Image 5" },
  { id: 6, src: "/images/church.jpg", alt: "Gallery Image 6" },
  { id: 7, src: "/images/church2.jpg", alt: "Gallery Image 7" },
  { id: 8, src: "/images/cit.jpg", alt: "Gallery Image 8" },
  { id: 9, src: "/images/rivan.jpg", alt: "Gallery Image 9" },
  { id: 10, src: "/images/mataph.jpg", alt: "Gallery Image 10" },
  { id: 11, src: "/images/mataph2.jpg", alt: "Gallery Image 11" },
  { id: 12, src: "/images/bohol1.jpg", alt: "Gallery Image 12" },
  { id: 13, src: "/images/bohol2.jpg", alt: "Gallery Image 13" },
  { id: 14, src: "/images/homies.jpeg", alt: "Gallery Image 14" },
  { id: 15, src: "/images/g1.jpg", alt: "Gallery Image 15" },
  { id: 16, src: "/images/g2.jpg", alt: "Gallery Image 16" },
 
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Photo Gallery</h2>
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden cursor-pointer group border border-transparent hover:border-[#33353F]"
              onClick={() => setSelectedImage(item.src)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Simple Hover Overlay */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <EyeIcon className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              className="relative w-full max-w-6xl h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery Zoom"
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

export default GallerySection;