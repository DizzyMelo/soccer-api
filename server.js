const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const globalErrorHandler = require('./controllers/errorController');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use('/api/v1/', require('./routes'));

mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'));


app.use(globalErrorHandler);

const server = app.listen(port, () => {
    console.log('server running');
});