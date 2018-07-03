import React from 'react';
import MainAbout from '../about-page/MainAbout';
import Methods from '../about-page/Methods';
import HappyClient from '../about-page/HappyClient';
import CustomerGrid from '../about-page/CustomerGrid';
import PatchWork from '../about-page/PatchWork';
import Offices from '../about-page/Offices';
import SayHi from '../about-page/SayHi';

import Header from '../general/Header';
import Footer from '../general/Footer';

export default class AboutPage extends React.Component {
    componentDidMount () {
        //console.log('aboutPage mounted!');
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header
                    workUnderline=""
                    aboutUnderline="--underline"
                    newsUnderline=""
                    careersUnderline=""
                    contactUnderline=""
                />
                <MainAbout />
                <Methods />
                <HappyClient />
                <CustomerGrid />
                <PatchWork />
                <Offices />
                <SayHi />
                <Footer />
            </div>
        );
    }
}
