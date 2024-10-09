import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>Central Restaurant</h1>
            <p>Bienvenidos a Central, el corazón de la gastronomía peruana en Lima. En nuestro restaurante, te invitamos a explorar una experiencia culinaria única, donde cada plato es una celebración de los sabores y tradiciones peruanas. Nuestro chef utiliza ingredientes frescos y de alta calidad para crear auténticas delicias que reflejan la rica diversidad de nuestra cultura. Desde ceviches frescos hasta exquisitas causas y platos de fusión, cada bocado te llevará en un viaje a través de la riqueza gastronómica de Perú. Ven y descubre por qué Central es el destino perfecto para los amantes de la buena comida.</p>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/CentralRestaurante">
                  <img src={assets.facebook_icon} alt="" />
                </a>
                <a href="https://twitter.com/centralrest?lang=es">
                  <img src={assets.twitter_icon} alt="" />
                </a>
                <a href="https://www.linkedin.com/company/centralrestaurante/?originalSubdomain=pe">
                  <img src={assets.linkedin_icon} alt="" />
                </a>

            </div>
        </div>
        <div className="footer-content-center">
            <h2>EMPRESA</h2>
            <ul>
                <li>Inicio</li>
                <li>Sobre nosotros</li>
                <li>Delivery</li>
                <li>Política de Privacidad</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTÁCTANOS</h2>
            <ul>
                <li>Teléfono: (01) 123-4567</li>
                <li>Email: contacto@centralperuano.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Central. Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer
