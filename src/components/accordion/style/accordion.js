import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
  /* border-bottom: 10px; */
  max-width: 1200px;
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Inner = styled.div`
  display: flex;
  padding: 40px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background-color: #444;
  }

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    height: auto;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  width: 100%;

  transition: opacity 0.5s ease-in-out;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
