import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

export const MainB = () => (
    <div className="mainB">
        <div className="content-container">
            <div className="mainB__content">
                <div className="mainB__content__text">
                    <h1>Digital Product Makers</h1>
                    <p>At Seedbright, we focus on designing, developing and implementing one-of-a-kind digital products and customer experience.</p>
                    <StyleLink
                        mail="mailto:hello@seedbright.com"
                        image="arrow.svg"
                        title="Contact Us"
                        color="#4a73ff"
                    />
                </div>
                <div className="mainB__content__image">
                    <img src="/images/main_option2.jpg" />
                </div>
            </div>
            <div className="mainB__image">
                <img src="/images/main_option2.jpg" />
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainB);
