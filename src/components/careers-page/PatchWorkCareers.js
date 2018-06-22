import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const PatchWorkCareers = () => (
    <div className="patchWorkCareers">
        <div className="patchWorkCareers__content__images">
            <img className="patchWorkCareers__content__images__image1" src="/images/patchwork1.png" />
            <img className="patchWorkCareers__content__images__image2" src="/images/patchwork2.png" />
            <br />
            <img className="patchWorkCareers__content__images__image3" src="/images/patchwork3.png" />
            <img className="patchWorkCareers__content__images__image4" src="/images/patchwork4.png" />
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(PatchWorkCareers);
