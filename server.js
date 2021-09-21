const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const {goals} = require('./db/testdata.json');

app.get('/', (req, res) => {
    //login page 
  res.send('FITNESS BUDDY');
});

app.listen(PORT, () => {
  console.log(`LISTENING AT http://localhost:${PORT}`);
});