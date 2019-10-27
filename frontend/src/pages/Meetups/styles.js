import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
`;

export const HeaderMeetups = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 32px;
    line-height: 37px;
    color: #fff;
  }

  button {
    width: 172px;
    height: 42px;
    color: #fff;
    border: 0;
    background: #f94d6a;
    border-radius: 4px;
  }
`;

export const ListMeetups = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 62px;
    padding-left: 30px;
    padding-right: 77px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-bottom: 10px;

    strong {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;

      color: #ffffff;
    }

    span {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
