import { useState, React } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Header from './Header';

const Home_page = () => {

    return (
        <>
            <Header />
            <div className="container_home_page">

                <div className="slider_site">
                    <AwesomeSlider cssModule={AwesomeSliderStyles}>
                        <div data-src="" />
                        <div data-src="" />
                        <div data-src="" />
                    </AwesomeSlider>
                </div>
                <div className="filter_nav">
                    <div class="dropdown">
                        <button class="dropbtn">SPORT</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">NATION</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">GENRE</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className="search">
                        <input type="text" id='ath' />
                        <AiOutlineSearch size={"3vw"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home_page;