import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Tile from '../general/Tile';

export const ProjectTile = () => (
    <div className="project-tile">
        <div className="content-container">
            <div className="project-tile__content">
                <Tile image="project1.jpg" title="Jelly" subtitle="Mobile app, Branding" page="project1" margin=""/>
                <Tile image="project1.jpg" title="Goodmoove" subtitle="Web app, Branding" page="project2" margin="--mmargin"/>
                <Tile image="project1.jpg" title="Jelly" subtitle="Mobile app, Branding" page="project1" margin=""/>
                <Tile image="project2.jpg" title="Goodmoove" subtitle="Web app, Branding" page="project2" margin="--mmargin"/>
                <Tile image="project1.jpg" title="Jelly" subtitle="Mobile app, Branding" page="project1" margin=""/>
                <Tile image="project2.jpg" title="Goodmoove" subtitle="Web app, Branding" page="project2" margin="--mmargin"/>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(ProjectTile);
