import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

export const SayHi = () => (
    <div className="sayHi">
        <div className="sayHi__content__block">
            <div className="sayHi__content__block_text">
                <h1>Let's work together!</h1>
            </div>
            <div className="sayHi__content__block_link">
                <StyleLink
                    mail="mailto:hello@seedbright.com"
                    image="arrow_white.svg"
                    title="Get in touch"
                    color="white"
                />
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(SayHi);
