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

  .cancelar {
    width: 138px;
    height: 42px;
    color: #fff;
    border: 0;
    background: #f94d6a;
    border-radius: 4px;
    margin-left: 15px;
  }

  .editar {
    width: 116px;
    height: 42px;
    color: #fff;
    border: 0;
    background: #4dbaf9;
    border-radius: 4px;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: #d8d8d8;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 25px;

  img {
    max-width: 940px;
    height: auto;
  }
`;

export const InfoMeetup = styled.div`
  span {
    font-size: 18px;
    line-height: 32px;
    color: #ffffff;
  }

  nav {
    display: flex;
    flex-direction: row;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 30px;

    h1 {
      padding-left: 30px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
