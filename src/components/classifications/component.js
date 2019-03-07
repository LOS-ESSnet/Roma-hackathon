import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Link as LinkIcon } from '@material-ui/icons';
import D from 'i18n';

const Classifications = ({ classifications }) => (
  <>
    <Typography variant="h3" color="primary" align="center">
      {D.inseeClassificationsTitle}
    </Typography>
    <ul>
      {classifications.map(({ label, classification }) => (
        <li key={classification}>
          <>
            <span>{label} </span>
            <a href={classification} target="_blank" rel="noopener noreferrer">
              <LinkIcon />
            </a>
          </>
        </li>
      ))}
    </ul>
  </>
);

Classifications.propTypes = {
  classifications: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Classifications;
