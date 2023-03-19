import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: solid 1px black;
`;
export const  Description = styled.div`
    padding: 15px;
`
export const Wrapper = styled.ul`
  padding-bottom: 20px;
  border-bottom: solid 1px black;
`;

export const BackLink = styled(Link)`
display: block;
width: 100px;
/* margin-bottom: 10px; */
  padding: 10px;
  &:hover{
    color: orange;
  }
`