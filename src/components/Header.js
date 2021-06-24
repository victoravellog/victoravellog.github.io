import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LineIcon from 'react-lineicons';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    const [information, setInformation] = useState("");
    const [navigationToggler, setNavigationToggler] = useState(false);

    const handleNavigationToggler = () => {
        setNavigationToggler(!navigationToggler);
    }

    useEffect(() => {
        if(props.langENG){
            axios.get("/api/information").then((response) => {
                setInformation(response.data);
            });
        }else{
            axios.get("/api/informationESP").then((response) => {
                setInformation(response.data);
            });
        }
    }, [props])

    return (
        <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
            <button onClick={handleNavigationToggler} className="mi-header-toggler">
                {!navigationToggler ? <LineIcon name="menu" /> : <LineIcon name="close" />}
            </button>
            <div className="mi-header-inner">
                <div className="mi-header-image">
                    <Link to="/">
                        <img src={information.brandImage} alt="brandimage" />
                    </Link>
                </div>

                <ul className="mi-header-menu">
                    <li><NavLink exact to="/"><span>{props.langENG ? "Home" : "Inicio"}</span></NavLink></li>
                    <li><NavLink to="/about"><span>{props.langENG ? "About" : "Acerda de mí"}</span></NavLink></li>
                    <li><NavLink to="/resume"><span>{props.langENG ? "Resume" : "Curriculum"}</span></NavLink></li>
                    {/*<li><NavLink to="/portfolios"><span>Portfolios</span></NavLink></li>*/}
                    {/*<li><NavLink to="/blogs"><span>Blogs</span></NavLink></li>*/}
                    <li><NavLink to="/contact"><span>{props.langENG ? "Contact" : "Contacto"}</span></NavLink></li> 
                </ul>
                <p className="mi-header-copyright">&copy; {new Date().getFullYear()} <b><a rel="noopener noreferrer" target="_blank" href="#">Victor Avello Guerrero</a></b></p>
            </div>
        </nav>
    )
}


export default Header;