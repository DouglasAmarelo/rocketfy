import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  box-shadow: 0 1px 4px 0 rgba(192, 2018, 230, 0.8);
  cursor: grab;
  margin-bottom: 10px;
  padding: 15px;
  position: relative;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    border-radius: 2px;
    display: block;
    height: 24px;
    margin-top: 5px;
    width: 24px;
  }

  ${({ isDragging }) =>
    isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  background: ${({ color = '#000' }) => color};
  border-radius: 2px;
  display: inline-block;
  height: 10px;
  width: 10px;
`;
