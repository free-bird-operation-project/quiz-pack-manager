'use strict'

import { escapeHtml } from '../../utilities/escape-html.js'
function calloutVerify(type, message) {
	const conditions = [
		{
			condition: typeof type === 'string' && type.trim() !== '',
			message: 'Type for callout must be a non-empty string'
		},
		{
			condition: typeof message === 'string' && message.trim() !== '',
			message: 'Message for callout must be a non-empty string'
		}
	]

	for (const { condition, message } of conditions) {
		if (!condition) {
			const sanitizedMessage = escapeHtml(message)
			console.error(sanitizedMessage)
			return false
		}
	}

	return true
}

export { calloutVerify }
