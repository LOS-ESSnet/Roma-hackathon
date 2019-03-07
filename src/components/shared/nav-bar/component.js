import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import D from 'i18n';
import AppMenu from './app-menu';
import './nav-bar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.handleClickMenu = () => {
      this.setState({ isMenuOpen: true });
    };
    this.handleClose = () => {
      this.setState({ isMenuOpen: false });
    };
  }

  render() {
    const { isMenuOpen } = this.state;
    return (
      <div className="root">
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              className="menubutton"
              color="inherit"
              aria-label="Menu"
              onClick={this.handleClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/home">
              <img className="avatar" src="/menu-avatar.svg" alt="avatar" />
            </Link>
            <Typography variant="h1" color="inherit" className="flex">
              {D.appTitle}
            </Typography>
          </Toolbar>
          <AppMenu isMenuOpen={isMenuOpen} handleClose={this.handleClose} />
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
