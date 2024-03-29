import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/95f2b3ee-5bd2-41ea-872e-ab392e9fe6e7" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-b-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Enviar el formulario a continuación o envíame un email a
            'juanca.cpc16@gmail.com'
          </p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Nombre" name="nombre" />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
        <textarea className="bg-[#ccd6f6] p-2" name="mensaje" rows="10" placeholder="Mensaje"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-6 mx-auto flex items-center">Colabora con nosotros</button>
      </form>
    </div>
  );
};

export default Contact;