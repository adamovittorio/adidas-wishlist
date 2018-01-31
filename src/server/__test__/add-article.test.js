const _ = require('lodash');
const { graphql } = require('graphql');
const schema = require('../schema');

describe('add article in wishlist', () => {
  test('should add a new article in an empty wishlist', async () => {
    const articles = [];

    const mutation = `
      mutation {
        addArticle(article: {
          suggestion: "Stan Smith Shoes",
          image: "https://www.adidas.co.uk/dis/dw/image/v2/aagl_prd/on/demandware.static/Sites-adidas-GB-Site/Sites-adidas-products/en_GB/v1517276533720/zoom/M20325_01_standard.jpg?sw=60&sh=60&sm=fit",
          url: "http://www.adidas.co.uk/stan-smith-shoes/M20325.html",
          rating: "5",
          reviews: "3118",
          separatedSalePrice: "null",
          separatedStandartPrice: "null",
          subTitle: "Originals",
          isPreorder: ""
        }) {
          id
          suggestion
        }
      }
    `;

    const rootValue = {};
    const context = { articles: _.clone(articles) };

    const result = await graphql(schema, mutation, rootValue, context);
    const { data } = result;

    expect(data.addArticle.id).toEqual(0);
    expect(context.articles).toHaveLength(1);
  });
});
