import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const CustomerGrid = () => (
    <div className="customerGrid">
        <div className="customerGrid__content">
            <img src="images/logo_large1.png" alt="Temp" />
            <img src="images/logo_large2.png" alt="Temp" />
            <img src="images/logo_large3.png" alt="Temp" />
            <img src="images/logo_large4.png" alt="Temp" />
            <img src="images/logo_large1.png" alt="Temp" />
            <img src="images/logo_large2.png" alt="Temp" />
            <img src="images/logo_large3.png" alt="Temp" />
            <img src="images/logo_large4.png" alt="Temp" />
            <img className="hide" src="images/logo_large1.png" alt="Temp" />
            <img className="hide" src="images/logo_large2.png" alt="Temp" />
            <img className="hide" src="images/logo_large3.png" alt="Temp" />
            <img className="hide" src="images/logo_large4.png" alt="Temp" />
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(CustomerGrid);
