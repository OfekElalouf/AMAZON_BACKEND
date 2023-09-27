const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send());

app.get('/blog', (req, res) => res.send());

app.post('/product', (req, res) =>{
    console.log(req.body);
    res.send(req.body);
})

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Connected to mongodb!");
    app.listen(port, () => {
      console.log("Server listening on port " + port);
    });
  })
  .catch((e) => console.log(e));
