import fetch from 'node-fetch';

const countersUrl = 'https://api.myjson.com/bins/ywmke';

export default function fetchCounters() {
  return fetch(countersUrl);
};
