import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleActualLink from '../general/StyleActualLink';

export const Customers = () => (
    <div className="details">
        <div className="content-container">
            <h1 className="details__content__title">We aim for the best.</h1>
            <div className="details__content">
                <div className="details__content__detail">
                    {/* <div className="details__content__detail__img">
                        <img src="images/m_speed.svg" alt="Speed" />
                    </div> */}
                    <div className="details__content__detail__text">
                        <h1>Speed</h1>
                        <p>We use the Scrum method to meet your deadlines and follow changes along the project.</p>
                    </div>
                </div>
                <div className="details__content__detail">
                    {/* <div className="details__content__detail__img">
                        <img src="images/m_quality.svg" alt="Quality" />
                    </div> */}
                    <div className="details__content__detail__text">
                        <h1>Quality</h1>
                        <p>We implement the toughest quality control processes to insure we meet the highest quality standards. </p>
                    </div>
                </div>
                <div className="details__content__detail">
                    {/* <div className="details__content__detail__img">
                        <img src="images/m_transparency.svg" alt="Transparency" />
                    </div> */}
                    <div className="details__content__detail__text">
                        <h1>Transparency</h1>
                        <p>You can monitor on a daily basis the progress made during each phases of the project by using our task management tool.</p>
                    </div>
                </div>
            </div>

            <div className="details__content--mod">
                <div className="details__content__detail">
                    {/* <div className="details__content__detail__img">
                        <img src="images/m_expertise.svg" alt="Expertise" />
                    </div> */}
                    <div className="details__content__detail__text">
                        <h1>Expertise</h1>
                        <p>We work with the best developers and designers only. Our team is composed of experts that received multiple international awards.</p>
                    </div>
                </div>
                <div className="details__content__detail">
                    {/* <div className="details__content__detail__img">
                        <img src="images/m_passion.svg" alt="Passion" />
                    </div> */}
                    <div className="details__content__detail__text">
                        <h1>Passion</h1>
                        <p>We love coding and developing game-changing new products. Passion is what drives us to give 200% every day.</p>
                    </div>
                </div>
                <div className="details__content__detail">
                    {/* <div className="details__content__detail__img">
                        <img className="details__content__detail__img__spec" src="images/m_reliability.svg" alt="Reliability" />
                    </div> */}
                    <div className="details__content__detail__text">
                        <h1>Reliability</h1>
                        <p>We are thriving to create long-term relationships with our clients. Our products are solid and built for the long term.</p>
                    </div>
                </div>
            </div>

            <div className="details__content__link">
                <StyleActualLink
                    link="/about"
                    image="arrow.svg"
                    title="Learn More"
                    color="#4a73ff"
                />
            </div>

            <div className="details__content__main">
                <img
                data-aos="fade-in"
                data-aos-duration="600"
                data-aos-delay="0"
                data-aos-easing="ease-in"
                data-aos-once="true"
                className="details__content"
                src="images/main_option1.jpg" alt="main" />
            </div>

        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Customers);
