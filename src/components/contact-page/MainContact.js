import React from 'react';
import { connect } from 'react-redux';


import Fade from 'react-reveal/Fade';


export const MainContact = () => (
    <div className="mainContact">
            <div className="mainContact__content">
                <Fade
                    duration={1200}
                    delay={400}
                >
                    <div className="mainContact__content__image">
                        <img src="/images/main_contact-min.png" />
                    </div>
                </Fade>
                <Fade
                    duration={400}
                    delay={0}
                >
                    <div className="mainContact__content__text">
                        <h1>Get in touch.</h1>
                        <h2>We're ready to help</h2>
                        <h3><a target="_blank" href="https://seedbright.typeform.com/to/mglblB">Business</a></h3>
                        <h3><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Careers</a></h3>
                        <h3><a target="_blank" href="https://seedbright.typeform.com/to/K2u5PL">Say hello</a></h3>
                    </div>
                </Fade>
            </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainContact);
