import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Chart } from 'primereact/chart';
import { backgroundColor, hoverBackgroundColor } from 'utils/prime-colors';
import D from 'i18n';
import './doughnut.scss';

const Arrivals = ({ arrivals }) => {
  const data = arrivals.map(({ valueFr, valueIt, timePeriodLabel }) => {
    const rateIt = (
      (parseFloat(valueIt, 10) / (parseFloat(valueIt, 10) + parseFloat(valueFr, 10))) *
      100
    ).toFixed(2);
    const chartData = {
      labels: ['Italy', 'France'],
      datasets: [
        {
          data: [rateIt, 100 - rateIt],
          backgroundColor,
          hoverBackgroundColor,
        },
      ],
    };
    return { timePeriodLabel, chartData };
  });
  return (
    <>
      <Typography variant="h3" color="primary" align="center" className="header">
        {D.arrivalsTitle}
      </Typography>
      <Grid container>
        {data.map(({ timePeriodLabel }) => (
          <Grid item xs={4} key={timePeriodLabel}>
            <Typography variant="h3" color="primary" align="center" className="header">
              {timePeriodLabel}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        {data.map(({ chartData, timePeriodLabel }) => (
          <Grid item xs={4} key={`chart-${timePeriodLabel}`}>
            <Chart type="doughnut" data={chartData} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Arrivals;
