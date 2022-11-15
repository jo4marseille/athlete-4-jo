import React from 'react';
import { useNavigate } from "react-router-dom";



const Header = () => {

    const handleHome = () => {
      navigate('/home');
    }

    const handleAccount = () => {
        navigate('/compte');
      } 

    const handleLike = () => {
        navigate('/like');
      }

      const handleLogin = () => {
        navigate('/');
      }

    const navigate = useNavigate();

    return (
        <>
            <div className="nav_bar">
                <div className="logo_site">
                    <img id='logo_nav' src="./img/real3.png" alt="logo not load" />
                </div>
                <div className="but_nav">
                    <button onClick={handleHome}>Accueil</button>
                    <button onClick={handleAccount}>Compte</button>
                    <button onClick={handleLike}>Mes likes</button>
                    <button onClick={handleLogin}>Se connecter</button>
                </div>
            </div>
        </>
    );
};

export default Header;