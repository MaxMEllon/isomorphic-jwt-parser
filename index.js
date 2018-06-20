var isNode = require('detect-node')

/**
 * function
 * @param token {string} - jwt token
 * @return payload {Object}
 */
function parser(token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace('-', '+').replace('_', '/')
  if (!isNode) return JSON.parse(window.atob(base64))
  var atob = function (str) {
    return Buffer.from(str, 'base64').toString('binary')
  }
  return JSON.parse(atob(base64))
}

module.exports = parser
