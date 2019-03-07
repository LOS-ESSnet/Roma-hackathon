import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const configureStore = mainReducer =>
  createStore(
    mainReducer,
    undefined,
    compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      /* eslint no-underscore-dangle: 0 */
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        : f => f
    )
  );

export default configureStore;
