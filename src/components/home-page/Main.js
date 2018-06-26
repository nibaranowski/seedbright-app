import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

export const Main = () => (
    <div className="main">
        <div className="content-container">
            <div className="main__content">
                <div className="main__content__small-illustration">
                    <img src="/images/main_illustration.png" />
                </div>
                <div className="main__content__text">
                    <h1>Supercharged digital agency</h1>
                    <p>Seedbright is a digital agency focusing on crafting delightful products, brands and digital customer experience.</p>
                    <StyleLink
                        mail="mailto:hello@seedbright.com"
                        image="arrow.svg"
                        title="Reach out"
                        color="#4a73ff"
                    />
                </div>
                <div className="main__content__illustration">
                    <img src="/images/main_illustration.png" />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Main);
