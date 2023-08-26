import styled from 'styled-components';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Frame = styled.div``;

export const Background = styled.section`
  display: flex;
  flex-direction: column;

  background: url(${({src}) =>
      src ? `../image/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
    top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({dontShowOnSmallViewPort}) =>
      dontShowOnSmallViewPort && 'background: none;'}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Link = styled.p`
  margin-right: 30px;
  font-weight: ${({active}) => (active == true ? '700' : 'normal')};
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  background-color: #e50914;
  display: block;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f40612;
  }
`;

export const Logo = styled.img`
  width: 108px;
  height: 32px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    width: 167px;
    height: 45px;
  }
`;

export const Title = styled.h1``;
export const Text = styled.p``;
