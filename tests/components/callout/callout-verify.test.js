'use strict'

import { calloutVerify } from '../../../src/components/callout/callout-verify.js'
import { escapeHtml } from '../../../src/utilities/escape-html.js'

describe('Verify Callout Parameters', () => {
	describe('Happy path', () => {
		it('should return true for valid type and message', () => {
			const result = calloutVerify('successful', 'Operation successful')
			expect(result).toBe(true)
		})
	})

	describe('Edge cases', () => {
		it('should return false when type is not a string', () => {
			const result = calloutVerify(null, 'Some message')
			expect(result).toBe(false)
		})

		it('should return false when type is an empty string', () => {
			const result = calloutVerify('', 'Some message')
			expect(result).toBe(false)
		})

		it('should return false when message is not a string', () => {
			const result = calloutVerify('successful', null)
			expect(result).toBe(false)
		})

		it('should return false when type is whitespace', () => {
			const result = calloutVerify(' ', 'Some message here.')
			expect(result).toBe(false)
		})

		it('should return false when message is an empty string', () => {
			const result = calloutVerify('successful', '')
			expect(result).toBe(false)
		})

		it('should return false when message is whitespace', () => {
			const result = calloutVerify('error', ' ')
			expect(result).toBe(false)
		})
	})

	describe('Others', () => {
		it('should handle unexpected input gracefully', () => {
			const result = calloutVerify()
			expect(result).toBe(false)
		})

		it('should not be vulnerable to cross-site scripting (XSS) attacks', () => {
			const maliciousType = `<script>alert("XSS attack!");</script>`
			const maliciousMessage = `<img src="invalid" onerror="alert('XSS attack!');" />`

			calloutVerify(maliciousType, maliciousMessage)

			const escapedMaliciousType = escapeHtml(maliciousType)
			const escapedMaliciousMessage = escapeHtml(maliciousMessage)

			expect(escapedMaliciousType).toBe(
				'&lt;script&gt;alert&#40;&quot;XSS attack!&quot;&#41;;&lt;&#x2F;script&gt;'
			)

			expect(escapedMaliciousMessage).toBe(
				'&lt;img src=&quot;invalid&quot; onerror=&quot;alert&#40;&#39;XSS attack!&#39;&#41;;&quot; &#x2F;&gt;'
			)
		})
	})
})
