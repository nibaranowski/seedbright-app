import React from 'react';
import MainAbout from '../about-page/MainAbout';
import Methods from '../about-page/Methods';
import MainContact from '../contact-page/MainContact';
import OfficeContact from '../contact-page/OfficeContact';
import JoinSeedbright from '../contact-page/JoinSeedbright';

// import CustomerGrid from '../about-page/CustomerGrid';
// import PatchWork from '../about-page/PatchWork';
// import Offices from '../about-page/Offices';
// import SayHi from '../about-page/SayHi';

import Header from '../general/Header';
import Footer from '../general/Footer';



const ContactPage = () => (
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
        {/* <HappyClient />
        <CustomerGrid />
        <PatchWork />
        <Offices />
        <SayHi /> */}
        <Footer />
    </div>
);

export default ContactPage;
