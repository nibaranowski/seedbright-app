import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Tile from '../general/Tile';

export const ProjectTile = () => (
    <div className="project-tile">
        <div className="content-container">
            <div className="project-tile__content">
                <Tile
                    image="project_krinner.png"
                    title="Krinner"
                    subtitle="Branding, Development"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_bnp.png"
                    title="BNP Cardif"
                    subtitle="Strategy, Design"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_broome.png"
                    title="The Broome"
                    subtitle="Design"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_jolidoc.png"
                    title="Jolidoc"
                    subtitle="Design, Development"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_payfacile.png"
                    title="PayFacile"
                    subtitle="Design"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_limina.png"
                    title="Limina"
                    subtitle="Design, Development"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_impacteo.png"
                    title="Impacteo"
                    subtitle="Branding, Design"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_louvain.png"
                    title="Louvain School of Management"
                    subtitle="Design, Development"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_superdyne.png"
                    title="SuperDyne"
                    subtitle="Design, Development"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_cluball.png"
                    title="Cluball"
                    subtitle="Strategy, Branding, Design, Development"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_deskii.png"
                    title="Deskii"
                    subtitle="Strategy, Design"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_cubz.png"
                    title="Cubz"
                    subtitle="Design"
                    page="project1"
                    margin=""
                />
                <Tile
                    image="project_goodmoove.png"
                    title="Goodmoove"
                    subtitle="Branding, Design, Development"
                    page="project1"
                    margin=""
                />
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(ProjectTile);
