import axios from 'axios';

const instance = axios.create({
  method: 'get',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '250f014fd6a936550e378176122f5d39',
  },
});

export const getPopularMovies = async () => {
  const response = await instance('/trending/movie/day');
  return response.data.results;
};

export const getMovieById = async id => {
  const response = await instance(`/movie/${id}`);
  return response.data;
};

export const getCast = async id => {
  const response = await instance(`/movie/${id}/credits`);
  return response.data.cast;
};

export const getReviews = async id => {
  const response = await instance(`/movie/${id}/reviews`);
  return response.data.results;
};

export const getSearchMovie = async query => {
  const response = await instance(`/search/movie?query=${query}`);
  return response.data.results;
};
