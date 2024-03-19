'use strict'

import { escapeHtml } from '../../src/utilities/escape-html.js'

describe('escapeHtml', () => {
	describe('Happy path', () => {
		it('should escape special characters correctly', () => {
			const unsafeString = '<script>alert("Hello & World");</script>'
			const expectedSafeString =
				'&lt;script&gt;alert&#40;&quot;Hello &amp; World&quot;&#41;;&lt;&#x2F;script&gt;'
			const result = escapeHtml(unsafeString)
			expect(result).toBe(expectedSafeString)
		})

		it('should handle a different set of special characters', () => {
			const unsafeString = '<div id="container">Welcome & Happy!</div>'
			const expectedSafeString =
				'&lt;div id=&quot;container&quot;&gt;Welcome &amp; Happy!&lt;&#x2F;div&gt;'
			const result = escapeHtml(unsafeString)
			expect(result).toBe(expectedSafeString)
		})
	})

	describe('Edge cases', () => {
		it('should return an empty string when input is empty', () => {
			const unsafeString = ''
			const expectedSafeString = ''
			const result = escapeHtml(unsafeString)
			expect(result).toBe(expectedSafeString)
		})

		it('should handle a string with only special characters', () => {
			const unsafeString = '&<>"\'/(){}[]\\|`'
			const expectedSafeString =
				'&amp;&lt;&gt;&quot;&#39;&#x2F;&#40;&#41;&#123;&#125;&#91;&#93;&#92;&#124;&#96;'
			const result = escapeHtml(unsafeString)
			expect(result).toBe(expectedSafeString)
		})

		it('should handle a string with no special characters', () => {
			const unsafeString = 'Hello, world!'
			const expectedSafeString = 'Hello, world!'
			const result = escapeHtml(unsafeString)
			expect(result).toBe(expectedSafeString)
		})
	})
})
