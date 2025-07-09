const Contact = () => {
  return (
    <section className="bg-[url(assets/Ahmad.svg)] bg-cover bg-white py-8">
      <h2 className="text-3xl text-center font-bold text-[navy] mb-4">
        CONTACT US
      </h2>
      <div
        id="contact"
        className="w-5/6 max-w-[1000px] mx-auto text-[navy]   bg-cover rounded-lg shadow-inherit bg-center block  bg-transparent p-12 border-2 border-solid boder-[navy] backdrop-blur-[10px]"
      >
        <div className=" flex flex-col   w-full">
          <h4 className="text-2xl text-[navy] mb-5 text-center font-bold">
            Send Us a Message
          </h4>
          <form action="submit_form.php" method="post">
            <div className="">
              <label className=" sr-only" htmlFor="fullName"></label>
              <input
                className="w-full p-2 border border-solid border-[#0a5fde] rounded-md  text-black"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="   flex flex-col sm:flex-row justify-between gap-1 my-1  text-[#555]">
              <div className=" flex-1 ">
                <label className="sr-only" htmlFor="email"></label>
                <input
                  className="w-full p-2 border border-solid border-[#0a5fde] rounded-md  text-black"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className=" flex-1 ">
                <label className="sr-only" htmlFor="phone"></label>
                <input
                  className="w-full p-2 border border-solid border-[#0a5fde] rounded-md  text-black"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="">
              <label className=" sr-only" htmlFor="message"></label>
              <textarea
                className="w-full p-2 border border-solid border-[#0a5fde] rounded-md  text-black resize-y"
                id="message"
                name="message"
                rows="5"
                placeholder="Drop Us Message"
                required
              ></textarea>
            </div>
            <div className=" flex items-center justify-center ">
              <input
                className="bg-[#0a5fde] text-white py-3 px-8 w-full lg:w-1/6  shadow-md hover:scale-105 transition-all duration-200  border-none rounded-md mt-3 hover:bg-[#0c92ff]"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
      <section className=" text-[navy] ">
        <div className="container mx-auto px-4 lg:px-8 py-8 backdrop-blur-[5px] ">
          <h3 className="text-2xl text-center font-bold">
            Ahmed Abdul & Co. (Chartered Accountants){" "}
          </h3>
          <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg leading-none  mt-4 ">
            <div className="bg-[#0a5fde] bg-[url(/assets/mail.png)] bg-contain border border-solid border-black bg-no-repeat bg-center backdrop-blur-[10px]  font-sans font-bold  text-white shadow-inset-dark mb-2 p-2 text-center ">
              <h4 className=" text-lg text-white">E-MAIL</h4>
              <p className="text-sm mb-2 p-2">
                <a
                  className=" no-underline text-white hover:underline "
                  href="mailto:ahmedmohammeabdul@gmail.com"
                >
                  ahmedmohammeabdul@gmail.com
                </a>
              </p>
              <p className="text-sm mb-2 p-2">
                <a
                  className=" no-underline text-white hover:underline "
                  href="mailto:ahmadabdulandco@gmail.com"
                >
                  ahmadabdulandco@gmail.com
                </a>
              </p>
            </div>
            <div className="bg-[#0a5fde] bg-[url(/assets/telephone.png)] bg-contain border border-solid border-white bg-no-repeat bg-center backdrop-blur-[10px]  font-sans font-bold  text-white shadow-inset-dark mb-2 p-2 text-center ">
              <h4 className=" text-lg text-white">TEL NO:</h4>
              <p className="text-sm mb-2 p-2">08060291557</p>
              <p className="text-sm mb-2 p-2">08025506963</p>
              <p className="text-sm mb-2 p-2">08039178840</p>
              <p className="text-sm mb-2 p-2">08028909191</p>
              <p className="text-sm mb-2 p-2">08030527135</p>
            </div>
            <div className="bg-[#0a5fde] bg-[url(/assets/gps.png)] bg-contain border border-solid border-orange bg-no-repeat bg-center backdrop-blur-[10px]  font-sans font-bold  text-white shadow-inset-dark mb-2 p-2 text-center ">
              <h4 className=" text-lg text-white">OFFICES:</h4>
              <p className="text-sm mb-2 p-2">
                Suite No.165 SKY Memorial Complex Opp. Unity Bank Jaiz Bank, Zoo
                Road, Kano, Kano State.
              </p>
              <p className="text-sm mb-2 p-2">
                Suite No1. 3rd Floor BOA Plaza, No 31/34 Guda Abdullahi Road,
                Farm Center, Kano Kano State, Nigeria.
              </p>
              <p className="text-sm mb-2 p-2">
                Plot 0517 Block A.2nd Floor Room 3 AA Plaza, Sokoto Road, Zaria,
                Kaduna State.
              </p>
              <p className="text-sm mb-2 p-2">
                No.9/9 Gida-Dudu, Yadi, Layin Dabinai, Dutse, Jigawa State.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
