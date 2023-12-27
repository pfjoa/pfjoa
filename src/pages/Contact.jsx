import React, { useState } from "react";
import Iframe from "react-iframe";
import Socials from "../components/Socials";
import axios from "axios";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_firstName: firstName,
        from_lastName: lastName,
        from_email: email,
        to_name: "PFJOA",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      if (res.data) {
        setSuccessMessage("it's done bich");
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container w-10/12 bg-white px-10 mx-auto mt-14 shadow-[0_1px_20px_0px_rgba(0,0,0,0.3)] rounded-3xl mb-10">
      <div className="py-[7vh] flex flex-col items-center justify-around gap-y-10 xl:flex-row">
        <div>
          <form
            onSubmit={handleSubmit}
            action="mailto:erramimohamed991@gmail.com"
            className="flex flex-col items-center xl:items-start"
          >
            <h1 className="text-[#040650] font-bold text-xl w-fit uppercase pb-2">
              Contactez-nous
            </h1>
            <p className="text-[#b8b6b6] pl-2 w-[300px] lg:w-[400px] pb-5">
              Contactez-nous si vous avez quelque chose à nous demander.
            </p>
            <div className="flex flex-col gap-[5vh] w-fit lg:w-[70%]">
              <div className="flex flex-col gap-[5vh] lg:flex-row">
                <input
                  type="text"
                  className="border border-gray-400 rounded-md  w-fit lg:w-[70%] py-1 pl-1 outline-none"
                  placeholder="Nom"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
                <input
                  type="text"
                  className="border border-gray-400 rounded-md w-fit lg:w-[70%] py-1 pl-1 outline-none"
                  placeholder="Prénom"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                />
              </div>
              <input
                type="email"
                className="border border-gray-400 rounded-md py-1 pl-1 outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <textarea
                className="border border-gray-400 h-32 rounded-md py-1 pl-1 resize-none outline-none"
                placeholder="Message..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#040650] w-fit text-white py-1.5 px-8 text-center rounded-lg hover:bg-[#020322]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-[5vh] items-center md:items-start">
          <div>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4776.052503882877!2d-1.918357004239631!3d34.67900891822265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd78656c0115d493%3A0xecd5bc5bbbe29b0c!2sPlateforme%20des%20jeunes%20oujda%20angad!5e0!3m2!1sfr!2sma!4v1701181604241!5m2!1sfr!2sma"
              width="100%"
              height="250px"
              className="rounded-2xl shadow-lg shadow-gray-400 xl:min-w-[25vw] xl:max-w-[30]"
            />
          </div>
          <div>
            <p className="text-sm xl:text-[16px]">
              <span className="text-[#f77f00]">Adresse</span> : Rue Oumam,
              Plateforme des jeunes
            </p>
            <p className="text-sm xl:text-[16px]">
              <span className="text-[#f77f00]">Phone Number</span> : 0600005502
            </p>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Contact;
