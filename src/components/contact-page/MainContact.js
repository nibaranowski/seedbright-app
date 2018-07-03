import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MainContact = () => (
    <div className="mainContact">
            <div className="mainContact__content">
                <div className="mainContact__content__image">
                    <img src="/images/main_contact-min.png" />
                </div>
                <div className="mainContact__content__text">
                    <h1>Get in touch.</h1>
                    <h2>Always happy to meet</h2>
                    <h3><a target="_blank" href="https://seedbright.typeform.com/to/mglblB">Business</a></h3>
                    <h3><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Careers</a></h3>
                    <h3><a target="_blank" href="https://seedbright.typeform.com/to/K2u5PL">Say hello</a></h3>
                </div>
            </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainContact);
