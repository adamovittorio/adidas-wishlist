import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  height: 20px;
  font-size: 18px;
  width: 33%;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }
  onChange = ({ target }) => {
    this.setState({
      searchTerm: target.value,
    }, () => {
      const { searchTerm } = this.state;
      if (this.debouce) { this.debounce.clearTimeout(); }
      if (searchTerm.length <= 1) { return; }
      this.debounce = setTimeout(() => this.props.search(searchTerm), 800);
    });
  }
  render() {
    return (
      <Input
        placeholder="Ultraboost"
        onChange={this.onChange}
        value={this.state.searchTerm}
      />
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
