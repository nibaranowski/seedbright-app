import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Fade from 'react-reveal/Fade';

export const PatchWorkCareers = () => (
    <div className="patchWorkCareers">
        <div className="patchWorkCareers__content__images">
            <Fade
                bottom
                duration={1000}
                delay={300}
            >
                <img
                    className="patchWorkCareers__content__images__image1"
                    src="/images/patchwork1.png"
                />
            </Fade>
            <Fade
                bottom
                duration={1000}
                delay={100}
            >
                <img
                    className="patchWorkCareers__content__images__image2"
                    src="/images/patchwork2.png"
                />
            </Fade>
            <br />
            <Fade
                bottom
                duration={1000}
                delay={400}
            >
                <img
                    className="patchWorkCareers__content__images__image3"
                    src="/images/patchwork3.png"
                />
            </Fade>
            <Fade
                bottom
                duration={1000}
                delay={0}
            >
                <img
                    className="patchWorkCareers__content__images__image4"
                    src="/images/patchwork4.png"
            />
            </Fade>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(PatchWorkCareers);
