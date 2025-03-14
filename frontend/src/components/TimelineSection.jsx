import React from 'react';

const milestones = [
  { year: "2004", icon: "📚", description: "Commerce" },
  { year: "2005", icon: "🔬", description: "Pre-Engineering" },
  { year: "2006", icon: "🩺", description: "Pre-Medical" },
  { year: "2018", icon: "💻", description: "Computer Science" },
];

const Timeline = () => {
  return (
    <section className="bg-purple-900 text-white py-8 md:py-16 font-serif">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">SHAPING INTO REALITY</h2>
        <div className="flex justify-center mb-8">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png' className="w-24 h-auto" alt="Decoration" />
        </div>
        <p className="max-w-lg md:max-w-2xl mx-auto mb-8 md:mb-12">
          GDBC Asifabad Karachi Boys College has a rich history of providing quality education to its students. Since its inception, the college has been committed to fostering academic excellence, personal growth, and social responsibility.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-2">{milestone.icon}</div>
              <div className="text-lg md:text-xl font-bold">{milestone.year}</div>
              <div className="text-sm md:text-md">{milestone.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
