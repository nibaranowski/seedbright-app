import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Customers = () => (
    <div className="customers">
        <div className="content-container">
            {/* <div className="button-container">
                <a className="blue-button" href="/work"><span>Our Clients</span></a>
            </div> */}
            <div className="customers__content">
                <div className="customers__content__logo">
                    <img src="images/logo1.png" alt="Kickstarter" />
                </div>
                <div className="customers__content__logo">
                    <img src="images/logo2.png" alt="Twitter" />
                </div>
                <div className="customers__content__logo">
                    <img src="images/logo3.png" alt="Instacart" />
                </div>
                <div className="customers__content__logo--hide">
                    <img src="images/logo4.png" alt="Pinterest" />
                </div>
                <div className="customers__content__logo--hide">
                    <img src="images/logo5.png" alt="Lyft" />
                </div>
                <div className="customers__content__logo--hide">
                    <img src="images/logo6.png" alt="Shopify" />
                </div>
                <div className="customers__content__logo--hide">
                    <img src="images/logo7.png" alt="OpenTable" />
                </div>
                <div className="customers__content__logo--hide">
                    <img src="images/logo8.png" alt="Slack" />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Customers);
