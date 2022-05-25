import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className='NotFound-Body'>
            <a href="https://codepen.io/uiswarup/full/yLzypyY" alt="">
                <header class="top-header">
                </header>

                <div>
                    <div class="startsec"></div>
                    <div class="starthird"></div>
                    <div class="starfourth"></div>
                    <div class="starfifth"></div>
                </div>


                <div class="lamp__wrap">
                    <div class="lamp">
                        <div class="cable"></div>
                        <div class="cover"></div>
                        <div class="in-cover">
                            <div class="bulb"></div>
                        </div>
                        <div class="light"></div>
                    </div>
                </div>
                <section class="NotFound-Error">
                    <div class="NotFound-Error__content">
                        <div class="NotFound-Error__message message">
                            <h1 class="message__title">Page Not Found</h1>
                            <p class="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
                        </div>
                        <div class="NotFound-Error__nav e-nav">
                            <Link to="/" class="e-nav__link" alt=""></Link>
                        </div>
                    </div>

                </section>

            </a>
        </div>
    );
};

export default NotFound;