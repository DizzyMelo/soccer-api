const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const globalErrorHandler = require('./controllers/errorController');
const { auth } = require('express-openid-connect');

dotenv.config();
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  secret: process.env.SECRET,
};

const port = process.env.PORT || 3000;

app.use(auth(config));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use('/api/v1/', require('./routes'));

app.use('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'You are logged in' : 'You are logged out');
})

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