const db = require('../src/config/db.config');
require("dotenv").config();
const cors = require('cors');
const express = require("express");
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

// accessible to any
app.use(cors());

// database
db.sequelize.sync().then(() => {
    console.log("Database Synced Successfully");
    // initial();
});

// initial and import data
// function initial() {
//     Role.create({
//       id: 1,
//       name: "user"
//     });
   
//     Role.create({
//       id: 2,
//       name: "moderator"
//     });
   
//     Role.create({
//       id: 3,
//       name: "admin"
//     });
// }

// Body Parser middleware to handle raw JSON files
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

// app.use(express.static(path.join(__dirname, 'build')));

// routes
app.use('/api/auth', require('./routes/auth.route')); // authentication routes

app.use('/api/subscribers', require('./routes/subscribers.route')); // users routes

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', '../../../client-sidedominicana/build/index.html'));
// })

// when invalid routes are entered
app.use(async (req, res) => {
    res.status(404).send(`Route is no where to be found.`);
});

module.exports = app;