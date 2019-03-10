import React from 'react';
import Typography from '@material-ui/core/Typography';
import Map from 'components/shared/map/colored-map';
import D from 'i18n';
import { wktToGeojson } from 'utils/map/wkt-to-geojson';

const EssNetCountries = ({ essNetCountries }) => {
  const colors = ['#D3195C', '#D3195C'];
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
