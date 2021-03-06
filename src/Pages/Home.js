import React from 'react';
import Banner from '../Components/Home/Banner/Banner';
import Contact from '../Components/Home/Contact/Contact';
import Map from '../Components/Home/Map/Map';
import Review from '../Components/Home/Reviews/Review';
import Reviews from '../Components/Home/Reviews/Reviews';
import Statistics from '../Components/Home/Statistics/Statistics';
import Products from '../Components/Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            {/* <Statistics /> */}
            <Products />
            <Review />
            <Map />
            <Contact />
        </div>
    );
};

export default Home;