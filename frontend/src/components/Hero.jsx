import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <img
        src="https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884600/college_h6vny9.jpg"
        alt="Hero Background"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">GDBC Asifabad</h1>
        <p className="text-lg md:text-xl mb-8">
          Empowering minds and shaping the future of education.
        </p>
        <Link
          to="/about"
          className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition duration-300"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
