import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 100px 45px;
  margin: 0;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 500;
  /* max-width: 840px; */
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
    padding: 0 20px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 26px;
  margin: 16px auto;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
