import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <div className="header__title-content">
                            <Link className="header__title-content__title" to="/">
                                <h1>Seedbright.</h1>
                            </Link>
                        </div>
                        <div
                            // data-aos="fade-in"
                            // data-aos-easing="linear"
                            // data-aos-duration="400"
                            className="header__subtitle-content"
                        >
                            <Link className={"header__subtitle" + this.props.workUnderline} to="/work">
                                <h2>Work</h2>
                            </Link>
                            <Link className={"header__subtitle" + this.props.aboutUnderline} to="/about">
                                <h2>About</h2>
                            </Link>
                            <Link className={"header__subtitle" + this.props.newsUnderline} to="/news">
                                <h2>News</h2>
                            </Link>
                            <Link className={"header__subtitle" + this.props.careersUnderline}  to="/careers">
                                <h2>Careers</h2>
                            </Link>
                            <Link className={"header__subtitle" + this.props.contactUnderline} to="/contact">
                                <h2>Contact</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
