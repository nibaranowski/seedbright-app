import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Fade from 'react-reveal/Fade';

export const MainAbout = () => (
    <div className="mainAbout">
        <div className="content-container">
            <div className="mainAbout__content">
                <Fade
                    duration={400}
                    delay={0}
                >
                    <div className="mainAbout__content__text">
                        <h1>We are born digital.</h1>
                        <h2>Learn more about us</h2>
                        <p> Welcome to Seedbright. We are a digital agency specialized in taking big ideas into successful products. We are designers, coders and brand strategists based in Warsaw and Brussels.
    <br /><br />  If you want to learn more about our methodologies, read on. Also, don’t hesitate to contact us, worst case, you’ll get a free coffee. </p>
                    </div>
                </Fade>
                <Fade
                    right
                    duration={1000}
                    delay={400}
                >
                    <div className="mainAbout__content__illustration">
                        <img src="/images/main_illustration_about-min.jpg" />
                    </div>
                </Fade>
            </div>
            <Fade
                right
                duration={1000}
                delay={100}
            >
                <div className="mainAbout__image">
                    <img src="/images/main_illustration_about-min.jpg" />
                </div>
            </Fade>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainAbout);
