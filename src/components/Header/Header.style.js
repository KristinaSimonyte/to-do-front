import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

export const Header = styled.div`
  align-items: center;
  background-color: ${(props) => props.background};
  color: ${pageColors.background};
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  & h1 {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
    margin: 0;
  }
`;
