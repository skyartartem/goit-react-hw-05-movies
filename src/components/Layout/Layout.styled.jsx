import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
/* margin-bottom: 10px; */
  padding-left: 10px;
  padding-right: 10px;
  /* margin-left: auto;
  margin-right: auto; */
  /* width: 1280px; */
`;
export const Header = styled.header`
  border-bottom: solid 1px black;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 20px; */
`;
export const Navigation = styled.nav`
display: inline-flex;
gap: 20px;
    padding: 20px;
    /* border-bottom: solid 10px black; */
`
export const StyledLink = styled(NavLink)`
    font-size: 17px;
    text-decoration: none;
  color: black;
 font-weight: 700;
 &:hover {
    text-decoration: underline;
 }
  &.active {
    color: orange;
  }
`;