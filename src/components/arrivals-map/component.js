import React from 'react';
import Typography from '@material-ui/core/Typography';
import Map from 'components/shared/map/colored-map';
import D from 'i18n';
import { wktToGeojson } from 'utils/map/wkt-to-geojson';

const ArrivalsMap = ({ arrivalsMap }) => {
  const colors = [
    '#F2A4C4',
    // '#EF91B6',
    '#EB7EA8',
    '#EB7EA8',
    '#E76C9B',
    '#E35B8E',
    '#E35B8E',
    //'#DF4A81',
    '#DB3975',
    '#DB3975',
    // '#D72969',
    '#D3195C',
    '#D3195C',
    '#D00B51',
    '#D00B51',
  ];
  if (arrivalsMap.length === 0) return <div>No data</div>;
  const geoJsonData = arrivalsMap.map(({ contours, myIndicator, ...d }) => ({
    contours: wktToGeojson(contours),
    myIndicator: parseFloat(myIndicator, 10),
    ...d,
  }));
  const contentArray = [['Area', 'label', ''], ['Arrivals', 'myIndicator', '']];
  const legend = { title: 'Arrivals', body: '' };
  return (
    <>
      <Typography variant="h3" color="primary" align="center" className="header">
        {D.arrivalsTitle}
      </Typography>
      <Map
        data={geoJsonData}
        colors={colors}
        contentArray={contentArray}
        legend={legend}
        zoom={3.4}
      />
    </>
  );
};

export default ArrivalsMap;
