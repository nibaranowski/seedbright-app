import React from 'react';
import Header from '../general/Header';
import Footer from '../general/Footer';

import MainPrivacy from '../privacy-page/MainPrivacy';
import PrivacyText from '../privacy-page/PrivacyText';

export default class PrivacyPage extends React.Component {
    componentDidMount () {
        //console.log('Privacy mounted!')
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header
                    workUnderline=""
                    aboutUnderline=""
                    newsUnderline="--underline"
                    careersUnderline=""
                    contactUnderline=""
                />
                <MainPrivacy />
                <PrivacyText />
                <Footer />
            </div>
        );
    }
}
