import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  color: white;
  cursor: pointer;
  font-family: inherit;
  margin: 0 1rem;
  padding: 1rem 2rem;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 1;
  }
`;
