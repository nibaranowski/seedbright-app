import React from 'react';
import Main from '../home-page/Main';
import MainB from '../home-page/MainB';
import Details from '../home-page/Details';
import Customers from '../home-page/Customers';
import Testimonials from '../home-page/Testimonials';

import Header from '../general/Header';
import Footer from '../general/Footer';



const HomePage = () => (
    <div>
        <Header
            workUnderline=""
            aboutUnderline=""
            newsUnderline=""
            careersUnderline=""
            contactUnderline=""
        />
        <MainB />
        <Details />
        <Customers />
        <Testimonials />
        <Footer />
    </div>
);

export default HomePage;
