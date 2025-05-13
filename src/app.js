const db = require('../src/config/db.config');
const cors = require('cors');
const express = require("express");
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

// Serve React build
app.use(express.static(path.join(__dirname, '../client-admin/build')));

// Accessible to any
app.use(cors());

// Database synchronization
// db.sequelize.sync().then(() => {
//     console.log("Database Synced Successfully");
//     // initial();
// });

// Body Parser middleware to handle raw JSON files
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

// Routes - Endpoints
app.use('/api/auth', require('./routes/auth.route')); // authentication management routes
app.use('/api/subscribers', require('./routes/subscribers.route')); // users management routess
app.use('/api/blog', require('./routes/blog.route')); //blog management routes

// When invalid routes are entered
app.use(async (req, res) => {
    res.status(404).send(`Route is no where to be found.`);
});

// Initialization and import data
// init = () => {
//     Role.create({ id: 1, name: "user" });
//     Role.create({ id: 2, name: "moderator" });
//     Role.create({ id: 3, name: "admin" });
//     console.log("Data loaded");
// }

module.exports = app;