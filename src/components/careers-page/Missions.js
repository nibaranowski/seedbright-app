import React from 'react';
import { Link } from 'react-router-dom';
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
                        <h2>Mission 1</h2>
                        <p> Simply dummy text of the printing and typesetting industry. Lorem*1 Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Mission 1</h2>
                        <p> Simply dummy text of the printing and typesetting industry. Lorem*1 Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Mission 1</h2>
                        <p> Simply dummy text of the printing and typesetting industry. Lorem*1 Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Mission 1</h2>
                        <p> Simply dummy text of the printing and typesetting industry. Lorem*1 Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Mission 1</h2>
                        <p> Simply dummy text of the printing and typesetting industry. Lorem*1 Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="missions__content__mission__one-mission">
                        <h2>Mission 1</h2>
                        <p> Simply dummy text of the printing and typesetting industry. Lorem*1 Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div className="missions__content__link">
                    <StyleLink
                        mail="mailto:hello@seedbright.com"
                        image="arrow.svg"
                        title="See current openings"
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
