import React from 'react';
import { connect } from 'react-redux';

export const Customers = () => (
    <div className="customers">
        <div className="content-container">
            {/* <h1 className="customers__content__title">Some of our great clients</h1> */}
            {/* <div className="button-container">
                <a className="blue-button" href="/work"><span>Our Clients</span></a>
            </div> */}
            <div className="customers__content">
                <div className="customers__content__logo">
                    <img src="images/main_client1-min.png" alt="CoHappy" />
                </div>
                <div className="customers__content__logo">
                    <img src="images/main_client2-min.png" alt="BNP Cardif" />
                </div>
                <div className="customers__content__logo">
                    <img src="images/main_client3-min.png" alt="Cluball" />
                </div>
                <div className="customers__content__logo">
                    <img src="images/main_client4-min.png" alt="Krinner" />
                </div>
                <div className="customers__content__logo">
                    <img src="images/main_client7-min.png" alt="Louvain Management School" />
                </div>
                <div className="customers__content__logo">
                    <img src="images/main_client8-min.png" alt="Impacteo" />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Customers);
