import React from 'react';
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
                    src="/images/patchwork1-min.png"
                />
            </Fade>
            <Fade
                bottom
                duration={1000}
                delay={100}
            >
                <img
                    className="patchWorkCareers__content__images__image2"
                    src="/images/patchwork2-min.png"
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
                    src="/images/patchwork3-min.png"
                />
            </Fade>
            <Fade
                bottom
                duration={1000}
                delay={0}
            >
                <img
                    className="patchWorkCareers__content__images__image4"
                    src="/images/patchwork4-min.png"
            />
            </Fade>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(PatchWorkCareers);
