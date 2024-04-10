'use strict'

function isTabOnDOM() {
	const tab = document.getElementById('tab')

	if (tab) {
		console.log('Tab is already in the DOM.')
		return true
	}

	return false
}

export { isTabOnDOM }
