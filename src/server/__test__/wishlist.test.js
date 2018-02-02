const _ = require('lodash');
const { graphql } = require('graphql');
const schema = require('../schema');

const articles = require('../data/articles.json');

describe('whishlist query', () => {
  test('should return a list of articles', async () => {
    const query = `
      query {
        wishlist {
          id
          suggestion
          image
          subTitle
        }
      }
    `;

    const rootValue = {};
    const context = { articles: _.clone(articles) };

    const result = await graphql(schema, query, rootValue, context);
    const { data } = result;

    expect(data.wishlist).toEqual(context.articles);
  });
});
