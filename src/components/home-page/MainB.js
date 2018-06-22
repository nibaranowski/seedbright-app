import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

export const MainB = () => (
    <div className="mainB">
        <div className="content-container">
            <div className="mainB__content">
                <div className="mainB__content__text">
                    <h1>Supercharged digital agency</h1>
                    <p>Seedbright is a digital agency focusing on crafting delightful products, brands and digital customer experience.</p>
                    <StyleLink
                        mail="mailto:hello@seedbright.com"
                        image="arrow.svg"
                        title="Contact Us"
                        color="#4a73ff"
                    />
                </div>
                <div className="mainB__content__illustration">
                    <img src="/images/main_illustrationB.jpg" />
                    <div className="mainB__content__illustration__circle"></div>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainB);
