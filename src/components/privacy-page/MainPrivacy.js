import React from 'react';
import { connect } from 'react-redux';

export const MainPrivacy = () => (
    <div className="mainPrivacy">
        <div className="content-container">
            <div className="mainPrivacy__content">
                <div className="mainPrivacy__content__text">
                    <h1>Privacy Policy</h1>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainPrivacy);
