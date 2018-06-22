import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleActualLink from '../general/StyleActualLink';

export const OfficeDetail = () => (
    <div className="officeDetail">
            <div className="officeDetail__content">
                <div className="officeDetail__content__image">
                    <img src="/images/office_detail.png" />
                    <div className="officeDetail__content__image__rectangle">
                        <StyleActualLink
                            link={"/office/brussels"}
                            image="arrow_black.svg"
                            title="View Gallery"
                            color="#000000"
                        />
                    </div>
                </div>
                <div className="officeDetail__content__text">
                    <h1>Brussels</h1>
                    <a className="office-link-map" href="#"><img src="/images/pin.png" /></a>
                    <h2>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. The industry's standard dummy.</h2>
                    <h3>Open positions</h3>
                    <div className="officeDetail__content__text__positions">
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                    </div>
                </div>
                <div className="officeDetail__content__text--Warsaw">
                    <h1>Warsaw</h1>
                    <a className="office-link-map" href="#"><img src="/images/pin.png" /></a>
                    <h2>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. The industry's standard dummy.</h2>
                    <h3>Open positions</h3>
                    <div className="officeDetail__content__text__positions">
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                        <h4><a href="#">Designer 1</a></h4>
                    </div>
                </div>
                <div className="officeDetail__content__menu">
                    <a className="office-link" href="#"><span>Brussels</span></a>
                    <a className="office-link" href="#"><span>Warsaw</span></a>
                </div>
            </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(OfficeDetail);
