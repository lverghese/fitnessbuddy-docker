const path = require('path');
require('dotenv').config();
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars')
// Express session for session cookies
const session = require('express-session')
// Sequelize store session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({});

const sess = {
  secret: 'super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

//express.static = middleware takes folder contents and serves them as static 
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session(sess));
app.use(routes);


//sync method to establish db connection...if it does not find a table it will create one for you
//force: true same as drop table if exists..can b annoying
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>  console.log('Now listening'));
});