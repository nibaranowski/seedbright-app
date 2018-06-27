import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MainAbout = () => (
    <div className="mainAbout">
        <div className="content-container">
            <div className="mainAbout__content">
                <div
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="0"
                    data-aos-easing="ease-in"
                    data-aos-once="true"
                    className="mainAbout__content__text"
                    >
                    <h1>We are born digital.</h1>
                    <h2>Learn more about us</h2>
                    <p> Welcome to Seedbright. We are a digital agency specialized in taking big ideas into successful products. We are designers, coders and brand strategists based in Warsaw and Brussels.
<br /><br />  If you want to learn more about our methodologies, read on. Also, don’t hesitate to contact us, worst case, you’ll get a free coffee. </p>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    data-aos-once="true"
                    data-aos-easing="ease-in-out-cubic"
                    className="mainAbout__content__illustration"
                    >
                    <img src="/images/main_illustration_about.jpg" />
                </div>
            </div>
            <div
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="100"
                data-aos-once="true"
                data-aos-easing="ease-in-out-cubic"
                className="mainAbout__image"
                >
                <img src="/images/main_illustration_about.jpg" />
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainAbout);
