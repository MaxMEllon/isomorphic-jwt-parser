/**
 * function
 * @param token {string} - jwt token
 * @return payload {Object}
 */
export default function parser(token) {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    if (window && window.atob) return JSON.parse(window.atob(base64))
    const atob = (str) => Buffer.from(str, 'base64').toString('binary')
    return JSON.parse(atob(base64))
  } catch (_err) {
    throw new Error('isomorphic-jwt-parser: %o', err)
  }
}
