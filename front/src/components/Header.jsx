import React from 'react';

const Header = () => {
    return (
        <>
            <div className="nav_bar">
                <div className="logo_site">
                    <img src="./img/logoblanc.png" alt="logo not load" />
                </div>
                <div className="but_nav">
                    <h1>Accueil</h1>
                    <h1>Like</h1>
                    <h1>Account</h1>
                </div>
            </div>
        </>
    );
};

export default Header;