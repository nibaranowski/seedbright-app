import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TileOneNews from './TileOneNews';

import Fade from 'react-reveal/Fade';

export const NewsTile = () => (
    <div className="news-tile">
        <div className="content-container">
            <div className="news-tile__content">
                <Fade
                    duration={500}
                    delay={0}
                >
                    <TileOneNews
                        image="news_homepage.png"
                        date="Jun 18"
                        title="Launching new homepage"
                        subtitle="We are ready to take Seedbright to a whole new level! A new sleek design to present our company!"
                        page="/news/homepage"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                    <TileOneNews
                        image="news_krinner.png"
                        date="May 18"
                        title="Leading the solar revolution"
                        subtitle="We are happy to announce a new engagement with the worldwide leader builder of solar plants."
                        page="/news/krinner"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                    <TileOneNews
                        image="news_brussels.png"
                        date="Sep 17"
                        title="New Brussels office"
                        subtitle="Proud to announce the opening of our new office in Brussels. Closer to our clients!"
                        page="news/office"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                    <TileOneNews
                        image="news_impacteo.png"
                        date="Sep 17"
                        title="Social impact matters"
                        subtitle="We helped shape the brand identity of Impacteo, a future leading VC fund focusing on social impact startups."
                        page="news/cluball"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                    <TileOneNews
                        image="news_inno.png"
                        date="Aug 17"
                        title="Enterprise innovation"
                        subtitle="Seedbright helped Louvain School of Management launch their entreprise innovation evaluation app."
                        page="news/louvain"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                    <TileOneNews
                        image="news_bhive.png"
                        date="May 17"
                        title="New partnership"
                        subtitle="Seedbright partners with B-hive, the leading European Fintech network."
                        page="news/bhive"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                    <TileOneNews
                        image="news_cluball.png"
                        date="Mar 15"
                        title="Cluball is launching"
                        subtitle="Seedbright is proud to present Cluball, a SaaS platform in sports club management built on Web and Mobile."
                        page="news/cluball"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                    <TileOneNews
                        image="news_helloworld.png"
                        date="Feb 15"
                        title="Hello world"
                        subtitle="Seedbright has launched. We aim to become a leader in digital product creation and digital strategy."
                        page="news/sblaunch"
                        margin=""
                    />
                </Fade>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(NewsTile);
