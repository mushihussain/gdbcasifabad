import { motion } from 'framer-motion';

const History = () => {
  return (
    <div className="md:mx-8 border-b border-t py-12 text-black">
      {/* Title */}
      <motion.h1
        className="text-center text-3xl font-serif mb-8 font-playfair tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        History & Background
      </motion.h1>

      {/* Decorative Line */}
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png"
          className="w-32 mb-8 opacity-80"
          alt="Decoration"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-center w-[90%] mx-auto gap-8">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 p-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg  leading-relaxed">
            Our college has a rich history dating back to <span className="text-purple-400 font-semibold">1950</span>, founded by visionary educators. We have remained committed to providing high-quality education while evolving with modern teaching methods and state-of-the-art facilities.  
            <br /><br />
            With a faculty of experienced professionals, we emphasize academic excellence and industry collaboration. Our students benefit from internship opportunities, research collaborations, and career placements that set them on the path to success.
            <br /><br />
            We champion <span className="text-purple-400 font-semibold">inclusivity, diversity, and social responsibility</span>, encouraging students to participate in community service and extracurricular activities that foster personal and professional growth.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://res.cloudinary.com/dzr3drmyk/image/upload/v1741806451/gdbc_enhanced_pa3rv4.png"
            alt="College Hero"
            className="w-full h-full max-h-[450px] object-cover rounded-md shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default History;
