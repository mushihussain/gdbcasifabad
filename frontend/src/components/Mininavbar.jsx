import { Link } from 'react-router-dom';
const MiniNavbar = () => {
    return (
      <div className="bg-whitesmoke text-gray-800 py-2 px-4 border-b border-t border-black flex flex-col items-center text-xs hidden md:flex">
        <div className="flex items-center justify-center space-x-4 mb-1">
           <Link to="/ContactUs" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">❓</span> Have any questions?
          </Link>
          <a href="mailto:info@gdbcasifabad.edu.pk" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">📧</span> info@gdbcasifabad.edu.pk
          </a>
          <a href="tel:+923452067342" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">📞</span> +923452067342  
          </a>
          <a href="tel:+923009298186" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">📞</span> +923009298186
          </a>
          <Link to="https://forms.gle/cxdoBf49455ex6Ld8" className="flex items-center text-sm hover:text-purple-600">
            <span className="mr-1">📝</span> Registration Form
          </Link>
        </div>
      </div>
    );
  };
  
  export default MiniNavbar;
