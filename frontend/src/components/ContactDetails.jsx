import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <section id="contact-details" className="section-p1 py-8 px-4 md:py-10 md:px-6 bg-gray-100 text-gray-800 font-serif">
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto">
        <div className="details w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <span className="text-md md:text-lg text-purple-600">Get in touch</span>
          <h2 className="text-2xl md:text-3xl font-semibold my-3 md:my-4">
            GDBC ASIFABAD KARACHI
          </h2>
          <div className="flex items-center mb-3 md:mb-4">
            <FaMapMarkerAlt className="text-purple-600 mr-2 text-lg md:text-xl" />
            <p className="text-sm md:text-base">W227+95R, Manghopir Rd, Pak Colony Hasrat Mohani Colony Bara Board, Karachi, Pakistan</p>
          </div>
          <div className="flex items-center mb-3 md:mb-4">
            <FaEnvelope className="text-purple-600 mr-2 text-lg md:text-xl" />
            <p className="text-sm md:text-base">mushihussain@gmail.com</p>
          </div>
          <div className="flex items-center mb-3 md:mb-4">
            <FaPhoneAlt className="text-purple-600 mr-2 text-lg md:text-xl" />
            <p className="text-sm md:text-base">+923452067342</p>
          </div>
          <div className="flex items-center mb-3 md:mb-4">
            <FaClock className="text-purple-600 mr-2 text-lg md:text-xl" />
            <p className="text-sm md:text-base">Monday - Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
        {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231708.87724855886!2d67.0536804!3d24.8484346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fcf95c21aab%3A0x4d4764832e28e81!2sGovernment%20Degree%20Boys%20College%20Asifabad%20Asifabad!5e0!3m2!1sen!2s!4v1741383362483!5m2!1sen!2s"
            width="100%"
            height="300"
            className="md:h-450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
