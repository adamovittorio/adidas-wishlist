const { makeExecutableSchema } = require('graphql-tools');

const Article = require('./types/Article');
const InputArticle = require('./types/InputArticle');

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
    Query: { wishlist: (_, args, ctx) => ctx.articles },
    Mutation: {
      addArticle: (_, { article }, ctx) => {
        const newArticle = {
          id: ctx.articles.length,
          ...article,
        };

        ctx.articles = ctx.articles.concat(newArticle);
        return newArticle;
      },
    },
  },
});

module.exports = schema;
