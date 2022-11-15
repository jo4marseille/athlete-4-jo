import { useState, React } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Header from './Header';

const Home_page = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="container_home_page">
                <Header />
                <div className="slider_site">
                    <AwesomeSlider cssModule={AwesomeSliderStyles}>
                        <div data-src="" />
                        <div data-src="/path/to/image-1.png" />
                        <div data-src="/path/to/image-2.jpg" />
                    </AwesomeSlider>
                </div>
                <div className="search">
                    <input type="text" id='ath' />
                    <AiOutlineSearch size={"2vw"} />
                </div>
                <div className="filter_nav">
                    <button onClick={handleOpen}>Dropdown</button>
                    {open ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <button>Menu 1</button>
                            </li>
                            <li className="menu-item">
                                <button>Menu 2</button>
                            </li>
                        </ul>
                    ) : null}
                    {open ? <div>Is Open</div> : <div>Is Closed</div>}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque assumenda reiciendis earum minima debitis explicabo sequi facilis repellendus rerum ab ad architecto eveniet doloremque dolorem, sit magnam similique autem ratione deserunt. Nihil ratione reiciendis sit tenetur non, quo deserunt nobis dolorem enim, assumenda hic ex minus deleniti, eius soluta doloribus dolor sint consequuntur. Magnam necessitatibus voluptate repudiandae ratione optio! Error, nihil minus sequi doloribus quas consectetur itaque tenetur ratione veritatis voluptatem eaque rem officia necessitatibus modi molestias explicabo, deleniti minima, cum ab? Sunt neque quo sapiente inventore vitae maiores aliquam vel quibusdam praesentium? Laudantium odit ratione sapiente temporibus dignissimos ullam quibusdam eveniet aut, qui beatae tempore quia, sit fuga reiciendis eos ipsam vel repudiandae nesciunt molestiae sunt facere iste at. Exercitationem adipisci porro quia atque doloribus ab ducimus expedita rem id modi. Eius tempore in molestiae numquam quia laudantium, doloremque, vitae amet fuga, accusamus saepe? Libero ea, optio placeat maiores sunt molestiae qui autem distinctio neque corrupti consequuntur ex voluptates odio similique itaque quasi animi voluptatem soluta, ipsa aliquid debitis recusandae hic voluptas ipsum! Eaque pariatur fugiat, assumenda culpa numquam suscipit, alias expedita earum quis maxime laudantium? Consequuntur, dicta et obcaecati fuga cupiditate ratione aspernatur perspiciatis itaque ipsum voluptatem?
                </div>
            </div>
        </>
    );
};

export default Home_page;