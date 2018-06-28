import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Fade from 'react-reveal/Fade';

export const CustomerGrid = () => (
    <div className="customerGrid">
        <Fade
            duration={200}
            delay={0}
        >
            <div className="customerGrid__content">
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
        </Fade>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(CustomerGrid);
