const express = require('express');
const { engine } = require('express-handlebars');
                                        const app = express();
var path = require('path');
const route = require('./route');

app.use(express.urlencoded({ extended: true }));
                                    app.use(express.json());

                                    app.use(express.static(path.join(__dirname, 'public')));

route(app);

            app.engine('hbs', engine({ extname: 'hbs' }));
                            app.set('view engine', '.hbs');
                                                app.set('views', path.join(__dirname, './views'));
                                app.listen(3000);
