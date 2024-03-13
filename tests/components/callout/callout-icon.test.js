'use strict'

import { calloutIcon } from '../../../src/components/callout/callout-icon.js'

describe('calloutIcon', () => {
	describe('Happy path', () => {
		it('should return the correct icon for a successful callout', () => {
			const result = calloutIcon('successful')
			expect(result).toBe('check-circle-2')
		})

		it('should return the correct icon for a cautionary callout', () => {
			const result = calloutIcon('caution')
			expect(result).toBe('alert-triangle')
		})

		it('should return the correct icon for an error callout', () => {
			const result = calloutIcon('error')
			expect(result).toBe('x-square')
		})

		it('should return the correct icon for an info callout', () => {
			const result = calloutIcon('info')
			expect(result).toBe('info')
		})
	})

	describe('Edge cases', () => {
		it('should return an empty string for an unknown callout type', () => {
			const result = calloutIcon('unknown')
			expect(result).toBe('')
		})

		it('should return an empty string when no type is provided', () => {
			const result = calloutIcon()
			expect(result).toBe('')
		})
	})

	describe('Others', () => {
		it('should handle unexpected input gracefully', () => {
			const result = calloutIcon({ type: 'unexpected' })
			expect(result).toBe('')
		})
	})
})
