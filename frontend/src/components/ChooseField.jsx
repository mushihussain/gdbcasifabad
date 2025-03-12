import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';


const ChooseField = () => {
  const fields = [
    {
      "title": "Commerce",
      "description": "Govt. Degree Boys College Asifabad Karachi offers Commerce with expert faculty, covering Accounting, Banking, Business Studies, Economics, and Statistics.",
      "image": "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884466/commerce_g6efty.jpg"
    },
    {
      "title": "Pre-Engineering",
      "description": "Govt. Degree Boys College Asifabad Karachi provides Pre-Engineering with professional guidance in Civil, Electrical, Mechanical, Telecom, and more fields.",
      "image": "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884459/preengineering_jtoqhx.avif"
    },
    {
      "title": "Pre-Medical",
      "description": "Govt. Degree Boys College Asifabad Karachi prepares students for careers in Medicine, Pharmacy, Microbiology, and Surgery with expert mentorship.",
      "image": "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884459/premedical_egvsw2.avif"
    },
    {
      "title": "Computer Science",
      "description": "Govt. Degree Boys College Asifabad Karachi offers Computer Science with hands-on learning in programming, Physics, and Mathematics by skilled educators.",
      "image": "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884465/computer_kumdzo.avif"
    }
  ];

  return (
    <section className="text-center py-8 px-8 bg-gray-100 border-black border-b ">
      <h2 className="text-3xl font-serif mb-8">Choose Your Field of Study</h2>
      <div className="flex flex-col items-center">
        <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png' className="mb-8" alt="Decoration" />
      </div>
      <div className="flex flex-wrap justify-center lg:flex-nowrap gap-6 ">
        {fields.map((field, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 p-4 border border-gray-300 rounded-sm bg-white shadow-md transition-transform transform hover:scale-105 cursor-pointer text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <img src={field.image} alt={field.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2 font-serif  ">{field.title}</h3>
            <p className="text-gray-400 text-[12px] mb-4">{field.description}</p>
            <a to="/registration">
              <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default ChooseField;
