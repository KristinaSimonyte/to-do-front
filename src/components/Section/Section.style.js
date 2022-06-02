import styled from 'styled-components';
import pageColors from '../../helpers/pageColors';

function convertWidth(width, x) {
  if (width && width.includes('%')) {
    const widthNumber = width.split('%')[0];
    const newWidth = Number(widthNumber) * x + '%';
    return newWidth;
  }
  return width;
}

export const Section = styled.div`
  background-color: ${(props) => props.background};
  box-shadow: ${(props) => props.shadow};
  height: ${(props) => props.height};
  margin: auto;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  position: relative;

  & h3 {
    color: ${pageColors.primary};
    font-size: 1.25rem;
  }

  & .flex-table {
    align-items: center;
    display: flex;
  }

  & .success-text {
    color: ${pageColors.hover};
    font-size: 0.85rem;
    position: absolute;
  }

  & .fail-text {
    color: ${pageColors.secondary};
    font-size: 0.85rem;
    display: inline-block;
    width: 60%;
    position: absolute;
    @media only screen and (max-width: 560px) {
      width: 45%;
    }
  }

  & .no-todos-text {
    color: ${pageColors.primary};
    font-size: 0.85rem;
    padding-bottom: 1rem;
    display: inline-block;
  }

  & .task-submit-text {
    padding-left: 1rem;

    @media only screen and (max-width: 560px) {
      width: 100%;
    }
  }

  &.responsive-wrapper {
    @media only screen and (max-width: 560px) {
      width: 100%;
    }
  }

  &.responsive-container {
    @media only screen and (max-width: 560px) {
      padding: 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    width: ${(props) => convertWidth(props.width, 1.75)};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => convertWidth(props.width, 2.25)};
  }
`;
