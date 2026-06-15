import React from "react";

const Header = () => {
    return <header>
        <div className="header-container">
            <div className="logo" aria-label="business logo">
                <img src="some" alt="Logo"/>
                <span>Luxe Details 4u</span>
            </div>
            <div className="mobile-menu" aria-label="Open nav menu" role="button" tabIndex="0" hidden={true}>
                <i className="fas fa-bars" aria-hidden="true"></i>
            </div>
            <nav aria-label="Main menu">
                <ul hidden = {false}>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#history">Conócenos</a></li>
                    <li><a href="#catalog">Catálogo</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
             </nav>
        </div>
    </header>;
};

export default Header;