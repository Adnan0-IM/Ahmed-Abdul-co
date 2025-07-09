import Hero from "../components/Hero";
import logo from "/assets/logo2.png";
import ogarnogram from "/assets/organogram.jpg";

const About = () => {
  return (
    <>
      <Hero
        title={"AHMED ABDUL & CO."}
        title2={"(Chartered Accountants)"}
        content={"ABOUT US"}
      />
      <section className="font-sm text-[16px] text-white bg-[#0a5fde]">
        <div className="container lg:px-8 mx-auto px-4 py-8 grid sm:grid-cols-2 items-center ">
          <img className="w-5/6 rounded-full" src={logo} alt="About Us" />

          <div className=" text-justify">
            <p>
              <b className="text-2xl">Ahmed Abdul & Co </b>(Chartered
              Accountants) is a seasoned firm of Chartered Accountants duly
              licensed and approved by the Institute of Chartered Accountants of
              Nigeria (ICAN) to practice as External Auditors and Consultants.
              We have a team of professionals with vast experience who are
              committed to provision of world class professional services in
              areas that cover auditing and assurance, tax analysis/management
              services, business advisory, insolvency, public sector and
              corporate finance, strategic management, human resource services,
              corporate training, business risk analysis, family business and
              general management consultancy that are meant to serve general
              purposes to our business clients. Our impressive scope of client
              list over the years of professional services encompasses a wide
              range of industries and sectors of economic activities. By getting
              to know our clients and good understanding of their objectives,
              they derive lots of benefit from our expertise and resources.
              Having grown up from our establishment, our team of specialists
              and experienced professionals provide services to our various
              clients with high sense of professionalism and expertise.
              Assurance and other non-audit services delivered by our
              specialists are in conformity with contemporary world best
              practices of accountancy, auditing, tax and other management
              service standards.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white text-[#151f48] ">
        <div className="container lg:px-8 mx-auto px-4 py-8">
          <h1 className="text-4xl text-center ">Our Policy Statement</h1>
          <p className="my-4 text-center">
            We, at Ahmed Abdul & Co (Chartered Accountants) do offer our clients
            personal, corporate and professional guarantee of:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border-2 border-solid border-white rounded-lg text-[#151f48]  text-base shadow-sm bg-[#256dd3]">
              <h3 className="font-bold text-center  p-4">
                Confidentiality and Privacy
              </h3>
              <p className="px-4 pb-4">
                We offer to all our clients, highest level of confidentiality,
                privacy and discretion in dealing with personal and corporate
                affairs
              </p>
            </div>
            <div className="border-2 border-solid border-white rounded-lg text-[#151f48]  text-base shadow-sm bg-[#256dd3]">
              <h3 className="font-bold text-center p-4">Value Proposition</h3>
              <p className="px-4 pb-4">
                We offer industry best practice consultancy and professional
                services that is cost effective, value added work to enhance our
                clients’ business efficiency and effectiveness on timely basis.
                We do commit ourselves to achieve customers’ satisfaction
                first..
              </p>
            </div>
            <div className="border-2 border-solid border-white rounded-lg text-[#151f48]  text-base shadow-sm bg-[#256dd3]">
              <h3 className="font-bold text-center p-4">
                Quality and Excellence
              </h3>
              <p className="px-4 pb-4">
                We do offer our clients qualitative services with professional
                skepticism and strive for excellence in our service delivery in
                line with modern practice. We always pursue new avenues that can
                enhance our professional service delivery.
              </p>
            </div>
            <div className="border-2 border-solid border-white rounded-lg text-[#151f48]  text-base shadow-sm bg-[#256dd3]">
              <h3 className="font-bold text-center p-4">Integrity</h3>
              <p className="px-4 pb-4">
                We provide services at all time with professional objectivity,
                due diligence and decorum to ensure honesty and integrity within
                the purview of legislative and regulatory requirements and we do
                decline to act if the possibility of any conflict of interest
                arises.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white text-[#0d1321] ">
        <div className="container lg:px-8 mx-auto px-4 py-4">
          <div>
            <h1 className="text-4xl text-center ">Our Philosophy</h1>
            <p className="text-2xl text-center my-4">
              Ensuring that a comprehensive and qualitative service is provided
              to our clients to meet their general needs and challenges across
              the various sectors of the economy.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8 items-center  text-xl ">
            <div className="w-3/4 sm:w-[45%] bg-[url('/assets/handshake.jpg')] bg-cover bg-no-repeat font-bold text-white border-2 border-solid border-black rounded-xl h-[350px]">
              <h3 className="bg-transparent p-7 text-center text-2xl">
                Our Vision
              </h3>
              <p className="bg-transparent p-7 text-center">
                Establishing business environment where corporate bodies, firms
                and individual businesses comply with auditing, accounting and
                regulatory body requirements on business establishment,
                management and sustainability
              </p>
            </div>
            <div className="w-3/4 sm:w-[45%] bg-[url('/assets/finance.jpg')] bg-cover bg-no-repeat font-bold text-white border-2 border-solid border-black rounded-xl h-[350px]">
              <h3 className="bg-transparent p-7 text-center text-2xl">
                Our Mission
              </h3>
              <p className="bg-transparent p-7 text-center">
                Provision of qualitative and standard professional services that
                add value to our client’s business, lives and status
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-[darkblue] bg-white">
        <div className="container lg:px-8 mx-auto px-4 py-8 w-full flex items-center justify-center  ">
          <img src={ogarnogram} alt="Company Organogram" />
        </div>
      </div>
    </>
  );
};

export default About;
