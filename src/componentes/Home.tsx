import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-brand-dark">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-brand-accent font-medium mb-2">Hola, mi nombre es</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-brand-text mb-2">
          Juan Carlos Sánchez Rodríguez
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-brand-muted mb-6">
          Desarrollador Web.
        </h2>
        <p className="text-brand-muted py-4 max-w-[700px] text-lg leading-relaxed">
          Desarrollador Full Stack especializado en la creación de soluciones digitales robustas y escalables. Transformo ideas complejas en experiencias web intuitivas y de alto rendimiento, con un enfoque firme en la calidad del código y la eficiencia del usuario.
        </p>

        <div>
          <Link to="work" smooth={true} duration={500} offset={-80}>
            <button className="text-brand-text group border-2 border-brand-accent px-6 py-3 my-2 flex items-center hover:bg-brand-accent/10 transition-colors duration-300 rounded font-medium">
              Ver Trabajo
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;