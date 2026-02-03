import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen bg-brand-dark text-brand-text py-20">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">

        {/* Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-brand-accent text-brand-text">
            Sobre mí
          </p>
        </div>

        {/* Intro Grid */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="sm:text-right text-4xl font-bold text-brand-text">
            <p>Hola. Soy Juan Carlos, encantado de conocerte. Por favor, echa un vistazo.</p>
          </div>
          <div>
            <p className="text-brand-muted text-lg leading-relaxed">
              Con una sólida base técnica en desarrollo web y multiplataforma, mi carrera se centra en la ingeniería de software orientada a resultados. Me especializo en el ecosistema JavaScript/TypeScript (React, Node.js), construyendo aplicaciones que no solo cumplen con los requisitos funcionales, sino que priorizan la escalabilidad y la experiencia del usuario.
              <br /><br />
              Mi enfoque combina una resolución de problemas analítica con una adaptabilidad constante a las tecnologías emergentes, permitiéndome aportar valor inmediato y soluciones innovadoras en entornos de desarrollo dinámicos.
            </p>
          </div>
        </div>

        {/* Experiencia Profesional */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-brand-accent mb-6 flex items-center">
            <span className="mr-2 text-brand-muted">01.</span> Experiencia Profesional
          </h3>

          <div className="space-y-6">
            {/* Experience Item */}
            <div className="bg-brand-card p-6 rounded shadow-md border-l-4 border-brand-accent transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
              <div className="flex justify-between items-baseline mb-2 flex-wrap">
                <h4 className="text-xl font-bold text-brand-text">Desarrollador Full Stack</h4>
                <span className="text-sm text-brand-accent font-mono bg-brand-dark/50 px-2 py-1 rounded">Diputación de Cáceres</span>
              </div>
              <ul className="list-disc list-inside text-brand-muted space-y-2 mt-4">
                <li>Diseño, desarrollo y mantenimiento del <span className="text-brand-text font-medium">Área Privada del Alumno para la Formación</span>.</li>
                <li>Participación activa en el desarrollo de la aplicación para la <span className="text-brand-text font-medium">Gestión de Obras</span>.</li>
              </ul>
            </div>

            {/* Experience Item */}
            <div className="bg-brand-card p-6 rounded shadow-md border-l-4 border-brand-accent transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
              <div className="flex justify-between items-baseline mb-2 flex-wrap">
                <h4 className="text-xl font-bold text-brand-text">Gestión y Mantenimiento</h4>
                <span className="text-sm text-brand-accent font-mono bg-brand-dark/50 px-2 py-1 rounded">Diputación de Badajoz</span>
              </div>
              <p className="text-brand-muted mt-4">
                Encargado del mantenimiento de la plataforma de <span className="text-brand-text font-medium">Formación y Capacitación para el Empleo</span>.
              </p>
            </div>

            {/* Experience Item */}
            <div className="bg-brand-card p-6 rounded shadow-md border-l-4 border-brand-accent transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
              <div className="flex justify-between items-baseline mb-2 flex-wrap">
                <h4 className="text-xl font-bold text-brand-text">Desarrollador Web</h4>
                <span className="text-sm text-brand-accent font-mono bg-brand-dark/50 px-2 py-1 rounded">Instituto Extremeño de Cualificaciones</span>
              </div>
              <p className="text-brand-muted mt-4">
                Participación en la evolución y en el mantenimiento de la plataforma de <span className="text-brand-text font-medium">IECA</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Formación NOVIS */}
        <div className="mt-16 mb-20">
          <h3 className="text-2xl font-bold text-brand-accent mb-6 flex items-center">
            <span className="mr-2 text-brand-muted">02.</span> Formación Dual (NOVIS S.L.)
          </h3>
          <div className="bg-brand-card p-8 rounded-lg shadow-inner border border-brand-muted/20">
            <p className="text-brand-text text-lg mb-4">
              Durante mi formación en el grado de Desarrollo de Aplicaciones Web (Modalidad Dual en NOVIS S.L.), desarrollé una serie de proyectos prácticos que demuestran mis habilidades técnicas fundamentales con React y desarrollo web moderno.
            </p>
            <p className="text-brand-muted">
              Los proyectos listados en la sección de <span className="text-brand-accent font-medium">Proyectos</span> a continuación corresponden a esta etapa de formación práctica.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;