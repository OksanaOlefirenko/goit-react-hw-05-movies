import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="film icon">
            <GiFilmProjector size={40} color={'red'} />
          </span>
          The movie DB
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </Container>
  );
};
