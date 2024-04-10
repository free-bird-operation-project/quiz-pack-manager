'use strict'

import './tab.css'

import { isTabOnDOM } from './tab-is-on-dom.js'
import { tabRender } from './tab-render.js'
import { tabRemove } from './tab-remove.js'

class Tab {
	render() {
		if (!isTabOnDOM()) {
			tabRender()
		}
	}

	remove() {
		tabRemove()
	}
}

export { Tab }
