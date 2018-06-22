import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Testimonial from './Testimonial';

export const Testimonials = () => (
    <div className="testimonials">
        <div className="content-container">
            <div className="testimonials__title">
                <h1>Find what our customers say.</h1>
            </div>
            <div className="testimonials__content">

                <Testimonial
                    image="person1.jpg"
                    fullName="Jean-Michel Hermange"
                    jobTitle="COO, BNP Cardif Belgium"
                    quote=" Create things so easy beautiful, professional things so easy, you cit today.  professional things so easy, you cit today ."
                />
                <Testimonial
                    image="person2.jpg"
                    fullName="Benoit Gailly"
                    jobTitle="prof., Louvain Business School"
                    quote=" Create things so easy beautiful, professional things so easy, you cit today.  professional things so easy, you cit today ."
                />
                <Testimonial
                    image="person3.jpg"
                    fullName="Damien Jacquinet"
                    jobTitle="Founder, impacteo"
                    quote=" Create things so easy beautiful, professional things so easy, you cit today.  professional things so easy, you cit today ."
                />
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Testimonials);
