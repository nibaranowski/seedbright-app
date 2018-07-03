import React from 'react';
import MainAbout from '../about-page/MainAbout';
import Methods from '../about-page/Methods';
import MainContact from '../contact-page/MainContact';
import OfficeContact from '../contact-page/OfficeContact';
import JoinSeedbright from '../contact-page/JoinSeedbright';

import Header from '../general/Header';
import Footer from '../general/Footer';


export default class ContactPage extends React.Component {
    componentDidMount () {
        //console.log('contactPage mounted!')
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
                    contactUnderline="--underline"
                />
                <MainContact />
                <OfficeContact />
                <JoinSeedbright />
                <Footer />
            </div>
        );
    }
}
