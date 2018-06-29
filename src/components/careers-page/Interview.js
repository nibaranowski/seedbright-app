import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

import Fade from 'react-reveal/Fade';

export const Interview = () => (
    <div className="interview">
        <div className="content-container">
            <div className="interview__content">
                <div className="interview__content__illustration">
                    <Fade
                        duration={500}
                        delay={0}
                    >
                        <img
                            src="/images/main_illustration_interview.png"
                        />
                    </Fade>
                </div>
                <div className="interview__content__text">
                    <h1>Interview process</h1>
                    <p>Start by sending our your application for a specific role. After a first screening process, we will hopefully invite you for a first round. Do mind that we really like case studies and practical tests.</p>
                    <div className="interview__content__text__link">
                        <StyleLink
                            mail="https://seedbright.typeform.com/to/cJT3BY"
                            image="arrow.svg"
                            title="Join Us"
                            color="#4a73ff"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Interview);
