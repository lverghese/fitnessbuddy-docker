const express = require('express');
const app = express();
const PORT = 3000;

const {goals} = require('./db/testdata.json');


app.get('/', (req, res) => {
  res.send('FITNESS BUDDY');
});

app.get('api/goals', (req, res) => {
    res.send('What are ur goals?');
});

app.listen(PORT, () => {
  console.log(`LISTENING AT http://localhost:${PORT}`);
});