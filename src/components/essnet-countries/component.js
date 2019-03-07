import React from 'react';
import Typography from '@material-ui/core/Typography';
import Map from 'components/shared/map/colored-map';
import D from 'i18n';
import { wktToGeojson } from 'utils/map/wkt-to-geojson';

const EssNetCountries = ({ essNetCountries }) => {
  const colors = [
    '#F2A4C4',
    // '#EF91B6',
    // '#EB7EA8',
    // '#E76C9B',
    // '#E35B8E',
    // '#DF4A81',
    // '#DB3975',
    // '#D72969',
    // '#D3195C',
    // '#D00B51',
  ];
  if (essNetCountries.length === 0) return <div>No data</div>;
  const geoJsonData = essNetCountries.map(({ contours, ...d }) => ({
    contours: wktToGeojson(contours),
    ...d,
    myIndicator: 1,
  }));
  const contentArray = [['Area', 'label', '']];
  return (
    <>
      <Typography variant="h3" color="primary" align="center" className="header">
        {D.essnetCountriesTitle}
      </Typography>
      <Map data={geoJsonData} colors={colors} contentArray={contentArray} zoom={3.4} />
    </>
  );
};

export default EssNetCountries;
