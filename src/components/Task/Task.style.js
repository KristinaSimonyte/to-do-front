import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pageColors from '../../helpers/pageColors';

export const Task = styled.div`
  align-items: center;
  border-top: 1px solid ${pageColors.primary};
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  justify-items: center;
  padding: 0.1rem 0;

  & input {
    cursor: pointer;
  }

  & p {
    cursor: pointer;
    justify-self: left;
    margin: 0;
    padding: 16px 0;
    width: 100%;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${pageColors.secondary};
  cursor: pointer;
`;
