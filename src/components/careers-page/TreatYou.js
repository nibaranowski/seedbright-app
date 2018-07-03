import React from 'react';
import { connect } from 'react-redux';

import StyleLink from '../general/StyleLink';

export const TreatYou = () => (
    <div className="treatYou">
        <div className="content-container">
            <div className="treatYou__content">
                <div className="treatYou__content__illustration">
                    <img src="/images/main_illustration_treatYou-min.png" />
                </div>
                <div className="treatYou__content__text">
                    <h1>We know how to treat you well</h1>
                    <p>We want to work with the best and we therfore aim to offer the best work conditions. From healthy every day breakfasts to free game tickets, we know how to take care of our team members.</p>
                    <h3>Free healthy breakfasts</h3>
                    <h3>Ticket matches and other good stuff</h3>
                    <h3>MacBook Pro and iPhone X</h3>
                    <h3>EUR 1000 vacation bonus</h3>
                    <h3>Full medical coverage</h3>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(TreatYou);
