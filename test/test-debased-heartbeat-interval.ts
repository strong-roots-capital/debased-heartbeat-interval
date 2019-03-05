import test from 'ava'
import * as moment from 'moment'
import is from '@sindresorhus/is'

/**
 * Library under test
 */

import { DEBASED_HEARTBEAT_INTERVAL } from '../src/debased-heartbeat-interval'

test('should export numeric heartbeat-interval', t => {
    t.true(is.number(DEBASED_HEARTBEAT_INTERVAL))
})

test('should be equivalent to 1-minute in milliseconds', t => {
    t.is(moment.duration(1, 'minute').as('milliseconds'), DEBASED_HEARTBEAT_INTERVAL)
})
