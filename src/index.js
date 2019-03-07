import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from 'components/router';
import configureStore from 'store/configure-store';
import { getReducer, setQueryURL } from 'sparql-connect';
import { sparqlConfig } from 'config';
import './index.scss';

setQueryURL(sparqlConfig.SPARQL_ENDPOINT_LOS_NUTS);
const store = configureStore(getReducer());

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
