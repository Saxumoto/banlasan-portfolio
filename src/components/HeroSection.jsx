"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm {""}
                    </span>
                    <br></br>
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Chelsea Banlasan',
                            500, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            500,
                            'UI/UX Designer',
                            500,
                            'Web Enthusiast',
                            500
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />

                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mg-6 lg:text-xl">
                    An aspiring BSIT student with a passion for web development and design.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 mt-3 text-black"> Download CV</button>
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"></span>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
                    <Image
                        src="/images/profile.jpg"
                        alt="profile picture"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"                        
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroSection;