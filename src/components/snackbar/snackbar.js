'use strict'

import './snackbar.css'

import { renderSnackbar } from './snackbar-render.js'
import { removeSnackbar } from './snackbar-remove.js'

class Snackbar {
	constructor(message) {
		this.message = message
	}

	render() {
		renderSnackbar(this.message)
		return this
	}

	remove() {
		removeSnackbar()
		return this
	}
}

export { Snackbar }
