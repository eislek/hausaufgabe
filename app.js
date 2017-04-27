const express = require('express');

const about = require('./handler/about');
const root = require('./handler/root');

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views');

app.get('/', root);

app.get('/about', about);

app.listen(8080);