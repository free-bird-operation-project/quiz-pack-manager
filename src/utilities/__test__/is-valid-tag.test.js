'use strict'

import { isValidTag } from '../is-valid-tag.js'

describe('isValidTag', () => {
	it('should return false when empty tag is passed as input', () => {
		const result = isValidTag()
		expect(result).toBe(false)
	})

	it('should return true when a valid HTML tag is passed as input', () => {
		const validTag = 'div'
		const result = isValidTag(validTag)
		expect(result).toBe(true)
	})

	it('should return false when an invalid HTML tag is passed as input', () => {
		const invalidTag = 'invalid'
		const result = isValidTag(invalidTag)
		expect(result).toBe(false)
	})
})
