import React from 'react';
import MainWorkPage from '../work-page/MainWorkPage';
import ProjectTile from '../work-page/ProjectTile';

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
        <ProjectTile />
        <Footer />
    </div>
);

export default WorkPage;
