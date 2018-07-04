import React from 'react';
import { connect } from 'react-redux';

export const HappyClient = () => (
    <div className="happyClient">
            <div className="happyClient__content">
                <div className="happyClient__content__image">
                    <img src="/images/happy_client-min.png" />
                </div>
                <div className="happyClient__content__text">
                    <h1>Our happy client.</h1>
                    <h2>They asked, we delivered</h2>
                    <h3>We love our client they love us back. <br className="hideTemp"/> It's that simple.</h3>
                    <blockquote>
                        <p>“ With Seedbright, you know you are in good hands. I have worked with them on few projects I did at Cubz and they showed a level of creativity and commitment I have never experienced before.</p>
                        <p>I can only but recommend working with these guys if you want to build a global brand and product. "</p>
                        <footer>Stanley Wack, Cubz</footer>
                    </blockquote>
                </div>
            </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(HappyClient);
