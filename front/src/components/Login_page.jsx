import React from 'react';

const Login_page = () => {
    return (
        <>
        <div className="link_responsive"></div>
        <div className="over_the_over">
            <div className="over_login">
                <div className="back_login">
                </div>
            </div>
        </div>
        <div className="over_contain">
            <div className="container_login">
                <div className="title_login">
                    <img src="./img/logoblanc.png" alt="logo not load" />
                        <div className="just_for_title">
                            <h1>LOOK FOR YOUR ATHLETE</h1>
                        </div>
                    <p id='responsive_margin'>2024 SUMMER OLYMPICS</p>
                </div>
                <div className='form_login'>
                    <h1>MAIL</h1>
                    <input type="email" id='email_input'/>
                    <h1>PASSWORD</h1>
                    <input type="password" id='password_input'/>
                    <div className="button_login">
                    <button id='login_button'>LOGIN</button>
                    <button id='register_button'>REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login_page;