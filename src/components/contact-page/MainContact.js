import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MainContact = () => (
    <div className="mainContact">
            <div className="mainContact__content">
                <div className="mainContact__content__image">
                    <img src="/images/main_contact.png" />
                </div>
                <div className="mainContact__content__text">
                    <h1>Get in touch.</h1>
                    <h2>We're open for business</h2>
                    <h3><a href="#">Business</a></h3>
                    <h3><a href="#">Careers</a></h3>
                    <h3><a href="#">Say hello</a></h3>
                </div>
            </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainContact);
