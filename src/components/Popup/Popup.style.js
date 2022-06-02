import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

export const Popup = styled.div`
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    color: ${pageColors.background};
    margin-bottom: 2rem;
  }

  & .flex {
    display: flex;
    justify-content: center;
  }
`;
