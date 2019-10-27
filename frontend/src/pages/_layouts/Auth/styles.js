import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      border: 0;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 4px;
      height: 50px;
      margin: 0 0 10px;
      padding-left: 20px;
      font-size: 18px;
      line-height: 21px;
    }

    button {
      border: none;
      background: #f94d6a;
      border-radius: 4px;
      height: 50px;
      margin: 5px 0 5px;
      font-weight: bold;
      color: #fff;
    }

    a {
      color: rgba(255, 255, 255, 0.6);
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      margin-top: 15px;
    }

    span {
      color: #cc3300;
      margin-bottom: 5px;
    }
  }
`;
