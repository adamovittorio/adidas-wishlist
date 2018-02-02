const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./schema');
const articles = require('./data/articles.json');

const PORT = 3001;

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

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`
  [server] server listening on http://localhost:${PORT}/graphql
  [server] docs and graphiql on http://localhost:${PORT}/graphiql
  `);
});
