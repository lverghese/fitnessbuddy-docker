const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const {goals} = require('./db/testdata.json');

app.get('/', (req, res) => {
    //login page 
  res.send('FITNESS BUDDY');
});

app.get('api/goals', (req, res) => {
    //from signup ->
    res.send('What are ur goals?');
});

app.listen(PORT, () => {
  console.log(`LISTENING AT http://localhost:${PORT}`);
});