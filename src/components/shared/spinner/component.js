import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => (
  <div className="centered">
    <CircularProgress color="primary" size={200} />
  </div>
);

export default Spinner;
