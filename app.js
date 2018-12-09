const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const saveCustomer = require('./index').saveCustomer;
const getCustomers = require('./index').getCustomers;
const saveSchedule = require('./index').saveSchedule;
const getSchedule = require('./index').getSchedule;
const updateSchedule = require('./index').updateSchedule;
const getBookAuthorDetails = require('./index').getBookAuthorDetails;

app.use(express.static(path.join(__dirname, 'build')));

// Set up mongoose connection
const mongoDB = "******";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/saveCustomer', function (req, res) {
  saveCustomer(req.body).then(books => res.send(books));
});

app.post('/api/saveSchedule', function (req, res) {
  saveSchedule(req.body).then(books => res.send(books));
});

app.post('/api/updateSchedule', function (req, res) {
  updateSchedule(req.body).then(books => res.send(books));
});

app.get('/api/getCustomers', function (req, res) {
  getCustomers().then(customers => res.send(customers));
});

app.get('/api/getSchedule', function (req, res) {
  getSchedule(req.query.customerId).then(schedule => res.send(schedule));
});

app.get('/api/getAuthorDetails', function (req, res) {
  getBookAuthorDetails(req.query.q).then(authorDetails => res.send(authorDetails));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3001;

app.set('port', port);
app.listen(port);
