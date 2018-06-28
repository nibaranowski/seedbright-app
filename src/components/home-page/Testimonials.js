import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Testimonial from './Testimonial';

import Fade from 'react-reveal/Fade';

export const Testimonials = () => (
    <div className="testimonials">
        <div className="content-container">
            {/* <h1 className="testimonials__title">Some of our great clients</h1> */}
            <div className="testimonials__content">
                <Fade
                    duration={200}
                    delay={0}
                >
                    <Testimonial
                        image="person1.jpg"
                        fullName="Jean-Michel Hermange"
                        jobTitle="COO, BNP Cardif Belgium"
                        quote=" Seedbright brought a multi-industry expertise that helped us challenge our ideas about the future of digital insurance."
                    />
                </Fade>
                <Fade
                    duration={200}
                    delay={100}
                >
                    <Testimonial
                        image="person2b.jpg"
                        fullName="Benoit Gailly"
                        jobTitle="Prof., Louvain Business School"
                        quote=" Working with Seedbright was a enjoyable experience: they delivered a powerful product on time and budget."
                    />
                </Fade>
                <Fade
                    duration={200}
                    delay={200}
                >
                    <Testimonial
                        image="person3.png"
                        fullName="Michael Krinner"
                        jobTitle="CEO, Krinner Solar"
                        quote=" Seedbright helped us define technical specifications for the future development of our Cloud infrastructure"
                    />
                </Fade>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Testimonials);
