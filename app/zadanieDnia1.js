//Twój kod
const express = require('express');
const app = express();
const votes = {
  yes: 0,
  no: 0,
  maybe: 0
};
app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:dec', (req, res) => {
  votes[req.params.dec]++;
  res.send('Dziękujemy za głos!')
});

app.get('/votes/check', (req, res) => {
  res.send(`Yes: ${votes.yes} No:  ${votes.no} Maybe: ${votes.maybe}`);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});