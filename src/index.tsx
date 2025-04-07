import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/app/app';
import { shortOffers } from 'mocks/shortOffers';
import { fullOffers } from 'mocks/fullOffers';
import { CITY } from 'mocks/city';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={10} shortOffers={shortOffers} fullOffers={fullOffers} city={CITY} />
  </React.StrictMode>
);
