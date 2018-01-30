const { graphql } = require('graphql');
const schema = require('../src/schema');

const articles = require('../src/data/articles.json');

describe('whishlist query', () => {
  test('should return a list of articles', async () => {
    const query = `
      query {
        wishlist {
          id
          suggestion
          image
          url
          rating
          reviews
          separatedSalePrice
          separatedStandartPrice
          subTitle
          isPreorder
        }
      }
    `;

    const rootValue = {};
    const context = {};

    const result = await graphql(schema, query, rootValue, context);
    const { data } = result;

    // console.log(data);

    expect(data.wishlist).toEqual(articles);
  });
});
