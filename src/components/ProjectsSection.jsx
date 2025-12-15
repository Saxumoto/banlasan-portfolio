"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Payroll Management System",
    description: "A comprehensive payroll management system built with Flask, featuring employee management, attendance tracking, leave management, and automated payroll processing.",
    image: "/images/im.png", 
    gitUrl: "https://github.com/Saxumoto/IM_Payroll_System",
    // CHANGED: Point to the image file so the "Eye" icon opens the full picture
    previewUrl: "/images/im.png", 
  },
  {
    id: 2,
    title: "Davao City Guide",
    description: "A comprehensive web application for discovering and sharing tourist attractions in Davao City, Philippines. Built with Django, this platform allows users to contribute attractions, rate and review them, and explore the city through an interactive map.",
    image: "/images/cg.png",
    gitUrl: "https://github.com/Saxumoto/city_guide",
    // CHANGED: Point to the image file so the "Eye" icon opens the full picture
    previewUrl: "/images/cg.png", 
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
      
      {/* CHANGED: Switched from 'grid' to 'flex' with 'justify-center'.
         This ensures that if you only have 2 items, they are centered on the screen 
         instead of sticking to the left.
      */}
      <ul ref={ref} className="flex flex-wrap justify-center gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            // Added explicit widths to mimic the grid look but keep centering working
            className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-md"
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