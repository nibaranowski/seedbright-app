import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const PatchWork = () => (
    <div className="patchWork">
        <div className="content-container">
            <div className="patchWork__content">
                <div className="patchWork__content__text">
                    <h1>We are passionate.</h1>
                    <h2>Multi-domain expertise at work.</h2>
                </div>
            </div>
        </div>
        <div className="patchWork__content__images">
            <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-easing="ease-in"
                data-aos-once="true"
                className="patchWork__content__images__image1"
                src="/images/patch1.png" />
            <br />
            <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="0"
                data-aos-easing="ease-in"
                data-aos-once="true"
                className="patchWork__content__images__image2"
                src="/images/patch2.png" />
            <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                data-aos-easing="ease-in"
                data-aos-once="true"
                className="patchWork__content__images__image3"
                src="/images/patch3.png" />
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(PatchWork);
