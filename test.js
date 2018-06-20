const assert = require('assert')
const parseJWT = require('./index.js')

const rawString = `
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM
0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM
5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`

describe('parser', () => {
  let jwt
  beforeEach(() => {
    jwt = rawString.split("\n").join('')
  })

  it('success parse in node environment', () => {
    const actual = parseJWT(jwt)

    assert.equal(actual.name, 'John Doe', 'name is `John Doe`')
  })
})
