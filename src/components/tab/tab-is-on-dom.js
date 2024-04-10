'use strict'

function isTabOnDOM() {
	const tab = document.getElementById('tab')

	if (tab) {
		return true
	}

	return false
}

export { isTabOnDOM }
