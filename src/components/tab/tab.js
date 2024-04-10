'use strict'

import './tab.css'

import { isTabOnDOM } from './tab-is-on-dom.js'
import { renderTab } from './tab-render.js'
import { removeTab } from './tab-remove.js'

class Tab {
	render() {
		if (!isTabOnDOM()) {
			renderTab()
		}
	}

	remove() {
		removeTab()
	}
}

export { Tab }
