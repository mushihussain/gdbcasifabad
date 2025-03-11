import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.h1
        className="text-4xl font-bold text-gray-800"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        GDBC ASIFABAD
      </motion.h1>
    </div>
  );
};

export default Loader;
