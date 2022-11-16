import { useState, React, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Header from './Header';
import Card_player from './Card_player';
import Footer from './Footer';
import axios from 'axios';


const Home_page = () => {

    const [data, setData] = useState([]);

    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <>
            <Header />
            <div className="container_home_page">
                <div className="moment">
                    <h1>Athlètes du moment</h1>
                </div>
                <div className="slider_site">
                    <AwesomeSlider cssModule={AwesomeSliderStyles}>
                        <div data-src="./img/voile.jpeg" />
                        <div data-src="./img/natation.jpg" />
                        <div data-src="./img/bad.jpg" />
                        <div data-src="./img/esc.jpg" />
                        <div data-src="./img/hand.jpg" />
                        <div data-src="./img/tennis.jpg" />
                    </AwesomeSlider>
                </div>
                <div className="filter_nav">
                    <div class="dropdown">
                        <button class="dropbtn">SPORT</button>
                        <div class="dropdown-content">
                            <a href="#">Voile</a>
                            <a href="#">Badminton</a>
                            <a href="#">Natation</a>
                            <a href="#">Escrime</a>
                            <a href="#">Handball</a>
                            <a href="#">Tennis</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">NATION</button>
                        <div class="dropdown-content">
                            <a href="#">France</a>
                            <a href="#">Espagne</a>
                            <a href="#">Italie</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">GENRE</button>
                        <div class="dropdown-content">
                            <a href="#">Homme</a>
                            <a href="#">Femme</a>

                        </div>
                    </div>
                    <div className="search">
                        <input type="text" id='ath' />
                        <AiOutlineSearch size={"3vw"} />
                    </div>
                </div>
                <Card_player />

            </div>

            <Footer />
        </>
    );
};

export default Home_page;