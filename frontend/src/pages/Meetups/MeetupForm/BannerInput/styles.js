import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  margin-top: 50px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  overflow: hidden;

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    cursor: pointer;
    font-size: 20px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.3);
    overflow: hidden;

    img {
      max-width: 940px;
      height: auto;
    }

    input {
      display: none;
    }
  }
`;
