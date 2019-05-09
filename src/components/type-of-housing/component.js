import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Chart } from 'primereact/chart';
import { backgroundColor, hoverBackgroundColor } from 'utils/prime-colors';
import './type-of-housing.scss';

const Arrivals = ({
  valueIt_I551,
  valueIt_I552,
  valueIt_I553,
  valueFr_I551,
  valueFr_I552,
  valueFr_I553,
}) => {
  const totIt =
    parseFloat(valueIt_I551, 10) + parseFloat(valueIt_I552, 10) + parseFloat(valueIt_I553, 10);
  const rateIt_I551 = ((parseFloat(valueIt_I551, 10) / totIt) * 100).toFixed(2);
  const rateIt_I552 = ((parseFloat(valueIt_I552, 10) / totIt) * 100).toFixed(2);
  const rateIt_I553 = ((parseFloat(valueIt_I553, 10) / totIt) * 100).toFixed(2);
  const dataIt = {
    labels: ['Hotel', 'Camping', 'Other'],
    datasets: [
      {
        data: [rateIt_I551, rateIt_I553, rateIt_I552],
        backgroundColor,
        hoverBackgroundColor,
      },
    ],
  };
  const totFr =
    parseFloat(valueFr_I551, 10) + parseFloat(valueFr_I552, 10) + parseFloat(valueFr_I553, 10);
  const rateFr_I551 = ((parseFloat(valueFr_I551, 10) / totFr) * 100).toFixed(2);
  const rateFr_I552 = ((parseFloat(valueFr_I552, 10) / totFr) * 100).toFixed(2);
  const rateFr_I553 = ((parseFloat(valueFr_I553, 10) / totFr) * 100).toFixed(2);
  const dataFr = {
    labels: ['Hotel', 'Camping', 'Other'],
    datasets: [
      {
        data: [rateFr_I551, rateFr_I553, rateFr_I552],
        backgroundColor,
        hoverBackgroundColor,
      },
    ],
  };
  return (
    <>
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
