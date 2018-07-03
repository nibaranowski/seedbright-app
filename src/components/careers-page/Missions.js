import React from 'react';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

export const Missions = () => (
    <div className="missions">
        <div className="content-container">
            <div className="missions__content">
                <div className="missions__content__text">
                    <h1>What we stand for</h1>
                    <h2>Get to know us better</h2>
                </div>
                <div className="missions__content__mission">
                    <div className="missions__content__mission__one-mission">
                        <h2>Innovative</h2>
                        <p>Innovation is in our DNA. We aim to constently challenge ourselves to think outside the box and stay away from trends and fashion. Our goal is to help our client build unique and innovative products.</p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Exceptional</h2>
                        <p>We aim to reach the highest standards when it comes to product and design quality. Everyday we are giving our best to deliver world-class ideas, design, strategies and code.</p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Reliable</h2>
                        <p>When we say it, we do it. We understand our clients is counting on us. Our objective is to beat deadlines and budget. Among team members, we know got each others back on the field.</p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Diverse</h2>
                        <p>Our richness comes from our diverse background. We are bringing together talents from diverse geographical and technical backgrounds to create unique perspectives and solutions.</p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Believer</h2>
                        <p>We know that to innovate, we have to take risks. We are therefore optimistic and strong believer in bold, new ideas. This way of working allow us to challenge the status quo.</p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Passionate</h2>
                        <p>You can only be good in what you love. That the reason we are looking to work with passionate people. People ready to take it to the extra mile. Or even the extra-extra mile.</p>
                    </div>
                </div>
                <div className="missions__content__link">
                    <StyleLink
                        mail="https://seedbright.typeform.com/to/cJT3BY"
                        image="arrow.svg"
                        title="See Current Openings"
                        color="#4a73ff"
                    />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Missions);
