import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import App from './index';
import template from './template';
import addRoutes from './routes';

const server = express();

// server.use('/assets', express.static('assets'));
// only use this if you end up creating an asset folder, otherwise find a way to
//dynamically pull my individual stylesheets from IndexStyles.js ? maybe? WOULD
// i need to create a seperate index for the pages styles?
server.get('/Photos', function(req, res, next) {
  res.locals.initialState = { text: 'I will be your photo page' };
  next();
});

addRoutes(server);

server.use(function(req, res, next) {
  const { component, initialState } = res.locals;
  if (!component) {
    return next();
  }

  res.format({
    'text.html': function() {
      const appString = renderToString(React.createElement(component, initialState));
      res.send(index({
        body: appString,
        initialState: JSON.stringify(initalState)
      }));
    },

    'application/json': function() {
      res.send(initialState);
    },
  });

  next();
});

server.listen(8080);
console.log('listening');
