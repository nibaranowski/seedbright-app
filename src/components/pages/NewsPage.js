import React from 'react';
import NewsTile from '../news-page/NewsTile';

import Header from '../general/Header';
import Footer from '../general/Footer';

const NewsPage = () => (
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

export default NewsPage;
