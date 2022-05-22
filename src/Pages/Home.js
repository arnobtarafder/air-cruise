import React from 'react';
import Banner from '../Components/Home/Banner/Banner';
import Review from '../Components/Home/Reviews/Review';
import Reviews from '../Components/Home/Reviews/Reviews';
import Statistics from '../Components/Home/Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <Banner />
            <Statistics />
            <Review />
        </div>
    );
};

export default Home;