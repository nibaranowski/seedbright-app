import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Office from './Office';

export const Offices = () => (
    <div className="offices">
        <div className="content-container">
                <div className="office__content__text">
                    <h1>International presence.</h1>
                    <h2>We stay close to our clients</h2>
                </div>
            <div
                data-aos="fade-in"
                data-aos-duration="200"
                data-aos-delay="0"
                data-aos-easing="ease-in"
                data-aos-once="true"
                className="offices__content"
                >
                <Office
                    image="brussels.png"
                    title="Brussels"
                    street="43 Av. des Grands-Prix"
                    city="Brussels 1150"
                    country="Belgium"
                />
                <Office
                    image="warsaw.png"
                    title="Warsaw"
                    street="18/29 Marszalkowska"
                    city="Warsaw 00-590"
                    country="Poland"
                />
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Offices);
