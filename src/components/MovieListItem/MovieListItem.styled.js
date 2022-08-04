import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const Item = styled.li`
  width: 300px;
  flex-basis: calc(100% / 4 - 30px);
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transform: scale(1);
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.1);
    transition: all 250ms linear;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 400px;
`;

export const Title = styled.p`
  font-weight: 500;
  padding: 10px 20px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
`;
