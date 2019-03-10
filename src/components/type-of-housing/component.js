import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Chart } from 'primereact/chart';
import { backgroundColor, hoverBackgroundColor } from 'utils/prime-colors';
import D from 'i18n';
import './type-of-housing.scss';

const Arrivals = ({ valueIt_I551, valueIt_I552_I553, valueFr_I551, valueFr_I552_I553 }) => {
  const rateIt = (
    (parseFloat(valueIt_I551, 10) /
      (parseFloat(valueIt_I551, 10) + parseFloat(valueIt_I552_I553, 10))) *
    100
  ).toFixed(2);
  const dataIt = {
    labels: ['Hotel', 'Other'],
    datasets: [
      {
        data: [rateIt, 100 - rateIt],
        backgroundColor,
        hoverBackgroundColor,
      },
    ],
  };
  const rateFr = (
    (parseFloat(valueFr_I551, 10) /
      (parseFloat(valueFr_I551, 10) + parseFloat(valueFr_I552_I553, 10))) *
    100
  ).toFixed(2);
  const dataFr = {
    labels: ['Hotel', 'Other'],
    datasets: [
      {
        data: [rateFr, 100 - rateFr],
        backgroundColor,
        hoverBackgroundColor,
      },
    ],
  };
  return (
    <>
      <Typography variant="h3" color="primary" align="center" className="header">
        {D.arrivalsTitle}
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h3" color="primary" align="center" className="header">
            {'Italy'}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" color="primary" align="center" className="header">
            {'France'}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Chart type="doughnut" data={dataIt} />
        </Grid>
        <Grid item xs={6}>
          <Chart type="doughnut" data={dataFr} />
        </Grid>
      </Grid>
    </>
  );
};

export default Arrivals;
