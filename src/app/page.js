import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import JournalSection from "../components/JournalSection";
import CertificatesSection from "../components/CertificatesSection";
import GallerySection from "../components/GallerySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* AchievementsSection removed from here */}
        <AboutSection />
        <ProjectsSection />
        <JournalSection />
        <GallerySection />
        <CertificatesSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}