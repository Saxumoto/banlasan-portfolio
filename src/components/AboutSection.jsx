import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return <section className="text-white ">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-img.jpg" alt="about image" width={500} height={500} className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden" />
    </div>
    </section>
    
  
}

export default AboutSection
