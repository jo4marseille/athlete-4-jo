import React from 'react';

const Header = () => {

    return (
        <>
            <div className="nav_bar">
                <div className="logo_site">
                    <img id='logo_nav' src="./img/real3.png" alt="logo not load" />
                </div>
                <div className="but_nav">
                    <button>Accueil</button>
                    <button>Compte</button>
                    <button>Like</button>
                </div>
            </div>
        </>
    );
};

export default Header;