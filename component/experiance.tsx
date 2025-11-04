import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      year: "2018 - Present",
      role: "Lead Interior Designer",
      company: "Sterling & Co. Interiors",
      desc:
        "Leading high-end residential and commercial projects from concept to completion. Responsible for client acquisition, design development, and project management, ensuring a seamless and luxurious client experience.",
    },
    {
      year: "2014 - 2018",
      role: "Senior Designer",
      company: "Elysian Design House",
      desc:
        "Managed a team of junior designers and oversaw multiple luxury hospitality projects. Specialized in material sourcing and bespoke furniture design, contributing to award-winning hotel interiors.",
    },
    {
      year: "2012 - 2014",
      role: "Junior Interior Designer",
      company: "Atelier Interiors",
      desc:
        "Assisted senior designers in creating design presentations, 3D renderings, and material boards. Gained foundational experience in client relations and on-site project coordination.",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="px-4 py-2 text-center">
        <h3 className="text-3xl font-bold mt-2 text-[#181711] dark:text-white">
          Professional Experience
        </h3>
      </div>

      <div className="mt-12 space-y-12 px-4">
        {experiences.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <p className="text-sm font-semibold text-[#8a8460] dark:text-primary/70">
                {item.year}
              </p>
              <h4 className="text-xl font-bold mt-1 text-[#181711] dark:text-white">
                {item.role}
              </h4>
              <p className="text-sm text-[#8a8460] dark:text-white/70">
                {item.company}
              </p>
            </div>

            <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-[#f5f4f0] dark:border-[#2a271a] pt-8 md:pt-0 md:pl-8">
              <p className="text-base leading-relaxed text-[#181711] dark:text-white/90">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
