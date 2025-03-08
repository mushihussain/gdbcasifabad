import MasonryLayout from "./MasonryLayout";

const Gallery = () => {
  const images = [
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383069/IMG-20250221-WA0026_zkni2z.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383074/pic1_ukdyz0.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383073/IMG-20250226-WA0003_tvyndy.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383071/IMG-20250221-WA0032_lnpstg.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1741383074/IMG-20250307-WA0013_cyigiz.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383074/IMG-20250307-WA0012_gcgkqn.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383073/IMG-20250226-WA0002_r4pwtv.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1741383071/IMG-20250221-WA0029_wgazov.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383072/IMG-20250221-WA0037_eldygr.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383066/IMG-20250221-WA0011_ffoowd.jpg ' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383072/IMG-20250221-WA0037_eldygr.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1741383067/IMG-20250221-WA0015_uye1qn.jpg' },
  ];
  return (
    <>
      <div className="p-6 max-w-full mx-auto w-full bg-gray-100 border-black border-b">
        <h2 className="text-2xl md:text-3xl mb-4 font-serif text-center mt-6">
          Gallery of College Activities
        </h2>
        <div className="flex flex-col items-center">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png' className="mb-8 mt-7" alt="Decoration" />
        </div>
        <div className="p-4 text-gray-800 text-center">
          <p className="mb-4">
            Explore the vibrant campus life of our college through these images, showcasing our commitment to education, sports, and extracurricular activities.
          </p>
        </div>

        <MasonryLayout images={images} />
      </div>
    </>
  );
};

export default Gallery;
