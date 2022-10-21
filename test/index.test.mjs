import TestDirector from 'test-director/TestDirector.mjs'
import HMAC_SHA256test from './hmac_sha256.test.mjs'

const tests = new TestDirector()
HMAC_SHA256test(tests)
tests.run()
