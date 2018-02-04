//Twój kod
const express = require('express');
const app = express();
let name = '';
app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/name/set/:myname', (req, res) => {
  name = req.params.myname;
  res.send('hello ' +name);
});

app.get('/name/show', (req, res) => {
  res.send('the name is ' +name);
});

app.get('/name/check', (req, res) => {
  if(name) {
    res.send('the name has been saved');
  } else {
    res.send('no name has been saved');
  }
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});