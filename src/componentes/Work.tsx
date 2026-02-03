import React from "react";
import ImgLibros from "../assets/imagen-app-libros.jpg";
import ImgNotas from "../assets/imagen-app-notas.png";
import ImgTiempo from "../assets/imagen-app-tiempo.jpg";
import ImgWordle from "../assets/imagen-app-wordle.jpg"
import ImgPasoAPaso from "../assets/paso-a-paso.jpg"

interface Project {
  id: number;
  name: string;
  image: string;
  demoUrl: string;
  codeUrl: string;
  description?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Aplicación de Notas",
    image: ImgNotas,
    demoUrl: "http://juancasanchez6.github.io/react-ejercicios",
    codeUrl: "https://github.com/juancasanchez6/react-ejercicios.git",
    description: "Gestor de notas simple creado con React."
  },
  {
    id: 2,
    name: "Aplicación del Tiempo",
    image: ImgTiempo,
    demoUrl: "http://juancasanchez6.github.io/react-weather",
    codeUrl: "https://github.com/juancasanchez6/react-weather.git",
    description: "Consulta el clima actual usando OpenWeather API."
  },
  {
    id: 3,
    name: "Wordle Clone",
    image: ImgWordle,
    demoUrl: "https://juancasanchez6.github.io/wordle/",
    codeUrl: "https://github.com/juancasanchez6/wordle.git",
    description: "Recreación del popular juego de palabras."
  },
  {
    id: 4,
    name: "Paso a Paso",
    image: ImgPasoAPaso,
    demoUrl: "https://paso-a-paso-master.vercel.app/login",
    codeUrl: "https://github.com/juancasanchezz/paso-a-paso-master.git",
    description: "Plataforma educativa interactiva."
  }
];

const WorkItem: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-brand-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group ring-1 ring-white/5">
      <div
        className="h-48 w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-accent transition-colors">{project.name}</h3>
        {project.description && <p className="text-brand-muted text-sm mb-6">{project.description}</p>}

        <div className="flex gap-4">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-brand-accent/10 border border-brand-accent text-brand-accent rounded hover:bg-brand-accent hover:text-brand-dark font-medium transition-colors text-sm">
            Demo Live
          </a>
          <a href={project.codeUrl} target="_blank" rel="noopener"
            className="px-4 py-2 bg-transparent border border-brand-muted text-brand-muted rounded hover:border-brand-text hover:text-brand-text font-medium transition-colors text-sm">
            Código
          </a>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div id="work" className="w-full min-h-screen bg-brand-dark text-brand-text py-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-brand-text border-brand-accent">
            Proyectos de Formación
          </p>
          <div className="py-6">
            <p className="text-brand-muted">
              Proyectos desarrollados durante mi etapa de Formación Dual en <span className="text-brand-accent font-semibold">NOVIS S.L.</span>
            </p>
          </div>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <WorkItem key={item.id} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;