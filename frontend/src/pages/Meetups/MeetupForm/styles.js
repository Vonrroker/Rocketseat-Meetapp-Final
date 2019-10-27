import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      width: 100%;
      border: 0;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      margin-top: 10px;
      padding-left: 20px;
      color: #fff;
      font-size: 18px;
      line-height: 21px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      &:focus {
        border: 2px solid #f94d6a;
      }
    }

    textarea {
      height: 200px;
      border: 0;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      margin-top: 10px;
      padding: 20px;
      color: #fff;
      font-size: 18px;
      line-height: 21px;
      resize: vertical;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      &:focus {
        border: 2px solid #f94d6a;
      }
    }

    .buttonSubmit {
      display: flex;
      justify-content: flex-end;

      button {
        color: #fff;
        border: 0;
        height: 42px;
        width: 180px;
        background: #f94d6a;
        border-radius: 4px;
        margin-top: 20px;
        margin-bottom: 50px;
      }
    }

    span {
      margin: 5px;
      padding-left: 10px;
      color: rgba(249, 77, 106, 0.7);
    }
  }
`;
