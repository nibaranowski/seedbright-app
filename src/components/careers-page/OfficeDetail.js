import React from 'react';
import { connect } from 'react-redux';
import StyleActualLink from '../general/StyleActualLink';

export const OfficeDetail = () => (
    <div className="officeDetail">
            <div className="officeDetail__content">
                <div className="officeDetail__content__image">
                    <img src="/images/office_detail-min.png" />
                    <div className="officeDetail__content__image__rectangle">
                        <StyleActualLink
                            link={"https://www.instagram.com/seedbright/"}
                            image="arrow_white.svg"
                            title="View Gallery"
                            color="white"
                        />
                    </div>
                </div>
                <div className="officeDetail__content__text">
                    <h1>Brussels</h1>
                    <h2>If your like good beers and world-class chocolate, you know where to apply. Our office is located in a green area only 10 min. from the city center.</h2>
                    <h3>Open positions</h3>
                    <div className="officeDetail__content__text__positions">
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Strategy director</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Senior Product designer</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Business developer</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Project Manager</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Scrum Master</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Office manager</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Senior accountant</a></h4>
                    </div>
                </div>
                <div className="officeDetail__content__text--warsaw">
                    <h1>Warsaw</h1>
                    <h2>If you want to join our group of experts developers and designers, apply to Warsaw open positions. The city and country are in a cultural and technological revolution.</h2>
                    <h3>Open positions</h3>
                    <div className="officeDetail__content__text__positions">
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Creative Director</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Art Director</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Senior Android Developer</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">React/Redux developer</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">NodeJs Senior developer</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Senior iOS developer</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">QA engineer</a></h4>
                        <h4><a target="_blank" href="https://seedbright.typeform.com/to/cJT3BY">Office manager</a></h4>
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
