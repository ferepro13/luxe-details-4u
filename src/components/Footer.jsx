import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Luxe Details 4 U</h3>
          <p>Tienda de regalos en Matanzas</p>

          <div className="social-links">
            <a href="" target="_blank" rel="noopener noreferrer" id="facebook-link"><i className="fab fa-facebook-f"></i> Luxe Details 4 U</a>
            <a href="" target="_blank" rel="noopener noreferrer" id="instagram-link"><i className="fab fa-instagram"></i> @luxe.details.4u</a>
          </div>
          
        </div>
        <div className="footer-column">
          <h3>Contacto</h3>
          <p><i className="fas fa-map-marker-alt"></i> Dirección, Matanzas, Cuba</p>
          <p><i className="fas fa-phone"></i> +53 55555555</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2026 Luxe Details 4 U. Todos los derechos reservados.</p>
        <p> Nombre del desarrollador: Fabián Enrique Rojas Estrada</p>
        <p> Contacto del desarrollador: +53 56661510</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer