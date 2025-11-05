import React from "react";

const ExperienceSection = () => {
  const experiences = [
    { year: "2024 - NOW", role: "Interior Designer", company: "MAGNARECON" },
    { year: "2023", role: "Interior Designer", company: "PT INTINYATEKNOLOGI" },
    { year: "2021 - 2022", role: "Internship Interior Designer", company: "PT STUDIOSIXTYNINE" },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="px-4 py-2 text-center">
        <h3 className="text-3xl font-bold mt-2 text-[#181711] dark:text-white">
          Professional Experience
        </h3>
      </div>

      {/* Container fleksibel */}
      <div className="mt-12 flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-8 md:space-y-0 px-4">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-center bg-[#f5f4f0] dark:bg-[#2a271a] rounded-xl p-6 shadow-md w-full md:w-60
                       transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
          >
            <p className="text-sm font-semibold text-[#8a8460] dark:text-primary/70">
              {item.year}
            </p>
            <h4 className="text-xl font-bold mt-1 text-[#181711] dark:text-white text-center">
              {item.role}
            </h4>
            <p className="text-sm text-[#8a8460] dark:text-white/70 text-center">
              {item.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
