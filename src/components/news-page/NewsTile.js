import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TileOneNews from './TileOneNews';

export const NewsTile = () => (
    <div className="news-tile">
        <div className="content-container">
            <div className="news-tile__content">
                <TileOneNews
                    image="project1.jpg"
                    date="Jun 04"
                    title="Pencil the date"
                    subtitle="Get your pencils ready! Ueno NYC will host Draft & Draw on Friday, June 22nd."
                    page="project1"
                    margin=""
                />
                <TileOneNews
                    image="project2.jpg"
                    date="Jun 04"
                    title="Pencil the date"
                    subtitle="Get your pencils ready! Ueno NYC will host Draft & Draw on Friday, June 22nd."
                    page="project1"
                    margin=""
                />
                <TileOneNews
                    image="project1.jpg"
                    date="Jun 04"
                    title="Pencil the date"
                    subtitle="Get your pencils ready! Ueno NYC will host Draft & Draw on Friday, June 22nd."
                    page="project1"
                    margin=""
                />
                <TileOneNews
                    image="project2.jpg"
                    date="Jun 04"
                    title="Pencil the date"
                    subtitle="Get your pencils ready! Ueno NYC will host Draft & Draw on Friday, June 22nd."
                    page="project1"
                    margin=""
                />
                <TileOneNews
                    image="project1.jpg"
                    date="Jun 04"
                    title="Pencil the date"
                    subtitle="Get your pencils ready! Ueno NYC will host Draft & Draw on Friday, June 22nd."
                    page="project1"
                    margin=""
                />
                <TileOneNews
                    image="project2.jpg"
                    date="Jun 04"
                    title="Pencil the date"
                    subtitle="Get your pencils ready! Ueno NYC will host Draft & Draw on Friday, June 22nd."
                    page="project1"
                    margin=""
                />
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(NewsTile);
