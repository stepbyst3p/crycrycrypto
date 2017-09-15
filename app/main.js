import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './config/Root';

const CoinMarketCap = require('coinmarketcap-api')

const client = new CoinMarketCap()

client.getTicker({
  limit: 3,
}).then(console.log).catch(console.error)
client.getTicker({
  limit: 1,
  currency: 'bitcoin',
}).then(console.log).catch(console.error)
client.getTicker({
  convert: 'EUR',
}).then(console.log).catch(console.error)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
