import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Reacting from '../assets/react.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full min-h-screen bg-brand-dark text-brand-text py-20'>
      {/* Contenedor */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-brand-accent text-brand-text'>Habilidades</p>
          <p className='py-6 text-brand-muted'>Tech Stack & Herramientas</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8'>

          <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-300 bg-brand-card p-4 rounded-lg group'>
            <img className='w-20 mx-auto group-hover:grayscale-0 grayscale transition-all duration-300' src={HTML} alt="html-icon" />
            <p className='my-4 font-bold'>HTML</p>
          </div>

          <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-300 bg-brand-card p-4 rounded-lg group'>
            <img className='w-20 mx-auto group-hover:grayscale-0 grayscale transition-all duration-300' src={CSS} alt="CSS-icon" />
            <p className='my-4 font-bold'>CSS</p>
          </div>

          <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-300 bg-brand-card p-4 rounded-lg group'>
            <img className='w-20 mx-auto group-hover:grayscale-0 grayscale transition-all duration-300' src={JavaScript} alt="JavaScript-icon" />
            <p className='my-4 font-bold'>JavaScript</p>
          </div>

          <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-300 bg-brand-card p-4 rounded-lg group'>
            <img className='w-20 mx-auto group-hover:grayscale-0 grayscale transition-all duration-300' src={Reacting} alt="Reacting-icon" />
            <p className='my-4 font-bold'>React</p>
          </div>

          <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-300 bg-brand-card p-4 rounded-lg group'>
            <img className='w-20 mx-auto group-hover:grayscale-0 grayscale transition-all duration-300' src={GitHub} alt="GitHub-icon" />
            <p className='my-4 font-bold'>GitHub</p>
          </div>

          <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-300 bg-brand-card p-4 rounded-lg group'>
            <img className='w-20 mx-auto group-hover:grayscale-0 grayscale transition-all duration-300' src={Tailwind} alt="Tailwind-icon" />
            <p className='my-4 font-bold'>Tailwind</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
