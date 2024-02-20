import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="mx-auto p-4 flex flex-col justify-center w-full h-full">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Sobre
            </p>
          </div>
          <div>
            <p>
              Persona proactiva y creativa, con
              gran capacidad de resolución y
              trabajo en equipo, .
              Excelentes capacidades sociales
              y comunicativas.
              Aptitud para asumir retos de
              manera motivacional
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;