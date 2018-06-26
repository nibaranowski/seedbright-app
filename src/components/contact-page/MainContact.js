import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MainContact = () => (
    <div className="mainContact">
            <div className="mainContact__content">
                <div className="mainContact__content__image">
                    <img src="/images/happy_client.png" />
                </div>
                <div className="mainContact__content__text">
                    <h1>A happy client.</h1>
                    <h2>Let the smile do the talk</h2>
                    <h3>We love our client they love us back. <br/> It's that simple</h3>
                    <blockquote>
                        <p>“ With Seedbright, you know you are in good hands. I have worked with them on few projects I did at Krinner Solar and they showed a level of creativity and commitment I have never experienced before.
<br/>I can only but recommend working with these guys if you want to build a global brand and product.</p>
                        <footer>Michael Krinner, Krinner Solar</footer>
                    </blockquote>
                </div>
            </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainContact);
