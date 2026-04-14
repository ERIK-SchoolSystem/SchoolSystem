const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('SchoolSystem rodando 🚀');
});

app.listen(3000, () => {
  console.log('Servidor na porta 3000');
});