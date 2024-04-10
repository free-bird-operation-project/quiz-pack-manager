'use strict'

function tabRemove() {
	const tab = document.getElementById('tab')

	if (!tab) {
		console.log('Tab is no longer in the DOM.')
		return false
	}

	tab.remove()
	return true
}

export { tabRemove }
