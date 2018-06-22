import React from 'react';



import MainCareers from '../careers-page/MainCareers';
import Missions from '../careers-page/Missions';
import Interview from '../careers-page/Interview';
import PatchWorkCareers from '../careers-page/PatchWorkCareers';
import TreatYou from '../careers-page/TreatYou';
import OfficeDetail from '../careers-page/OfficeDetail';

// import Methods from '../about-page/Methods';
// import HappyClient from '../about-page/HappyClient';
// import CustomerGrid from '../about-page/CustomerGrid';
// import PatchWork from '../about-page/PatchWork';
// import Offices from '../about-page/Offices';
// import SayHi from '../about-page/SayHi';

import Header from '../general/Header';
import Footer from '../general/Footer';



const CareersPage = () => (
    <div>
        <Header
            workUnderline=""
            aboutUnderline=""
            newsUnderline=""
            careersUnderline="--underline"
            contactUnderline=""
        />

        <MainCareers />
        <Missions />
        <Interview />
        <PatchWorkCareers />
        <TreatYou />
        <OfficeDetail />

{/*
        <Methods />
        <HappyClient />
        <CustomerGrid />
        <PatchWork />
        <Offices />
        <SayHi />*/}
        <Footer />

    </div>
);

export default CareersPage;
