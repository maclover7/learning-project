import axios from 'axios';

const countersUrl = 'https://api.myjson.com/bins/ywmke';

export default function fetchCounters() {
  return axios({ url: countersUrl, responseType: 'json' });
};
