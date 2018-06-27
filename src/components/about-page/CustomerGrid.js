import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const CustomerGrid = () => (
    <div className="customerGrid">
        <div
            data-aos="fade-in"
            data-aos-duration="200"
            data-aos-delay="0"
            data-aos-easing="ease-in"
            data-aos-once="true"
            className="customerGrid__content"
        >
            <img src="images/big_logo1.png" alt="CoHappy" />
            <img src="images/big_logo2.png" alt="BNP Cardif" />
            <img src="images/big_logo3.png" alt="Cluball" />
            <img src="images/big_logo4.png" alt="Stay Clothes" />
            <img className="hide" src="images/big_logo5.png" alt="Deskii" />
            <img src="images/big_logo6.png" alt="Louvain School of Management" />
            <img src="images/big_logo7.png" alt="Krinner" />
            <img className="hide" src="images/big_logo8.png" alt="Impacteo" />
            <img className="hide" src="images/big_logo9.png" alt="Cubz" />
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(CustomerGrid);
