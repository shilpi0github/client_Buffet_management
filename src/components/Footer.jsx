

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">DeliciousShilpi</h1>
          <p className="text-sm">
            Our every plate of serving is an emotion. We care about your time and money. Your time is most precious for us.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Our other outlets</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="/mumbai"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Mumbai
            </a>
            <a
              href="/delhi"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Delhi
            </a>
            <a
              href="/bangalore"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Bangalore
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="/dishes"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Our meals
            </a>
            <a
              href="/premium-menu"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="shilpi.shilpi19981@gmail.com"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Email
            </a>
            <a
              href="tel:+917505761707"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              +91 7505761707
            </a>
            <a
              href="#"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Linkedin
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-brightColor"> Shilpi</span> |
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
