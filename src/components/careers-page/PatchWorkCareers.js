import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const PatchWorkCareers = () => (
    <div className="patchWorkCareers">
        <div className="patchWorkCareers__content__images">
            <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-easing="ease-in"
                data-aos-once="true"
                className="patchWorkCareers__content__images__image1"
                src="/images/patchwork1.png" />
            <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-easing="ease-in"
                data-aos-once="true"
                className="patchWorkCareers__content__images__image2"
                src="/images/patchwork2.png" />
            <br />
            <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                data-aos-easing="ease-in"
                data-aos-once="true"
                className="patchWorkCareers__content__images__image3"
                src="/images/patchwork3.png" />
            <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="0"
                data-aos-easing="ease-in"
                data-aos-once="true"
                className="patchWorkCareers__content__images__image4"
                src="/images/patchwork4.png" />
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(PatchWorkCareers);
