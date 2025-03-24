import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/app/app';
import { shortOffers } from 'mocks/shortOffers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={10} offers={shortOffers}/>
  </React.StrictMode>
);
