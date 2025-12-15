import React from "react";
import Image from "next/image";

const journalEntries = [
  {
    title: "WELCOME TO MY LEARNING JOURNAL",
    image: "/images/j1.jpg",
    description: "This journal documents my learning experiences during Cebu-Bohol Educational Tour.",
  },
  {
    title: "WORLDTECH INFORMATION SOLUTIONS, INC.",
    image: "/images/j1.jpg",
    description: "Worldtech Information Solutions, Inc. is a Philippine-based IT consultancy and training company with offices in Cebu, Manila, and International presence in Australia and Singapore.",
  },
  {
    title: "CODECHUM",
    image: "/images/j4.jpg",
    description: "Codechum is an educational technology platform based in Cebu, Philippines, designed to make learning programming languages such as C, C++, Java, Python, and JavaScript. ",
  },
  {
    title: "RIVAN IT CEBU",
    image: "/images/j2.jpg",
    description: "Rivan IT Cebu is a training center. Established under the network of Rivan School of Technology Inc. (founded 1999) it specializes in IT and networking certification courses such as Cisco CCNA/CCNP, Linux, security, and VoIP.",
  },
  {
    title: "MATA TECHNOLOGIES, INC.",
    image: "/images/j3.jpg",
    description: "Mata Technologies Inc. is a homegrown provider of virtual tours for real estate in the Philippines. It is also the virtual reality map provider of tourist destinations in the counter.",
  },
  {
    title: "TAGBILARAN CITY DRRMO",
    image: "/images/j5.jpg",
    description: "Management ensures disaster prevention & mitigation, preparedness, response, recovery & rehabilitation for the City.",
  },
  {
    title: "IMPRESSION SHEET",
    image: "/images/j6.jpg",
    description: "This impression sheet is a document used to capture feedback, thoughts, and reflections about my experience, event, or learning during educational tour.",
  },
];

const JournalSection = () => {
  return (
    <section id="journal" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Journal</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {journalEntries.map((entry, idx) => (
            <div key={idx} className="bg-[#181818] p-4 rounded-xl border border-[#33353F] flex flex-col items-center">
              <Image
                src={entry.image}
                alt={entry.title}
                width={320}
                height={200}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
              <p className="text-[#ADB7BE] text-center">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;