import React from 'react';

import { connect } from 'react-redux';
import TileOneWork from './TileOneWork';

import Fade from 'react-reveal/Fade';

export const WorkTile = () => (
    <div className="work-tile">
        <div className="content-container">
            <div className="work-tile__content">
                <Fade
                    duration={500}
                    delay={500}
                >
                    <TileOneWork
                        image="project_krinner-min.png"
                        title="Krinner"
                        subtitle="Branding, Development"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={700}
                >
                    <TileOneWork
                        image="project_bnp-min.png"
                        title="BNP Cardif"
                        subtitle="Strategy, Design"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                     <TileOneWork
                        image="project_broome-min.png"
                        title="The Broome"
                        subtitle="Design"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                     <TileOneWork
                        image="project_jolidoc-min.png"
                        title="Jolidoc"
                        subtitle="Design, Development"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                     <TileOneWork
                        image="project_payfacile-min.png"
                        title="PayFacile"
                        subtitle="Design"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                     <TileOneWork
                        image="project_limina-min.png"
                        title="Limina"
                        subtitle="Design, Development"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                     <TileOneWork
                        image="project_impacteo-min.png"
                        title="Impacteo"
                        subtitle="Branding, Design"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                     <TileOneWork
                        image="project_louvain-min.png"
                        title="Louvain School of Management"
                        subtitle="Design, Development"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                     <TileOneWork
                        image="project_superdyne-min.png"
                        title="SuperDyne"
                        subtitle="Design, Development"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                     <TileOneWork
                        image="project_cluball-min.png"
                        title="Cluball"
                        subtitle="Strategy, Branding, Design, Development"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                     <TileOneWork
                        image="project_deskii-min.png"
                        title="Deskii"
                        subtitle="Strategy, Design"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                    <TileOneWork
                        image="news_impacteo-min.png"
                        date="Sep 17"
                        title="Social impact matters"
                        subtitle="We helped shape the brand identity of Impacteo, a future leading VC fund focusing on social impact startups."
                        page="news/cluball"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                    <TileOneWork
                        image="news_inno-min.png"
                        date="Aug 17"
                        title="Enterprise innovation"
                        subtitle="Seedbright helped Louvain School of Management launch their entreprise innovation evaluation app."
                        page="news/louvain"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                    <TileOneWork
                        image="news_bhive-min.png"
                        date="May 17"
                        title="New partnership"
                        subtitle="Seedbright partners with B-hive, the leading European Fintech network."
                        page="news/bhive"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={0}
                >
                     <TileOneWork
                        image="project_cubz-min.png"
                        title="Cubz"
                        subtitle="Design"
                        page="project1"
                        margin=""
                    />
                </Fade>
                <Fade
                    duration={500}
                    delay={200}
                >
                     <TileOneWork
                        image="project_goodmoove-min.png"
                        title="Goodmoove"
                        subtitle="Branding, Design, Development"
                        page="project1"
                        margin=""
                    />
                </Fade>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(WorkTile);
