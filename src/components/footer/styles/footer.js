import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  flex-direction: column;
  padding: 70px 56px;
  margin: auto;

  @media (max-width: 1000px) {
    padding-left: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;

  @media (max-width: 600px) {
    border-bottom: 5px solid #333;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(autofill, minmax(150px, auto));
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  text-decoration: none;
  font-size: 13px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-top: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
