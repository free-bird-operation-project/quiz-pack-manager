'use strict'

import { calloutVerify } from './callout-verify.js'
import { calloutRender } from './callout-render.js'
import { calloutHide } from './callout-hide.js'

class Callout {
	constructor(type, message) {
		this.type = type
		this.message = message
		this.verify = this.verify.bind(this)
	}

	verify() {
		return calloutVerify(this.type, this.message)
	}

	render() {
		if (!this.verify()) {
			return false
		}
		calloutRender(this.type, this.message)
	}

	hide() {
		if (!this.verify()) {
			return false
		}
		calloutHide()
	}
}

export { Callout }
