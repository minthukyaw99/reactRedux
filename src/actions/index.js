import axios from 'axios';

const API_KEY = 'e0bc7d8c1f73dbab4b1da02cca2bd389';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FEATCH_WEATHER';
export function fetchWeatherInfo (city) {

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
