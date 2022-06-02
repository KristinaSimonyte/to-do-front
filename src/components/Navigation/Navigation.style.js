import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

export const Navigation = styled.div`
  background-color: ${pageColors.primary};
  box-shadow: 0 5px 10px ${pageColors.shadow};

  & .nav-wrapper {
    display: flex;
    justify-content: right;
    margin: auto;
    padding: 1rem 0;
    width: 80%;
  }

  & nav {
    height: 100%;
  }

  & nav > a {
    color: ${pageColors.background};
    height: 100%;
    padding: 1rem;
    text-decoration: none;

    :hover {
      background-color: ${pageColors.hover};
    }
  }

  & .active {
    background-color: ${pageColors.secondary};
  }
`;
