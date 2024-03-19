'use strict'

function calloutIcon(type) {
	const icon = {
		successful: 'check-circle-2',
		caution: 'alert-triangle',
		error: 'x-square',
		info: 'info'
	}

	return icon[type] || ''
}

export { calloutIcon }
