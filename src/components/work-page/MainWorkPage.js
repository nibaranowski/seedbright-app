import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MainWorkPage = () => (
    <div className="main-workpage">
        <div className="content-container">
            <div className="main-workpage__content">
                <div className="main-workpage__content__title">
                    <h1>Discover our latest projects.</h1>
                </div>
                <br />
                <div className="main-workpage__content__filters">
                    <Link className="main-workpage__content__filters__filter--underline" to="/work">
                        <h2>Everything</h2>
                    </Link>
                    <Link className="main-workpage__content__filters__filter" to="/about">
                        <h2>Branding</h2>
                    </Link>
                    <Link className="main-workpage__content__filters__filter" to="/news">
                        <h2>Design</h2>
                    </Link>
                    <Link className="main-workpage__content__filters__filter" to="/careers">
                        <h2>Development</h2>
                    </Link>
                    <Link className="main-workpage__content__filters__filter" to="/contact">
                        <h2>Strategy</h2>
                    </Link>
                    <Link className="main-workpage__content__filters__filter" to="/careers">
                        <h2>Marketing</h2>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainWorkPage);
