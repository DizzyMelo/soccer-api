const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Soccer API',
    description: 'This api provides methods to manage soccer teams and players',
  },
  host: 'soccer-api.onrender.com',
  schemes: ['https'],
  basePath: '/api/v1/'
};

const outputFile = './documentation/swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);