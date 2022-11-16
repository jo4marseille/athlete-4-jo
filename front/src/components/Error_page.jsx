import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Error_page = () => {
    return (

    <>
        <Header/>
        <div className='pre_container_error'>
            <div className="container_error">
                <div className="title_login">
                    <img src="./img/logonoir.png" alt="logo not load" />
                    <div className="just_for_title">
                        <h1>LOOK FOR YOUR ATHLETE</h1>
                    </div>
                    <p id='responsive_margin'>2024 SUMMER OLYMPICS</p>
                </div>
                <div className='error_message'>
                    <h1>Page Introuvable</h1>
                    <p>
                        <Link to="/home" style={{textDecoration: 'none'}}>Retour à l'accueil</Link>
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default Error_page;