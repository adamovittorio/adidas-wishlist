const InputArticle = `
  input InputArticle {
    suggestion: String!
    image: String
    url: String
    rating: Int
    reviews: Int
    price: Int
    currency: String
    subTitle: String
    isPreorder: Boolean
  }
`;

module.exports = InputArticle;
