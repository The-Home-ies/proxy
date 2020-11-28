const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const app = express();

app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, '..', 'public')));

app.use('/:id/bundles', router.bundles);
app.use('/api', router.api);

module.exports = app;
