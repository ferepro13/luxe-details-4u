import React from "react";
import logo from "/logo.jpg"

const Header = ({navVisible}) => {
    return <header>
        <div className="header-container">
            <div className="logo" aria-label="business logo">
                <img src={logo} alt="Logo"/>
                <span>Luxe Details 4 U</span>
            </div>

            <div className="mobile-menu" aria-label="Open nav menu" role="button" tabIndex="0" hidden={true}>
                <i className="fas fa-bars" aria-hidden="true">TAB</i>
            </div>
            
            <nav aria-label="Main menu">
                <ul className="list" style={Number(window.innerWidth)<560 ? (navVisible ? {display:"flex"} : {display:"none"}) : {display:"flex"}}>
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