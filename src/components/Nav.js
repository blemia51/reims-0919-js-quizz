import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <Menu styles={styles} right className="burger">
          <ul>
            <li>
              <a id="home" className="menu-item" href="/">Home</a>
            </li>
            <li>
              <a id="about" className="menu-item" href="/about">About</a>
            </li>
            <li>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
            </li>
            <li>
              <a onClick={ this.showSettings } className="menu-item--small" href="/">Settings</a>
            </li>
          </ul>
        </Menu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="trainYourBrain">
            <i className="fas fa-cogs"></i>TrainYourBrain
          </h3>
        </Link>
      </div>
    );
  }
}

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    left: '24px',
    top: '24px'
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'rgb(125, 135, 180)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


export default Nav;
