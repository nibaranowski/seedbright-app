import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MainCareers = () => (
    <div className="mainCareers">
        <div className="content-container">
            <div className="mainCareers__content">
                <div className="mainCareers__content__text">
                    <h1>Get on board</h1>
                    <h2>Working at Seedbright</h2>
                </div>
                <div className="mainCareers__content__image">
                    <img src="/images/main_illustration_careers.png" />
                </div>
            </div>
                <div className="mainCareers__image">
                    <img src="/images/main_illustration_careers.png" />
                </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainCareers);
