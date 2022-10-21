import { deepStrictEqual, rejects } from 'assert'
import crypto from 'crypto'
import hmac_sha256 from '../index.js'

const data = Uint8Array.from([
  35, 188, 152, 123, 132, 8, 158, 106, 117, 71, 177, 162, 127, 188, 100, 13, 54,
  98, 105, 73, 227, 211, 101, 179, 19, 98, 42, 235, 89, 42, 208, 241, 1, 210,
  101, 63, 247, 203, 178, 216, 255, 18, 154, 194, 126, 245, 120, 28, 230, 139,
  37, 88, 196, 26, 116, 175, 31, 45, 220, 166, 53, 203, 238, 240, 125, 10, 49,
  210, 241, 178, 134, 219, 73, 41, 165, 84, 239, 8, 213, 225, 20, 40, 205, 38,
  216, 58, 9, 215, 16, 192, 79, 45, 216, 96, 187, 146, 33
])

const key = Uint8Array.from([
  193, 208, 12, 92, 47, 21, 136, 78, 193, 249, 181, 255, 229, 172, 237, 231,
  182, 172, 72, 230, 179, 100, 223, 99, 26, 80, 58, 135, 246, 193, 20, 118
])

const expected = Uint8Array.from([
  138, 72, 91, 92, 121, 100, 153, 99, 254, 35, 174, 139, 252, 86, 24, 235, 109,
  239, 113, 210, 176, 251, 207, 7, 38, 159, 83, 110, 79, 40, 147, 234
])

export default tests => {
  tests.add('hmac_sha256', async () => {
    deepStrictEqual(
      await hmac_sha256(data, key),
      expected,
      'Expected hmac_sha256 value'
    )

    global.window = {}
    window.crypto = {
      subtle: crypto.webcrypto.subtle
    }

    deepStrictEqual(
      await hmac_sha256(data, key),
      expected,
      'Expected hmac_sha256 value'
    )
    global.window = undefined
    global.crypto = undefined

    rejects(() => hmac_sha256(''), 'extected rejection')
  })
}
