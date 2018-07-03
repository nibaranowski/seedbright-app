import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Fade from 'react-reveal/Fade';

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
            <Fade
                bottom
                duration={1000}
                delay={200}
            >
                <img
                    className="patchWork__content__images__image1"
                    src="/images/patch1-min.png"
                />
            </Fade>
            <br />
            <Fade
                bottom
                duration={1000}
                delay={0}
            >
                <img
                    className="patchWork__content__images__image2"
                    src="/images/patch2-min.png"
                />
            </Fade>
            <Fade
                bottom
                duration={1000}
                delay={400}
            >
                <img
                    className="patchWork__content__images__image3"
                    src="/images/patch3-min.png"
                />
            </Fade>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(PatchWork);
