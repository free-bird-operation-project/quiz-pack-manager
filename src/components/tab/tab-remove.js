'use strict'

import { isTabOnDOM } from './tab-is-on-dom'

function removeTab() {
	const tab = document.getElementById('tab')

	if (isTabOnDOM()) {
		tab.remove()
		return true
	}

	return false
}

export { removeTab }
