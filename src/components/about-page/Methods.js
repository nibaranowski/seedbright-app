import React from 'react';
import { connect } from 'react-redux';
import Method from './Method';

import Fade from 'react-reveal/Fade';

export const Methods = () => (
    <div className="methods">
        <div className="content-container">
            <div className="methods__text">
                <h1>We are unique.</h1>
                <h2>How we work</h2>
            </div>
            <Fade
                duration={200}
                delay={0}
            >
                <div className="methods__content">
                    <Method
                        image="method1-min.png"
                        title="What we do"
                        text="We are specialists in everyting that touches digital, from product design, brand design, development, testing and growth hacking campaigns."
                    />
                    <Method
                        image="method2-min.png"
                        title="How we do it"
                        text="We have a top-down approach: we start by studying what is the product and the value proposition and how it can translate in a strong and bold brand system."
                    />
                    <Method
                        image="method3-min.png"
                        title="Why we are unique"
                        text="We are unique because of our exhaustive approach and the talent that we bring on the table. We have a unique sets of designers, developers and strategists."
                    />
                </div>
            </Fade>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Methods);
