const express = require('express');
//const path = require('path');
const app = express();

//app.use(express.static(path.join(__dirname,
app.use('/cats', require('./controllers/cats'));
app.use('/cats/:id', (req, res) => {
  let match;
  for (const cat of cats) {
    if (cat.id === req.params.id) {
      match = cat;
    }
  }
});

module.exports = app;
