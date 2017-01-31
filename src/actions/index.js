import axios from 'axios';

export const FETCH_POPULAR = 'FETCH_POPULAR';
export const FETCH_RATED = 'FETCH_RATED';
export const FETCH_THEATER = 'FETCH_THEATER';
export const SEARCH = 'SEARCH';
export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';
export const DELETE_SEARCH = 'DELETE_SEARCH';
const ROOT_URL = 'http://localhost:3000'
export const IMG_URL = "http://image.tmdb.org/t/p/w154/"


export function fetchMostPopular(){
  const request = axios.get(`${ROOT_URL}/movies/most_popular.json`);
  return{
    type: FETCH_POPULAR,
    payload: request
  }

}

export function fetchHighlyRated(){
  const request = axios.get(`${ROOT_URL}/movies/highly_rated.json`);
  return{
    type: FETCH_RATED,
    payload: request
  }
}

export function fetchInTheaters(){
  const request = axios.get(`${ROOT_URL}/movies/in_theaters.json`);
  return{
    type: FETCH_THEATER,
    payload: request
  }

}

export function searchMovies(search){
  const request = axios.post(`${ROOT_URL}/movies/search.json?search=${search}`);
  return {
    type: SEARCH,
    payload: request
  }
}


export function searchMoviesSubmit(search){
  const request = axios.post(`${ROOT_URL}/movies/search.json?search=${search}`);
  return {
    type: SEARCH_SUBMIT,
    payload: request
  }
}

export function deleteSearchedMovie(){
  return{
    type: DELETE_SEARCH
  }
}
