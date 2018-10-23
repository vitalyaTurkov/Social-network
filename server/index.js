const db = require('./model/db');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
require('./pages')(app);

db.setUpConnection();

app.listen(3001, () => {
    console.log('server started');
});
