import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Sobre
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hola, me llamo Juan Carlos Sánchez Rodríguez</p>
          </div>
          <div>
            <p>
              Hola soy un desarrollador web, que tiene diferentes experiencias y
              ha estudiado Ingeniería de Sonido e Imagen en la Universidad
              Politécnica de Madrid y una FP superior de Desarrollador de
              Aplicaciones Web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
