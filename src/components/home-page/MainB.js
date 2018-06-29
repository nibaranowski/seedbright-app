import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

import Fade from 'react-reveal/Fade';

const MainB = () => (
    <div className="mainB">
        <div className="content-container">
            <div className="mainB__content">
                <Fade
                    duration={400}
                    delay={0}
                >
                    <div className="mainB__content__text">
                        <h1>Digital Product Makers</h1>
                        <p>At Seedbright, we focus on designing, developing and implementing one-of-a-kind digital products and customer experience.</p>
                        <StyleLink
                            mail="https://seedbright.typeform.com/to/K2u5PL"
                            image="arrow.svg"
                            title="Contact Us"
                            color="#4a73ff"
                        />
                    </div>
                </Fade>
                <Fade
                    right
                    duration={1000}
                    delay={400}
                >
                    <div className="mainB__content__image">
                        <img src="/images/main_option2.jpg" />
                    </div>
                </Fade>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainB);
