import moment from 'moment';
var KEY = 'sh-user-token';
var token = '';
var setToken = function setToken(nextToken) {
  Promise.resolve().then(function () {
    localStorage.setItem(KEY, nextToken);
    document.cookie = "user-token=".concat(nextToken, "; expires=").concat(moment().add(1, 'years').toDate().toUTCString());
  });
  token = nextToken;
};
var getToken = function getToken() {
  // eslint-disable-next-line no-return-assign
  return token || (token = localStorage.getItem(KEY) || '');
};
var clearToken = function clearToken() {
  token = '';
  document.cookie = "user-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  localStorage.removeItem(KEY);
};
var hasToken = function hasToken() {
  return !!localStorage.getItem(KEY);
};
var tokenUtils = {
  setToken: setToken,
  getToken: getToken,
  clearToken: clearToken,
  hasToken: hasToken
};
export default tokenUtils;