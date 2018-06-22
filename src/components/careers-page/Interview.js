import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

export const Interview = () => (
    <div className="interview">
        <div className="content-container">
            <div className="interview__content">
                <div className="interview__content__illustration">
                    <img src="/images/main_illustration_interview.png" />
                </div>
                <div className="interview__content__text">
                    <h1>The Interview</h1>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    <div className="interview__content__text__link">
                        <StyleLink
                            mail="mailto:hello@seedbright.com"
                            image="arrow.svg"
                            title="Join Us"
                            color="#4a73ff"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Interview);
