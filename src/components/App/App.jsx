// import { Route, Routes } from 'react-router-dom';
import { Container, Header, Logo, Link } from './App.styled';
import { GiFilmProjector } from 'react-icons/gi';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <GiFilmProjector size={40} color={'red'} /> The movie DB
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
    </Container>
  );
};
