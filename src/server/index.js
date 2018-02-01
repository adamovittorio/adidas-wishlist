const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./schema');
const articles = require('./data/articles.json');

const app = express();

app.use(cors());

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      articles,
    },
  }),
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3001, () => {
  // eslint-disable-next-line
  console.log(`
  [server] server listening on http://localhost:3001/graphql
  [server] docs and graphiql on http://localhost:3001/graphiql
  `);
});
