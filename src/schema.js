const { makeExecutableSchema } = require('graphql-tools');

const Article = require('./types/Article');
const InputArticle = require('./types/InputArticle');
let articles = require('./data/articles.json');

const Queries = `
  type Query {
    wishlist: [Article]
  }
`;

const Mutations = `
  type Mutation {
    addArticle(article: InputArticle!): Article
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    Queries,
    Mutations,
    Article,
    InputArticle,
  ],
  resolvers: {
    Query: { wishlist: () => articles },
    Mutation: {
      addArticle: (_, { article }) => {
        const newArticle = {
          id: articles.length,
          ...article,
        };

        articles = articles.concat(newArticle);
        return newArticle;
      },
    },
  },
});

module.exports = schema;
