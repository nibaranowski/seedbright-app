import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const PatchWork = () => (
    <div className="patchWork">
        <div className="content-container">
            <div className="patchWork__content">
                <div className="patchWork__content__text">
                    <h1>Always ready.</h1>
                    <h2>Minds and hearts at work.</h2>
                </div>
            </div>
        </div>
        <div className="patchWork__content__images">
            <img className="patchWork__content__images__image1" src="/images/patch1.png" />
            <br />
            <img className="patchWork__content__images__image2" src="/images/patch2.png" />
            <img className="patchWork__content__images__image3" src="/images/patch3.png" />
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(PatchWork);
