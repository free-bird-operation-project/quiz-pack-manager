'use strict'

import { isTabOnDOM } from './tab-is-on-dom'

function tabRemove() {
	const tab = document.getElementById('tab')

	if (isTabOnDOM()) {
		tab.remove()
		return true
	}

	return false
}

export { tabRemove }
