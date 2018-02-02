import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: flex;
  width: 75%;
  height: 20px;
  font-size: 18px;
  padding: 0.5em;
  border-left: 1px solid ${({ theme }) => theme.primary};
  border-top: 1px solid ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  border-right: none;
  border-radius: 3px 0px 0px 3px;
  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  @media (max-width: 900px) {
    width: 100%;
  }
  display: flex;
  width: 33%;
  flex-direction: row;
  padding: 1em;
`;

const Button = styled.button`
  width: 100px;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0px 3px 3px 0px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:disabled {
    color: ${({ theme }) => theme.secondary};
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
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.search(searchTerm);
  }
  render() {
    const { searchTerm } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          placeholder="Ultraboost"
          onChange={this.onChange}
          value={this.state.searchTerm}
        />
        <Button submit disabled={searchTerm.length <= 1}> SEARCH </Button>
      </Form>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

export default SearchBar;
