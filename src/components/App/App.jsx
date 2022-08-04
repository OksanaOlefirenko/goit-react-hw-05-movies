import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { lazy } from 'react';

const createAsyncPage = componentName => {
  return lazy(() =>
    import(`../../pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const Home = createAsyncPage('Home');
const Movies = createAsyncPage('Movies');
const MovieDetails = createAsyncPage('MovieDetails');
const CastPage = createAsyncPage('CastPage');
const ReviewsPage = createAsyncPage('ReviewsPage');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<CastPage />} />
          <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
