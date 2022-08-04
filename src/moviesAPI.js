const axios = require('axios');
export const API_KEY = '250f014fd6a936550e378176122f5d39';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getMovieById = async id => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const getCast = async id => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.cast;
};

export const getReviews = async id => {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getSearchMovie = async query => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data.results;
};
