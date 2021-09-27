const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
require('dotenv').config();
// init handlebars for html templates
const hbs = exphbs.create({});
// Express session for session cookies
const session = require('express-session');
// init server
const app = express();
const PORT = process.env.PORT || 3001;
// Sequelize store session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// init sessions
const sess = {
  secret: '',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};



//express.static = middleware takes folder contents and serves them as static 
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session(sess));
app.use(routes);


// turn on connection to db and then to server
// force: true to reset the database and clear all values, updating any new relationships
// force: false to maintain data - aka normal operation
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
})