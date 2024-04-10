'use strict'

import { setAttributes } from '../../utilities/set-attributes.js'

function renderSnackbar(message) {
	if (!message) {
		return false
	}

	const container = document.createElement('div')

	setAttributes(container, {
		class: 'snackbar',
		id: 'snackbar'
	})

	container.textContent = message
	document.body.appendChild(container)
}

export { renderSnackbar }
