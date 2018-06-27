import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Testimonial from './Testimonial';

export const Testimonials = () => (
    <div className="testimonials">
        <div className="content-container">
            {/* <h1 className="testimonials__title">Some of our great clients</h1> */}
            <div className="testimonials__content">
                <div
                    data-aos="fade-in"
                    data-aos-duration="200"
                    data-aos-delay="0"
                    data-aos-easing="ease-in"
                    data-aos-once="true"
                >
                    <Testimonial
                        image="person1.jpg"
                        fullName="Jean-Michel Hermange"
                        jobTitle="COO, BNP Cardif Belgium"
                        quote=" Create things so easy beautiful, professional things so easy, you cit today.  professional things so easy, you cit today ."
                    />
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-duration="200"
                    data-aos-delay="100"
                    data-aos-easing="ease-in"
                    data-aos-once="true"
                >
                    <Testimonial
                        image="person2.jpg"
                        fullName="Benoit Gailly"
                        jobTitle="Prof., Louvain Business School"
                        quote=" Create things so easy beautiful, professional things so easy, you cit today.  professional things so easy, you cit today ."
                    />
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-duration="200"
                    data-aos-delay="200"
                    data-aos-easing="ease-in"
                    data-aos-once="true"
                >
                    <Testimonial
                        image="person3.jpg"
                        fullName="Damien Jacquinet"
                        jobTitle="Founder, impacteo"
                        quote=" Create things so easy beautiful, professional things so easy, you cit today.  professional things so easy, you cit today ."
                    />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Testimonials);
