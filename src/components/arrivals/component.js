import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Chart } from 'primereact/chart';
import { backgroundColor, hoverBackgroundColor } from 'utils/prime-colors';
import D from 'i18n';
import './doughnut.scss';

const Arrivals = ({ valueIt, valueFr }) => {
  const rateIt = (
    (parseFloat(valueIt, 10) / (parseFloat(valueIt, 10) + parseFloat(valueFr, 10))) *
    100
  ).toFixed(2);
  const data = {
    labels: ['Italy', 'France'],
    datasets: [
      {
        data: [rateIt, 100 - rateIt],
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
      <div className="doughnut">
        <Chart type="doughnut" data={data} />
      </div>
    </>
  );
};

export default Arrivals;
