import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import {DefaultSettings} from './const.ts';
import { offers } from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App
      placesCount={DefaultSettings.PlacesCount}
      offers={offers}
    />
  </React.StrictMode>
);
