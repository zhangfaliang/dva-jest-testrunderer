import fetch from 'dva/fetch';
import { async } from '../../../../../../example/dva/examples/with-react-router-3/src/services/example';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export async  function  request(url, options) {
  const response= await fetch(url, options)
    .then(checkStatus)
  const data=  await response.json();
  const ret = {
    data,
    headers: {},
  }
    if (response.headers.get('x-total-count')) {
      ret.headers['x-total-count'] = response.headers.get('x-total-count');
    }
  return ret
 
  
}