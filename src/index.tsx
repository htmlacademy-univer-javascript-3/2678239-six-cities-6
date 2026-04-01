import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {loadOffersAction} from './store/apiActions.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
