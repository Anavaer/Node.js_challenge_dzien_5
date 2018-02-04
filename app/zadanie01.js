//Twój kod
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/sum/:num1/:num2', (req, res) => {
  const sum = parseInt(req.params.num1) + parseInt(req.params.num2);
  res.send('Your sum is ' +sum);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});