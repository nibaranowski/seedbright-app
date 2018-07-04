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
                        text="We are specialists in everything that relates to digital, from product design, brand strategy, development, testing and growth hacking campaigns. No challenge can resist us."
                    />
                    <Method
                        image="method2-min.png"
                        title="How we do it"
                        text="We have a top-down approach: we start by studying what our clients customers and value proposition and how it can translate in a strong and bold product and brand system."
                    />
                    <Method
                        image="method3-min.png"
                        title="Why we are unique"
                        text="We are unique because we think about the brand and the product as a system and thanks to our unique pool of diverse talents working together to make things happen."
                    />
                </div>
            </Fade>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(Methods);
