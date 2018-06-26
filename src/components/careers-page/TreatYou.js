import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

export const TreatYou = () => (
    <div className="treatYou">
        <div className="content-container">
            <div className="treatYou__content">
                <div className="treatYou__content__illustration">
                    <img src="/images/main_illustration_treatYou.png" />
                </div>
                <div className="treatYou__content__text">
                    <h1>We know how to treat you well</h1>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <h2>Benefits include</h2>
                    <h3>Benefit 1</h3>
                    <h3>Benefit 1</h3>
                    <h3>Benefit 1</h3>
                    <h3>Benefit 1</h3>
                    <h3>Benefit 1</h3>
                    <h3>Benefit 1</h3>
                    <h3>Benefit 1</h3>
                    <h3>Benefit 1</h3>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(TreatYou);
