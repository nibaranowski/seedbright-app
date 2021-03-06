import React from 'react';
import MainWorkPage from '../work-page/MainWorkPage';
import WorkTile from '../work-page/WorkTile';

import Header from '../general/Header';
import Footer from '../general/Footer';

const WorkPage = () => (
    <div>
        <Header
            workUnderline="--underline"
            aboutUnderline=""
            newsUnderline=""
            careersUnderline=""
            contactUnderline=""
        />
        <MainWorkPage />
        <WorkTile />
        <Footer />
    </div>
);

export default WorkPage;
