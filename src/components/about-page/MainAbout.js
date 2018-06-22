import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MainAbout = () => (
    <div className="mainAbout">
        <div className="content-container">
            <div className="mainAbout__content">
                <div className="mainAbout__content__text">
                    <h1>It starts with a seed.</h1>
                    <h2>Small steps, big ideas</h2>
                    <p> Welcome to Seedbright. We are a digital agency specialized in taking big ideas into successful products. We are designers, coders and brand startegists based in Warsaw and Brussels.
<br /><br />  If you want to learn more about our methodologies, read on. Also, don’t hesitate to contact us, worst case, you’ll get a free coffee. </p>
                    <h1>Here comes the magic.</h1>
                    <h2>How we work</h2>
                </div>
                <div className="mainAbout__content__illustration">
                    <img src="/images/main_illustration_about.jpg" />
                    <div className="mainAbout__content__illustration__circle"></div>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(MainAbout);
