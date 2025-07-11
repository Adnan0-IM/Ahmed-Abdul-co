import success from "/assets/success.jpg";
import contract from "/assets/contract.jpg";
import handshake from "/assets/handshake.jpg";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero
        title={"AHMED ABDUL & CO."}
        title2={"(Chartered Accountants)"}
        content={
          " is a seasoned firm of Chartered Accountants offering world-class professional services in auditing and assurance, tax analysis/management, business advisory, and more. Our team of experienced professionals is committed to delivering world-class solutions tailored to your needs."
        }
        buttonText={" Explore Our Services"}
      />

      <section className="   text-[#eaf0f7] text-center bg-white ">
        <div className="container lg:px-8 mx-auto px-4 flex py-8 flex-col sm:flex-row justify-between items-center gap-5">
          <div>
            <h1 className="text-[navy] text-3xl md:text-4xl font-bold">
              Professional Services You Can Trust
            </h1>
            <p className="text-[navy] text-lg md:text-xl mt-8">
              At Ahmed Abdul & Co, we offer a wide range of professional
              services that are tailored to meet your business needs.
              <br /> With our expertise and commitment to excellence, we strive
              to deliver value-added solutions that enhance your business
              efficiency and effectiveness.
            </p>
          </div>
          <div className="flex flex-col bg-[#0a5fde] p-[10px] w-[4/6]  shadow-inset-dark">
            <div className="border-2 border-white rounded-[4px] p-[5px]  m-[10px] text-center w-fit backdrop-blur-[5px]">
              <h2 className="text-white text-2xl font-bold p-4">
                Professionalism
              </h2>
              <p className="text-[ghostwhite] p-4">
                Our team of experienced professionals ensures the highest level
                of professionalism in all our engagements.
              </p>
            </div>
            <div className="border-2 border-white rounded-[4px] p-[5px]  m-[10px] text-center w-fit backdrop-blur-[5px] text-white">
              <h2 className="text-white text-2xl font-bold p-4">
                Client Satisfaction
              </h2>
              <p className="text-[ghostwhite] p-4">
                We prioritize client satisfaction and strive to exceed
                expectations in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="   bg-[#0a5fde]   ">
        <div className="container lg:px-8 mx-auto py-8 px-4 text-white text-center flex flex-col max-lg:flex-col min-lg:flex-row  gap-4 p-4 justify-center items-center">
          <div className="max-w-3/6">
            <h1 id="privacy" className="text-3xl md:text-4xl text-[#1e2b40] font-bold ">
              Protecting Your Privacy and Confidentiality
            </h1>
            <h4 className="font-bold mt-4 max-w-5xl">
              At Ahmed Abdul & Co, we prioritize the confidentiality and privacy
              of our clients. We understand the importance of safeguarding
              personal and corporate information, and we take every measure to
              ensure it remains secure.
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  text-[navy] justify-between">
            <div className=" border-2 border-solid border-[lightblue] rounded-sm text-white  text-center flex flex-col items-center backdrop-blur-[10px] shadow-inset-dark">
              <img src={success} className="w-full h-[40vh]" />{" "}
              <div className="flex flex-col gap-2 p-2">
                <h2 className="font-bold ">Commitment to Excellence</h2>
                <p>
                  Our team is dedicated to providing high-quality services with
                  professional skepticism and a pursuit of excellence
                </p>
              </div>
            </div>
            <div className=" border-2 border-solid border-[lightblue] rounded-sm text-white  text-center flex flex-col items-center backdrop-blur-[10px] shadow-inset-dark">
              <img src={contract} className="w-full h-[40vh]" />{" "}
              <div className="flex flex-col gap-2 p-2">
                <h2 className="font-bold ">
                  Maintaining Integrity at All Times
                </h2>
                <p>
                  We adhere to the highest standards of integrity, ensuring
                  honesty and professionalism in all our interactions.
                </p>
              </div>
            </div>
            <div className=" border-2 border-solid border-[lightblue] rounded-sm text-white  text-center flex flex-col items-center backdrop-blur-[10px] shadow-inset-dark">
              <img src={handshake} className="w-full h-[40vh]" />{" "}
              <div className="flex flex-col gap-2 p-2">
                <h2 className="font-bold ">
                  Delivering Value-Added Solutions
                </h2>
                <p>
                  We offer industry-leading consultancy and professional
                  services that enhance your business efficiency and
                  effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-neutral-50">
        <FAQ />
      </div>
    </>
  );
};

export default Home;
