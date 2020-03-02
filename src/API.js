const BASE_URL = 'http://localhost:3005/characters';
const CHAR_URL = id => BASE_URL + id;
const BASE_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};
export default {
  BASE_URL,
  CHAR_URL,
  BASE_HEADERS
};
