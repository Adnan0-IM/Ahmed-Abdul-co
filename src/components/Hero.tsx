import { Link } from "react-router-dom";

interface heroProps {
  title: string;
  title2?: string;
  content?: string;
  buttonText?: string;
}
// bg-[rgba(0, 0, 128, 0.2)]
const Hero = ({ title, title2, content, buttonText }: heroProps) => {
  return (
    <section className="bg-[url(/assets/ff.jpg)] bg-cover bg-no-repeat relative">
      <div className="absolute backdrop-blur-md top-0 left-0 bottom-0 inset-0 md:top-0 md:left-0 md:bottom-0 md:inset-1/2 -z-0 " />
      <div className="relative  z-10  ">
        <div className="container mx-auto px-4 lg:px-8 ">
          <div className="flex flex-col text-center items-center md:items-start md:text-start gap-6 py-24  md:w-1/2 text-white">
            {title && (
              <h1 className="text-2xl sm:text-3xl  font-bold">{title}</h1>
            )}
            {title2 && <h2 className="text-2xl sm:text-2xl font-bold">{title2}</h2>}
            {content && <p className="text-base sm:text-lg">{content}</p>}
            {buttonText && (
              <Link
                className="bg-primary-light text-base mt-4 md:mt-0 shadow-md hover:scale-105 w-full md:w-1/2 transition-all duration-200 hover:bg-primary-dark text-center font-medium p-4 rounded-md  "
                to="/services"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
