import React from 'react';
import { connect } from 'react-redux';

import StyleLink from '../general/StyleLink';

export const OfficeContact = () => (
    <div className="officeContact">
            <div className="officeContact__content">
                <div className="officeContact__content__text">
                    <h2>Our offices</h2>
                    <div className="officeContact__content__text__offices">
                        <div className="officeContact__content__text__offices__office">
                            <h3>Brussels</h3>
                            <p>
                                av. des Grands-Prix 43
                                <br />
                                Brussels 1150
                                <br />
                                Belgium
                            </p>
                            <StyleLink
                                mail="https://seedbright.typeform.com/to/cJT3BY"
                                image="arrow.svg"
                                title="Positions in Brussels"
                                color="#4a73ff"
                            />
                        </div>
                        <div className="officeContact__content__text__offices__office">
                            <h3>Warsaw</h3>
                            <p>
                                ul. Marszalkowska 18/29
                                <br />
                                Warsaw 00-590
                                <br />
                                Poland
                            </p>
                            <StyleLink
                                mail="https://seedbright.typeform.com/to/cJT3BY"
                                image="arrow.svg"
                                title="Positions in Warsaw"
                                color="#4a73ff"
                            />
                        </div>
                    </div>
                </div>
            </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(OfficeContact);
