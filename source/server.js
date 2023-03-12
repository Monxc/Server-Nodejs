const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const path = require('path');
const route = require('./route');
const db = require('./config/db/index');

db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './views'));
app.listen(3000);
