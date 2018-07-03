import React from 'react';

import MainCareers from '../careers-page/MainCareers';
import Missions from '../careers-page/Missions';
import Interview from '../careers-page/Interview';
import PatchWorkCareers from '../careers-page/PatchWorkCareers';
import TreatYou from '../careers-page/TreatYou';
import OfficeDetail from '../careers-page/OfficeDetail';

import Header from '../general/Header';
import Footer from '../general/Footer';

export default class CareersPage extends React.Component {
    componentDidMount () {
        //console.log('careersPage mounted!')
        window.scrollTo(0, 0);
    }
    render() {
        return (
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
                <Footer />

            </div>
        );
    }
}
