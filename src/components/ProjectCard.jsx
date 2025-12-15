"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Payroll Management System",
    description: "A comprehensive payroll management system built with Flask, featuring employee management, attendance tracking, leave management, and automated payroll processing.",
    image: "/images/im.png", // Ensure this image exists
    gitUrl: "https://github.com/Saxumoto/IM_Payroll_System",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Davao City Guide",
    description: "A comprehensive web application for discovering and sharing tourist attractions in Davao City, Philippines. Built with Django, this platform allows users to contribute attractions, rate and review them, and explore the city through an interactive map.",
    image: "/images/cg.png", // Ensure this image exists
    gitUrl: "https://github.com/Saxumoto/city_guide",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "My Portfolio Website",
    description: "A portfolio website showcasing my projects and skills, built with React and Tailwind CSS.",
    image: "/images/cg.png", // Ensure this image exists
    gitUrl: "https://github.com/Saxumoto/banlasan-portfolio",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      
      {/* Updated Layout:
        - Changed 'grid' to 'flex' 
        - Added 'justify-center' to center the cards
        - Added 'flex-wrap' so they wrap on small screens
      */}
      <ul ref={ref} className="flex flex-wrap justify-center gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            // Added explicit width classes to simulate grid columns but centered
            className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2.5rem)] max-w-md"
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;