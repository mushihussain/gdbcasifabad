const PeopleContainer = () => {
  return (
    <div className="people-container">
      <h1 className="text-3xl font-semibold text-center mb-6">Our Team</h1>
      <div className="flex flex-col space-y-6">
        <div className="people flex items-center space-x-4">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1741383816/user_eqzvbl.avif' alt="John Doe" className="w-20 h-20 rounded-full" />
          <p className="text-lg">
            <span className="font-semibold">Mr.Mushitaq Hussain</span><br /> Principal GDBC ASIFABAD <br /> Phone: +923452067342 <br /> E-mail: mushihussain@gmail.com
          </p>
        </div>
        <div className="people flex items-center space-x-4">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1741383816/user_eqzvbl.avif' alt="Anaa" className="w-20 h-20 rounded-full" />
          <p className="text-lg">
            <span className="font-semibold">Muhammad Zahid</span><br /> WORKER GDBC ASIFABAD <br /> Phone:+92 3131239619 <br /> E-mail: muhammadzahid@gmail.com
          </p>
        </div>
        <div className="people flex items-center space-x-4">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1741383816/user_eqzvbl.avif' alt="Ellie" className="w-20 h-20 rounded-full" />
          <p className="text-lg">
            <span className="font-semibold">Mr.Zakir</span><br />SENIOR CLERK<br /> Phone:+92 3009298186<br /> E-mail: zakirahmed@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleContainer;
