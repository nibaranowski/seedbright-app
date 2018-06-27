import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainB = () => (
    <div className="mainB">
        <div className="content-container">
            <div className="mainB__content">
                <div
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="0"
                    data-aos-easing="ease-in"
                    data-aos-once="true"
                    className="mainB__content__text"
                >
                    <h1>Digital Product Makers</h1>
                    <p>At Seedbright, we focus on designing, developing and implementing one-of-a-kind digital products and customer experience.</p>
                    <StyleLink
                        mail="mailto:hello@seedbright.com"
                        image="arrow.svg"
                        title="Contact Us"
                        color="#4a73ff"
                    />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    data-aos-once="true"
                    data-aos-easing="ease-in-out-cubic"
                    className="mainB__content__image"
                    >
                    <img src="/images/main_option2.jpg" />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainB);
