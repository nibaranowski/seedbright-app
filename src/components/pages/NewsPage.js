import React from 'react';
import NewsTile from '../news-page/NewsTile';

import Header from '../general/Header';
import Footer from '../general/Footer';

export default class NewsPage extends React.Component {
    componentDidMount () {
        //console.log('NewsPage mounted!')
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
                <NewsTile />
                <Footer />
            </div>
        );
    }
}
