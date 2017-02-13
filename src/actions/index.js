import axios from 'axios';

export const FETCH_POPULAR = 'FETCH_POPULAR';
export const FETCH_RATED = 'FETCH_RATED';
export const FETCH_THEATER = 'FETCH_THEATER';
export const SEARCH = 'SEARCH';
export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';
export const DELETE_SEARCH = 'DELETE_SEARCH';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_STATE = 'RESET_STATE';

// const ROOT_URL = 'http://localhost:3000'
const ROOT_URL = 'https://rails-api-movie-gen-isuruv.c9users.io'
export const IMG_URL = "https://image.tmdb.org/t/p/w154/"


export function fetchMostPopular(){
  const request = axios.get(`${ROOT_URL}/movies/most_popular`);
  return{
    type: FETCH_POPULAR,
    payload: request
  }

}

export function fetchHighlyRated(){
  const request = axios.get(`${ROOT_URL}/movies/highly_rated`);
  return{
    type: FETCH_RATED,
    payload: request
  }
}

export function fetchInTheaters(){
  const request = axios.get(`${ROOT_URL}/movies/in_theaters`);
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

export function getMovieInfo(id){
  const request = axios.get(`${ROOT_URL}/movies/${id}`);
  return{
    type: GET_MOVIE,
    payload: request
  }
}

export function resetState(){
  return{
    type: RESET_STATE
  }
}

export const GET_LINKS = "GET_LINKS";
export function fetchLinks(title){
  const request = axios.get(`${ROOT_URL}/movies/title/${title}`);
  return{
    type: GET_LINKS,
    payload: request
  }
}

export const GET_FB_ID = "GET_FB_ID";
// fb_id=${user.id}?first_name=${user.first_name}?last_name=${user.last_name}?email=${user.email}
export function getFBID(user){
  const request = axios.post(`${ROOT_URL}/users`,{
    user:{
      fb_id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    }
  })
  return{
    type: GET_FB_ID,
    payload: request
  }
}


export const ADD_MOVIE = "ADD_MOVIE";
export function addMovie(movie, fb_id){
  const request = axios.post(`${ROOT_URL}/users/${fb_id}/movies`,{
    movie:{
      movie_id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path
    }
  })
  return{
    type: ADD_MOVIE,
    payload: request
  }
}

export const GET_MOVIE_LIST = "Get_MOVIE_LIST";
export function getMovieList(fb_id){
  const request= axios.get(`${ROOT_URL}/users/${fb_id}/movies`)
  return{
    type: GET_MOVIE_LIST,
    payload: request
  }
}

export const DELETE_MOVIE = "DELETE_MOVIE";
export function deleteMovie(fb_id, movie_id){
  const request = axios.post(`${ROOT_URL}/users/${fb_id}/movies/${movie_id}`)
  return {
    type: DELETE_MOVIE,
    payload: request
  }
}
