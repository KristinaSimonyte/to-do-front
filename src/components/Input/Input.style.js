import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
  padding: 1rem;

  & label {
    color: ${pageColors.primary};
    font-size: 1.25rem;
    font-weight: 900;
  }

  & input {
    background-color: inherit;
    border: none;
    border-bottom: 1px solid ${pageColors.primary};
    padding: 0.25rem 0;

    &:focus {
      outline: none;
    }
  }
`;
