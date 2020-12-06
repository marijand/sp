const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const errorhandler = require('errorhandler')

const PORT = process.env.PORT || 4000;

// Middelware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
//test
module.exports = app;