import { PropTypes } from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,
  suggestion: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  rating: PropTypes.string,
  reviews: PropTypes.string,
  separatedSalePrice: PropTypes.string,
  separatedStandartPrice: PropTypes.string,
  subTitle: PropTypes.string,
  isPreorder: PropTypes.string,
});
