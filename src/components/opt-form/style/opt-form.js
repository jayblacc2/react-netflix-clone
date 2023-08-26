import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  border: 1px solid #f2f2f2;
  font-size: 20px;
  background-color: #0000009a;
  border-radius: 3px;
  transition: all 0.3s ease;

  &::placeholder {
    font-size: 20px;
  }

  &:focus {
    outline: 2px solid #f2f2f2;
  }

  @media (max-width: 600px) {
    height: 50px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #e50914;
  color: #fff;
  padding: 0px 32px;
  font-size: 28px;
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  margin-left: 10px;
  transition: all 0.3s ease;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 19px;
  color: #fff;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  line-height: 0;
`;
