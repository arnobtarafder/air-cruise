import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className='NotFound-Body'>
            <a href="https://codepen.io/uiswarup/full/yLzypyY" alt="">
                <header className="top-header">
                </header>

                <div>
                    <div className="startsec"></div>
                    <div className="starthird"></div>
                    <div className="starfourth"></div>
                    <div className="starfifth"></div>
                </div>


                <div className="lamp__wrap">
                    <div className="lamp">
                        <div className="cable"></div>
                        <div className="cover"></div>
                        <div className="in-cover">
                            <div className="bulb"></div>
                        </div>
                        <div className="light"></div>
                    </div>
                </div>
                <section className="NotFound-Error">
                    <div className="NotFound-Error__content">
                        <div className="NotFound-Error__message message">
                            <h1 className="message__title">Page Not Found</h1>
                            <p className="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
                        </div>
                        <div className="NotFound-Error__nav e-nav">
                            <Link to="/" className="e-nav__link" alt=""></Link>
                        </div>
                    </div>

                </section>

            </a>
        </div>
    );
};

export default NotFound;