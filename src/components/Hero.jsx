import React from 'react'

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-content container'>
          <h1 className="hero-title">Un regalo perfecto, para cada ocasión</h1>
          <p className="hero-sub">Sorprende a seres queridos con nuestros presentes creativos y personalizables a tu gusto</p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-duration="700" data-aos-offset="50">
              <a href="#contact" className="btn" aria-label="Ir al formulario de contacto">Encargar</a>
              <a href="#catalog" className="btn btn-secondary" aria-label="Ver catálogo">Ver Catálogo</a>
          </div>
      </div>
    </section>
  )
}

export default Hero