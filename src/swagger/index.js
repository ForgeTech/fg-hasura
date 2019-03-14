const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const graphQLSchema = require('swagger-to-graphql');

const proxyUrl = 'https://playground.powerbot-trading.com/api/v0';
const pathToSwaggerSchema = './src/swagger/powerbot-api-v0.swagger.json';
const customHeaders = {
  // Authorization: 'Basic YWRkOmJhc2ljQXV0aA=='
}

graphQLSchema(pathToSwaggerSchema, proxyUrl, customHeaders).then(schema => {
  app.use('/graphql', graphqlHTTP(() => {
    return {
      schema,
      graphiql: true
    };
  }));

  app.listen(3009, 'localhost', () => {
    console.info('http://localhost:3009/graphql');
  });
}).catch(e => {
  console.log(e);
});