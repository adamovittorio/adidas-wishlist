const _ = require('lodash');
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
    removeArticle(articleId: Int!): Article
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
    Query: { wishlist: (obj, args, ctx) => ctx.articles },
    Mutation: {
      addArticle: (obj, { article }, ctx) => {
        const newArticle = {
          id: ctx.articles.length,
          ...article,
        };

        ctx.articles = ctx.articles.concat(newArticle);
        return newArticle;
      },
      removeArticle: (obj, { articleId }, ctx) => {
        const removed = _.remove(ctx.articles, ({ id }) => id === articleId);
        return removed[0];
      },
    },
  },
});

module.exports = schema;
