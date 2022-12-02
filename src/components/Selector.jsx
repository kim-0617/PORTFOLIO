import React from 'react';
import { Standard, Responsive, Effect, Game, Php, VueSite, ReactSite } from '../stack';

function Selector({ value }) {
  switch (value) {
    case 'Standard':
      return <Standard />;
    case 'Responsive':
      return <Responsive />;
    case 'Effect':
      return <Effect />;
    case 'Game':
      return <Game />;
    case 'Php':
      return <Php />;
    case 'VueSite':
      return <VueSite />;
    case 'ReactSite':
      return <ReactSite />;
    default:
      return <Standard />;
  }
}

export default Selector;
