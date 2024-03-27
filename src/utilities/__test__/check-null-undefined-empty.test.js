'use strict'

import { checkNullUndefinedEmpty } from '../check-null-undefined-empty.js'

describe('checkNullUndefinedEmpty', () => {
	describe('Happy Path', () => {
		it('should return false when given a non-empty string', () => {
			const result = checkNullUndefinedEmpty('Hello')
			expect(result).toBe(false)
		})

		it('should return true when given an empty string', () => {
			const result = checkNullUndefinedEmpty('')
			expect(result).toBe(true)
		})

		it('should return true when given undefined', () => {
			const result = checkNullUndefinedEmpty(undefined)
			expect(result).toBe(true)
		})

		it('should return true when given null', () => {
			const result = checkNullUndefinedEmpty(null)
			expect(result).toBe(true)
		})

		it('should return true when given an empty array', () => {
			const result = checkNullUndefinedEmpty([])
			expect(result).toBe(true)
		})
	})

	describe('Edge Cases', () => {
		it('should return false when given a number', () => {
			const result = checkNullUndefinedEmpty(123)
			expect(result).toBe(false)
		})

		it('should return false when given a boolean', () => {
			const result = checkNullUndefinedEmpty(true)
			expect(result).toBe(false)
		})

		it('should return false when given a function', () => {
			const result = checkNullUndefinedEmpty(() => {})
			expect(result).toBe(false)
		})

		it('should return false when given an object', () => {
			const result = checkNullUndefinedEmpty({})
			expect(result).toBe(false)
		})
	})

	describe('Others', () => {
		it('should return false when given an array with at least one non-null/undefined value', () => {
			const result = checkNullUndefinedEmpty([1, null, undefined])
			expect(result).toBe(false)
		})

		it('should return false when given an array with only null and undefined values', () => {
			const result = checkNullUndefinedEmpty([null, undefined])
			expect(result).toBe(false)
		})

		it('should return true when given a string with only whitespace characters', () => {
			const result = checkNullUndefinedEmpty('   ')
			expect(result).toBe(true)
		})
	})
})
