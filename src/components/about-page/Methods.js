import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Method from './Method';

export const Methods = () => (
    <div className="methods">
        <div className="content-container">
            <div className="methods__content">

                <Method
                    image="method1.png"
                    title="What we do"
                    text="We start by building a global vision for the product. Once defined, we use it as backboon to define features, design and build campaigns."
                />
                <Method
                    image="method1.png"
                    title="How we do it"
                    text="We study the market in which the product is positioned. We talk to employees, customers and investors to understand how they perceive the company."
                />
                <Method
                    image="method1.png"
                    title="Why we are unique"
                    text="We don’t focus only on building a ‘pretty’ product. What we do is focusing on building a vision for the product. To do so, we focus on a multi-disciplinary approach."
                />
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Methods);
