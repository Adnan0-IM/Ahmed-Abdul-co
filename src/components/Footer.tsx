import { Link } from "react-router-dom";
import bellIcon from "/assets/bell-icon.jpg";

// Footer navigation data
const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about-us" },
      { label: "Services", to: "/services" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", to: "#terms" },
      { label: "Privacy Policy", to: "#privacy" },
      { label: "Cookie Policy", to: "#cookies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "#blog" },
      { label: "Support", to: "#support" },
      { label: "Community", to: "#community" },
      { label: "Case Studies", to: "#case-studies" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary-soft-dark text-neutral-100">
      <div className="container mx-auto px-4  lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Footer Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4 lg:col-span-2">
              <h3 className="font-semibold text-lg ">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className=" hover:text-primary-hover transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Subscription */}
          <div className="lg:col-span-6 sm:col-span-2 md:col-span-3 bg-primary-dark bg-opacity-20 rounded-xl p-6 mt-8 lg:mt-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <h3 className="font-semibold text-xl  mb-2">
                  Stay Updated
                </h3>
                <p className=" text-sm leading-relaxed max-w-md">
                  Subscribe to our newsletter for the latest insights and
                  updates from Ahmed Abdul & Co.
                </p>
              </div>

              <form className="w-full md:w-auto md:flex-1 p-4">
                <div className="flex items-center bg-neutral-100 rounded-lg shadow-lg overflow-hidden relative lg:w-[300px]">
                  <div className="flex-shrink-0 pl-4">
                    <img
                      src={bellIcon}
                      alt="Newsletter"
                      className="w-5 h-5 object-contain opacity-60"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-3 text-neutral-900 bg-transparent border-0 focus:outline-none  "
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0  bg-primary-light shadow-md hover:scale-105 transition-all duration-200 hover:bg-primary-dark  text-white px-6 sm:px-4 py-3
                            font-medium text-sm  h-full flex items-center justify-center"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs  mt-2">
                  By subscribing, you agree to our Terms and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-dark mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p className=" text-sm">
              &copy; {new Date().getFullYear()} Ahmed Abdul & Co. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="#"
                className=" hover:text-white transition-colors text-sm"
              >
                Terms
              </Link>
              <Link
                to="#"
                className=" hover:text-white transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                to="#"
                className=" hover:text-white transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
