import React from 'react';
import Classifications from 'components/classifications';
import EssNetCountries from 'components/essnet-countries';
import D from 'i18n';
import { UnfoldMore, Map } from '@material-ui/icons';

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
];
