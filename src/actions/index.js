import axios from 'axios';

export const FETCH_POPULAR = 'FETCH_POPULAR';
export const FETCH_RATED = 'FETCH_RATED';
export const FETCH_THEATER = 'FETCH_THEATER';
export const SEARCH = 'SEARCH';

const ROOT_URL = 'http://localhost:3000'


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
