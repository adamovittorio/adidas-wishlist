const _ = require('lodash');
const { graphql } = require('graphql');
const schema = require('../schema');

const articles = require('../data/articles.json');

describe('remove article in wishlist by id', () => {
  test('should remove an article in an wishlist with length = 1', async () => {
    const mutation = `
      mutation {
        removeArticle(articleId: "asd123") {
          id
          suggestion
          image
          subTitle
        }
      }
    `;

    const rootValue = {};
    const context = { articles: _.clone(articles) }; // not by reference

    const result = await graphql(schema, mutation, rootValue, context);
    const { data } = result; // eslint-disable-line

    expect(context.articles).toHaveLength(0);
  });

  test('shouldn\'t remove anything if id it\'s missing ', async () => {
    const mutation = `
      mutation {
        removeArticle(articleId: "a123dsa") {
          id
          suggestion
          image
          subTitle
        }
      }
    `;

    const rootValue = {};
    const context = { articles: _.clone(articles) }; // not by reference

    const result = await graphql(schema, mutation, rootValue, context);
    const { data } = result; // eslint-disable-line

    expect(context.articles).toHaveLength(1);
  });
});
