import express from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import messages from './messages.json';

import Pages from './pages/containers/Page';
import Layout from './pages/components/Layout';

const domain = process.env.NODE_ENV === 'production' ? 'https://proyecto-react-sfs.now.sh' : 'http://138.68.131.182:3002';

const app = express();

function requestHandler(request, response) {
  const locale = request.headers['accept-language'].indexOf('es') >= 0 ? 'es' : 'en';

  const context = {};

  const html = renderToString(
    <IntlProvider locale={locale} messages={messages[locale]} >
      <StaticRouter location={request.url} context={context}>
        <Pages domain={domain} />
      </StaticRouter>
    </IntlProvider>,
  );

  response.setHeader('Content-Type', 'text/html');

  if (context.url) {
    response.writeHead(301, {
      Location: context.url,
    });
    response.end();
  }

  response.write(
    renderToStaticMarkup(
      <Layout
        title="Enjoy Life"
        content={html}
        domain={domain}
      />,
    ),
  );
  response.end();
}

app.get('*', requestHandler);

app.listen(3000);
