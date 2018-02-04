import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  border-radius: 2px;
  margin: 0.5em;
  padding: 0.5em;
  width: 250px;
  heigth: 280px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 7px 7px rgba(0,0,0,0.22);
  }
`;

export default Card;

