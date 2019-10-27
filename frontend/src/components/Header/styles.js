import styled from 'styled-components';

export const Container = styled.div`
  background: #170e1a;
  padding: 0 30px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Content = styled.div`
  height: 80px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    border: 0;
    background: #d44059;
    width: 71px;
    height: 42px;
    color: #fff;
    border-radius: 4px;
  }
`;
