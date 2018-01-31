import React from 'react';
import { Link } from 'react-router-dom';

import { SEARCH, WISHLIST } from '../types/routes';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to={SEARCH}> Search </Link></li>
        <li><Link to={WISHLIST}> Wishlist </Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
