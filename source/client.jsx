import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'; 

import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import injectTapEventPlugin from 'react-tap-event-plugin';

import messages from './messages.json';
import Pages from './pages/containers/Page';

injectTapEventPlugin();

addLocaleData([...en, ...es]);

const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en';




const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

const store = createStore(
        allReducers,
        {
            products: [{ name: 'moto' }],
            user: 'Miguel'
        },
);

console.log(store.getState());

render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('render-target'),
);
