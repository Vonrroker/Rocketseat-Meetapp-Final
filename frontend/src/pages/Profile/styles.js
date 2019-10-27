import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      &:focus {
        border: 2px solid #f94d6a;
      }
    }

    p {
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 20px;
      margin-bottom: 19px;
    }
    div {
      display: flex;
      justify-content: flex-end;

      button {
        color: #fff;
        border: 0;
        width: 162px;
        height: 42px;
        background: #f94d6a;
        border-radius: 4px;
      }
    }

    span {
      margin: 5px;
      padding-left: 10px;
      color: rgba(249, 77, 106, 0.7);
    }
  }
`;
