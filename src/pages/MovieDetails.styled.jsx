import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: solid 2px black;
`;
export const  Description = styled.div`
    padding: 15px;
`
export const Wrapper = styled.ul`
  padding-bottom: 20px;
  border-bottom: solid 2px black;
`;

export const BackLink = styled(Link)`
  padding: 10px;
  &:hover{
    color: orange;
  }
`