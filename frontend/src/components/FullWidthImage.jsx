const FullWidthImage = () => {
  return (
    <section
    className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: "url('https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885480/milestone3_mjagux.jpg')" }}
  >
    <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
      <h1 className="text-4xl md:text-6xl font-bold font-playfair text-white mb-4">
        Welcome to GDBC Asifabad
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8">
        Empowering the future through excellence in education.
      </p>
      <a
        href="/apply"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
      >
        Register Now
      </a>
    </div>
  </section>
  );
};

export default FullWidthImage;
