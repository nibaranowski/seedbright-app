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
                        <Link className="footer__sections__column__subtitle" to="/about">
                            <h3>About</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/careers">
                            <h3>Jobs</h3>
                        </Link>
                        <div className="footer__sections__column__subtitle">
                            <h3><a target="_blank" href="https://medium.com/seedbright">Blog</a></h3>
                        </div>
                        <Link className="footer__sections__column__subtitle" to="/contact">
                            <h3>Press</h3>
                        </Link>
                    </div>
                    <div className="footer__sections__column">
                        <div className="footer__sections__column__title">
                            <h2>Resources</h2>
                        </div>
                        <Link className="footer__sections__column__subtitle " to="/contact">
                            <h3>Support</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/contact">
                            <h3>Contact</h3>
                        </Link>
                        <Link className="footer__sections__column__subtitle" to="/privacy">
                            <h3>Privacy Policy</h3>
                        </Link>

                    </div>
                    <div className="footer__sections__column">
                        <div className="footer__sections__column__title">
                            <h2>Contact</h2>
                        </div>
                        <div className="footer__sections__column__subtitle">
                            <h3><a target="_blank" href="https://www.linkedin.com/company/seedbright">LinkedIn</a></h3>
                        </div>
                        <div className="footer__sections__column__subtitle">
                            <h3><a target="_blank" href="https://www.facebook.com/pg/seedbright.apps">Facebook</a></h3>
                        </div>
                        <div className="footer__sections__column__subtitle">
                            <h3><a target="_blank" href="https://twitter.com/seedbrighttech">Twitter</a></h3>
                        </div>
                        <div className="footer__sections__column__subtitle">
                            <h3><a target="_blank" href="https://www.instagram.com/seedbright">Instagram</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Footer);
