const express = require('express');
const server = express();

server.get('/catalog', (req, res) => {
  res.send('All good');
});

server.listen(3000, () => {
  console.log('hu');
});
