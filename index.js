/**
 * function
 * @param token {string} - jwt token
 * @return payload {Object}
 */
function parser(token) {
  try {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace('-', '+').replace('_', '/')
    if (window && window.atob) return JSON.parse(window.atob(base64))
    var atob = function (str) {
      return Buffer.from(str, 'base64').toString('binary')
    }
    return JSON.parse(atob(base64))
  } catch (_err) {
    throw new Error('isomorphic-jwt-parser: %o', err)
  }
}

module.exports = parser
