import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Navigation, StyledLink, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation> 
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
