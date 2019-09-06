import { baseUrl } from "./baseUrl";

function _urlConstructor(path, params = {}) {
  let url = baseUrl;
  let paramKeys = Object.keys(params);
  url += "/" + path;
  if (paramKeys.length > 0) {
    let paramFormatted = paramKeys.map(n => `${n}=${params[n]}`);
    url += "?" + paramFormatted.join("&");
  }
  return url.trim();
}

/**
 * Easy methods for GET, POST, and DELETE
 */
export default {
  get: (path, params) => {
    let url = _urlConstructor(path, params);
    return fetch(url).then(res => res.json());
  },
  post: (path, body = {}) => {
    let url = _urlConstructor(path);
    return fetch(url, {
      method: "post",
      body: JSON.stringify(body)
    }).then(res => res.json());
  },
  del: (path, params) => {
    let url = _urlConstructor(path, params);
    return fetch(url, { method: "delete" }).then(res => res.json());
  }
};
