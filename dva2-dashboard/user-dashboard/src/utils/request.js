import fetch from "dva/fetch";

function getCount(response) {
  const { apiResponse, data } = response
  return {
    data,
    count: apiResponse.headers.get('x-total-count')
  }
}
function parseJSON(response) {

  async function getData(response) {
    const data = await response.json()
    return {
      data,
      apiResponse:response
    } 
  }
 return  getData(response)
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
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(getCount)
    .catch(err => ({ err }));
}
