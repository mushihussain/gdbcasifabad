import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const milestones = [
  {
    title: "Achievement of A1 Grade",
    description: "The institution secured an A1 grade with an 85% score, accompanied by a high percentage of A and B grades. This achievement reflects the institution’s dedication to academic excellence, rigorous standards, and student success, solidifying its reputation as a leading educational institute.",
    image: "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885479/milestone_gom2mt.jpg",
    link: "/",
  },
  {
    title: "Excellence in Sindh Games 2023-24",
    description: "The institution secured top positions in the Sindh Games 2023-24, demonstrating its commitment to sports and physical fitness. This milestone highlights the students' determination, teamwork, and competitive spirit, reinforcing a balance between academics and extracurricular activities.",
    image: "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885480/milestone3_mjagux.jpg",
    link: "/",
  },
  {
    title: "Highly Qualified Faculty & Programs",
    description: "The institution expanded its academic offerings by launching postgraduate programs in 2005. With expert faculty and specialized courses, it upholds the highest standards of teaching, research, and innovation, empowering students with advanced knowledge and career opportunities.",
    image: "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885480/milestone2_u2dd9r.webp",
    link: "/",
  },
  {
    title: "National Accreditation & Excellence",
    description: "In 2010, the institution received NAAC accreditation, recognizing its dedication to academic quality, research, and community service. This milestone reflects its continuous efforts to maintain world-class education standards and foster an environment of academic growth and excellence.",
    image: "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885480/milestone1_srlk5d.jpg",
    link: "/",
  },
  {
    title: "State-of-the-Art Research Center",
    description: "The inauguration of a research center in 2015 marked a new era of innovation and collaboration. This facility enables students and faculty to engage in groundbreaking research, fostering technological advancements, entrepreneurship, and interdisciplinary learning in various fields.",
    image: "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885616/milestone4_etgype.jpg",
    link: "/",
  },
  {
    title: "Vibrant Extracurricular & Culture",
    description: "Beyond academics, the institution offers cultural events, debates, leadership programs, and artistic activities. These initiatives foster teamwork, confidence, and communication skills, helping students develop holistically while excelling in both personal and professional endeavors.",
    image: "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885616/milestone4_etgype.jpg",
    link: "/",
  },
  {
    title: "Modern Classrooms & Digital Learning",
    description: "The institution has upgraded classrooms with smart boards, digital learning tools, and interactive technology. These advancements create a dynamic and engaging environment, enhancing students’ educational experience and ensuring alignment with evolving global learning trends.",
    image: "https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885616/milestone4_etgype.jpg",
    link: "/",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MilestoneCarousel = () => {
  return (
    <section className="py-12 px-8 bg-gray-100 text-center border-b border-black border-t">
      <h2 className="text-3xl font-serif mb-8">Milestones at a Glance</h2>
      <div className="flex flex-col items-center">
        <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png' className="mb-8" alt="Decoration" />
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        arrows={false}
        customDot={<CustomDot />}
      >
        {milestones.map((milestone, index) => (
          <div key={index} className="p-2 pb-6 mx-2 shadow-lg rounded-sm bg-white font-serif transform transition-transform hover:scale-105">
            <img src={milestone.image} alt={milestone.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="font-semibold text-gray-800 my-2">{milestone.title}</h3>
            <p className="text-gray-600 mb-4 text-[12px]">{milestone.description}</p>
            <a href={milestone.link}>
              <button className="btn-gradient">
                Read More
              </button>
            </a>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

const CustomDot = ({ onClick, ...rest }) => {
  const { onMove, index, active } = rest;
  return (
    <li
      className={`custom-dot ${active ? 'active' : ''}`}
      onClick={() => onClick()}
    >
      <button />
    </li>
  );
};

export default MilestoneCarousel;
