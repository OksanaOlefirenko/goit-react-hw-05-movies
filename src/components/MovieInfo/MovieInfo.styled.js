import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  padding: 30px;
`;
export const Image = styled.img`
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: scale(1);
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.1);
    transition: all 250ms linear;
  }
`;
export const Info = styled.div`
  text-align: center;
  line-height: 2;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const Title = styled.h1`
  color: red;
  margin-bottom: 20px;
`;

export const AddInfo = styled.h2`
  color: green;
  margin-bottom: 20px;
  padding-left: 50px;
`;
