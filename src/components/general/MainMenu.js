import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { slide as Menu } from 'react-burger-menu';

export default class MainMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <Menu
            right
            width={'100%'}
            noOverlay
            customBurgerIcon={ <img src="images/menu_burger.svg" /> }
            customCrossIcon={ <img src="images/menu_cross.svg" /> }
            >
                <Link id="work" className="menu-item" to="/work">Work</Link>
                <Link id="about" className="menu-item" to="/about">About</Link>
                <Link id="news" className="menu-item" to="/news">News</Link>
                <Link id="careers" className="menu-item" to="/careers">Careers</Link>
                <Link id="contact" className="menu-item" to="/contact">Contact</Link>
        </Menu>
    );
  }
}


                        {/* <div className="header__subtitle-content">
                            <Link className={"header__subtitle" + this.props.workUnderline} to="/work">
                                <h2>Work</h2>
                            </Link>
                            <Link className={"header__subtitle" + this.props.aboutUnderline} to="/about">
                                <h2>About</h2>
                            </Link>
                            <Link className={"header__subtitle" + this.props.newsUnderline} to="/news">
                                <h2>News</h2>
                            </Link>
                            <Link className={"header__subtitle" + this.props.careersUnderline}  to="/careers">
                                <h2>Careers</h2>
                            </Link>
                            <Link className={"header__subtitle" + this.props.contactUnderline} to="/contact">
                                <h2>Contact</h2>
                            </Link>
                        </div> */}
