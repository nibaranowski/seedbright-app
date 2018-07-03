import React from 'react';
import MainWorkPage from '../work-page/MainWorkPage';
import WorkTile from '../work-page/WorkTile';

import Header from '../general/Header';
import Footer from '../general/Footer';

export default class WorkPage extends React.Component {
    componentDidMount () {
        console.log('WorkPage mounted!')
        window.scrollTo(0, 0);
    }
    render() {
        return (
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
    }
}
