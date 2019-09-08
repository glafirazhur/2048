import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './css/variables.css';
import './css/common.css';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import reducer from './Redux/reducers';

import AppContainer from './Containers/AppContainer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  persistedReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <AppContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
