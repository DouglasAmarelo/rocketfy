import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 320px;
  height: 100%;
  padding: 0 15px;
  opacity: ${({ done }) => (done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    align-items: center;
    display: flex;
    height: 42px;
    justify-content: space-between;

    h2 {
      font-size: 16px;
      font-weight: 500;
      padding: 0 10px;
    }

    button {
      background: #3b5bfd;
      border-radius: 18px;
      border: none;
      cursor: pointer;
      height: 42px;
      width: 42px;
    }

    ul {
      margin-top: 30px;
    }
  }
`;
