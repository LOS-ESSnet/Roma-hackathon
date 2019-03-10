import React from 'react';
import EssNetCountries from 'components/essnet-countries';
import Arrivals from 'components/arrivals';
import ArrivalsMap from 'components/arrivals-map';
import TypeOfHousing from 'components/type-of-housing';
import D from 'i18n';
import { Map, Flight, DonutLarge } from '@material-ui/icons';

export default [
  {
    route: '/essnet-countries',
    title: D.essnetCountriesTitle,
    component: EssNetCountries,
    icon: <Map />,
  },
  {
    route: '/2015-arrivals',
    title: D.arrivalsTitle,
    component: Arrivals,
    icon: <Flight />,
  },
  {
    route: '/2015-arrivals-map',
    title: D.arrivalsTitle,
    component: ArrivalsMap,
    icon: (
      <>
        <Map />
        <Flight />
      </>
    ),
  },
  {
    route: '/type-of-housing',
    title: D.typeOfHousingTitle,
    component: TypeOfHousing,
    icon: <DonutLarge />,
  },
];
