const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const Sequelize = require('sequelize');

const app = express();

const db = new Sequelize('postgres://localhost/hatapp');

const Hat = db.define('hat', {
  kind: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.ENUM('blue', 'red', 'black')
  },
  brim: {
    type: Sequelize.BOOLEAN
  },
  weight: {
    type: Sequelize.DECIMAL
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(volleyball);

app.use(express.static(__dirname));

const port = 3001;
db.sync()
.then(function () {
  app.listen(port, function (err) {
    if (err) {
      console.error('Failed to start listening');
      console.error(err);
    } else {
      console.log('Listening on port', port);
    }
  });
})
.catch(function (err) {
  console.error('Failed to connect to db');
  console.error(err);
});
