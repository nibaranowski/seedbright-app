import React from 'react';
import { connect } from 'react-redux';
import Office from './Office';

import Fade from 'react-reveal/Fade';

export const Offices = () => (
    <div className="offices">
        <div className="content-container">
                <div className="office__content__text">
                    <h1>International presence.</h1>
                    <h2>We stay close to our clients</h2>
                </div>
            <Fade
                duration={200}
                delay={0}
            >
                <div className="offices__content">
                    {/* <Office
                        image="brussels-min.png"
                        title="Brussels"
                        street="43 Av. des Grands-Prix"
                        city="Brussels 1150"
                        country="Belgium"
                    /> */}
                    <Office
                        image="warsaw-min.png"
                        title="Warsaw"
                        street="18/29 Marszalkowska"
                        city="Warsaw 00-590"
                        country="Poland"
                    />
                </div>
            </Fade>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Offices);
