import React from 'react';
import Classifications from 'components/classifications';
import EssNetCountries from 'components/essnet-countries';
import Arrivals from 'components/arrivals';
import D from 'i18n';
import { UnfoldMore, Map, Flight } from '@material-ui/icons';

export default [
  {
    route: '/classifications',
    title: D.classificationsTitle,
    component: Classifications,
    icon: <UnfoldMore />,
  },
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
    icon: <Flight />, // DonutLarge
  },
];
