import React from 'react';
import MainB from '../home-page/MainB';
import Details from '../home-page/Details';
import Customers from '../home-page/Customers';
import Testimonials from '../home-page/Testimonials';

import Header from '../general/Header';
import Footer from '../general/Footer';

export default class HomePage extends React.Component {
    componentDidMount () {
        //console.log('homePage mounted!')
        window.scrollTo(0, 0);
    }
    render() {
        return (
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
    }
}
