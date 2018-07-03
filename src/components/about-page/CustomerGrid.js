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
                <img src="images/big_logo1-min.png" alt="CoHappy" />
                <img src="images/big_logo2-min.png" alt="BNP Cardif" />
                <img src="images/big_logo3-min.png" alt="Cluball" />
                <img src="images/big_logo4-min.png" alt="Stay Clothes" />
                <img className="hide" src="images/big_logo5-min.png" alt="Deskii" />
                <img src="images/big_logo6-min.png" alt="Louvain School of Management" />
                <img src="images/big_logo7-min.png" alt="Krinner" />
                <img className="hide" src="images/big_logo8-min.png" alt="Impacteo" />
                <img className="hide" src="images/big_logo9-min.png" alt="Cubz" />
            </div>
        </Fade>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(CustomerGrid);
