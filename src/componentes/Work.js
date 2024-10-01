import React from "react";
import ImgLibros from "../assets/imagen-app-libros.jpg";
import ImgNotas from "../assets/imagen-app-notas.png";
import ImgTiempo from "../assets/imagen-app-tiempo.jpg";
import ImgWordle from "../assets/imagen-app-wordle.jpg"
import ImgPasoAPaso from "../assets/paso-a-paso.jpg"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500">
            Trabajo
          </p>
          <p className="py-6"> Echa un vistazo a algunos de mis proyectos </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}


          {/* Grid item */}
          <div
            // eslint-disable-next-line no-undef
            style={{ backgroundImage: `url(${ImgNotas})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Efecto Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Aplicación de Notas
              </span>
              <div className="pt-8 text-center">
                <a href="http://juancasanchez6.github.io/react-ejercicios" target="_blank" rel="noopener  noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/juancasanchez6/react-ejercicios.git"
                  target="noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div
            // eslint-disable-next-line no-undef
            style={{ backgroundImage: `url(${ImgTiempo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Efecto Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Aplicación del Tiempo
              </span>
              <div className="pt-8 text-center">
                <a href="http://juancasanchez6.github.io/react-weather"
                  target="_blank" rel="noopener  noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/juancasanchez6/react-weather.git"
                  target="noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid item */}
          <div
            // eslint-disable-next-line no-undef
            style={{ backgroundImage: `url(${ImgWordle})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Efecto Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Wordle
              </span>
              <div className="pt-8 text-center">
                <a href="https://juancasanchez6.github.io/wordle/"
                  target="_blank" rel="noopener  noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/juancasanchez6/wordle.git"
                  target="noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            // eslint-disable-next-line no-undef
            style={{ backgroundImage: `url(${ImgPasoAPaso})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Efecto Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Paso a Paso
              </span>
              <div className="pt-8 text-center">
                <a href="https://paso-a-paso-master.vercel.app/login"
                  target="_blank" rel="noopener  noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/juancasanchezz/paso-a-paso-master.git"
                  target="noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;