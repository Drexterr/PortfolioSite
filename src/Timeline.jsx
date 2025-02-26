import React from 'react';

const Timeline = () => {
  const experiences = [
    {
      title: 'Synergy Clothing',
      role: 'Web Developer Intern',
      period: 'Jan, 2024 - Sep, 2024',
    },
    {
      title: 'Freelancer',
      role: 'UI & Web Developer',
      period: 'Sep, 2022 - Dec, 2023',
    },
  ];

  return (
    <div className="min-h-screen flex items-center  mt-24 justify-center p-6">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-[#ffffff] mb-28 font-Montserrat text-center">Work Experiences</h1>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
            >

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFB22C] rounded-full"></div>


              <div
                className={`w-4/12 p-4 bg-[#FFB22C] border-amber-50 border-1 shadow-md rounded-lg ${index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'
                  }`}
              >
                <h2 className="text-2xl font-semibold font-Montserrat text-black">{experience.title}</h2>
                <p className="text-black">{experience.role}</p>
                <p className="text-black text-sm">{experience.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;