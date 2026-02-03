import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full min-h-screen bg-brand-dark flex justify-center items-center p-4 py-20'>
      <form method='POST' action="https://getform.io/f/95f2b3ee-5bd2-41ea-872e-ab392e9fe6e7" className='flex flex-col max-w-[600px] w-full bg-brand-card p-8 rounded-lg shadow-xl border border-brand-muted/10'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-brand-accent text-brand-text'>Contacto</p>
          <p className='text-brand-muted py-4'>Envíame un mensaje o un correo a - <span className='text-brand-accent'>tuemail@ejemplo.com</span></p>
        </div>
        <input className='bg-brand-dark p-3 text-brand-text border border-brand-muted/20 rounded focus:outline-none focus:border-brand-accent transition-colors' type="text" placeholder='Nombre' name='name' />
        <input className='my-4 p-3 bg-brand-dark text-brand-text border border-brand-muted/20 rounded focus:outline-none focus:border-brand-accent transition-colors' type="email" placeholder='Email' name='email' />
        <textarea className='bg-brand-dark p-3 text-brand-text border border-brand-muted/20 rounded focus:outline-none focus:border-brand-accent transition-colors' name="message" rows={10} placeholder='Mensaje'></textarea>
        <button className='text-brand-text border-2 border-brand-accent hover:bg-brand-accent hover:text-brand-dark px-6 py-3 my-8 mx-auto flex items-center rounded font-bold transition-all duration-300'>
          Enviar Mensaje
        </button>
      </form>
    </div>
  )
}

export default Contact