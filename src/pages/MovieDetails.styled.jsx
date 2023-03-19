import styled from '@emotion/styled';
import { Link } from 'react-router-dom';



export const Card = styled.div`
  /* @media screen and(min-width: 420px) {
    flex-wrap: wrap;
  } */

  display: flex;
  @media (max-width: 520px) {
    flex-wrap: wrap;
  }
  flex-wrap: nowrap;
  padding-bottom: 20px;
  border-bottom: solid 1px black;
`;
// export const StyledImg = styled.img`
//   display: block;
//   max-width: 100%;
//   height: auto;
// `;

export const Description = styled.div`
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