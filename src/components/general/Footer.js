import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Footer = () => (
    <footer className="footer">
        <div className="content-container">
            <div className="footer__content">
                <div className="footer__title-content">
                    <h1 className="footer__title-content__title">Seedbright.</h1>
                </div>
                <div className="footer__sections">
                    <div className="footer__sections__column">
                        <div className="footer__sections__column__title">
                            <h2>Company</h2>
                        </div>
                        <Link className="footer__sections__column__subtitle" to="/work">
                            <h3>About</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/jobs">
                            <h3>Jobs</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/blog">
                            <h3>Blog</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/press">
                            <h3>Press</h3>
                        </Link>
                    </div>
                    <div className="footer__sections__column">
                        <div className="footer__sections__column__title">
                            <h2>Resources</h2>
                        </div>
                        <Link className="footer__sections__column__subtitle " to="/support">
                            <h3>Support</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/contact">
                            <h3>Contact</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/privacy">
                            <h3>Privacy Policy</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/privacy">
                            <h3>Terms</h3>
                        </Link>
                    </div>
                    <div className="footer__sections__column">
                        <div className="footer__sections__column__title">
                            <h2>Contact</h2>
                        </div>
                        <div className="footer__sections__column__subtitle--mod">
                            <h3>Facebook</h3>
                        </div>
                        <Link className="footer__sections__column__subtitle" to="/twitter">
                            <h3>Twitter</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/instagram">
                            <h3>Instagram</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Footer);
