import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Fade from 'react-reveal/Fade';

export const MainCareers = () => (
    <div className="mainCareers">
        <div className="content-container">
            <div className="mainCareers__content">
                <div className="mainCareers__content__text">
                    <h1>Get on board</h1>
                    <h2>Working at Seedbright</h2>
                </div>
                <Fade
                    right
                    duration={1200}
                    delay={400}
                >
                    <div className="mainCareers__content__image">
                        <img src="/images/main_illustration_careers-min.png" />
                    </div>
                </Fade>
            </div>
                <Fade
                    right
                    duration={1200}
                    delay={400}
                >
                    <div className="mainCareers__image">
                        <img src="/images/main_illustration_careers-min.png" />
                    </div>
                </Fade>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainCareers);
