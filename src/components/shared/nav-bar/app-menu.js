import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core/';
import { Clear, Home, SubdirectoryArrowRight } from '@material-ui/icons';
import { pages } from 'components/router';
import D from 'i18n';

const AppMenu = ({ isMenuOpen, handleClose }) => (
  <Drawer anchor="left" open={isMenuOpen} onClose={handleClose}>
    <div className="menu">
      <IconButton onClick={handleClose}>
        <Clear />
      </IconButton>
      <List onClick={handleClose}>
        <ListItem>
          <ListItemText primary={D.menuTitle} />
        </ListItem>
        <ListItem button component={Link} to="/home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary={D.homeTitle} />
        </ListItem>
        {pages.map(({ route, title, icon }) => (
          <ListItem button component={Link} to={route} key={route}>
            <ListItemIcon>{icon || <SubdirectoryArrowRight />}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </div>
  </Drawer>
);

AppMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AppMenu;
