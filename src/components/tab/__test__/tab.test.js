'use strict'

import { JSDOM } from 'jsdom'
import { Tab } from '../tab.js'
import { isTabOnDOM } from '../tab-is-on-dom.js'
import { tabRender } from '../tab-render.js'
import { tabRemove } from '../tab-remove.js'

jest.mock('../tab-is-on-dom.js')
jest.mock('../tab-render.js')
jest.mock('../tab-remove.js')

describe('Tab', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	describe('render()', () => {
		it('should render tab if not available', () => {
			isTabOnDOM.mockReturnValueOnce(true)
			const tab = new Tab()
			tab.render()

			expect(isTabOnDOM).toHaveBeenCalled()
			expect(tabRender).toHaveBeenCalled()
		})

		it('should not render tab if not available', () => {
			isTabOnDOM.mockReturnValueOnce(false)
			const tab = new Tab()
			tab.render()

			expect(isTabOnDOM).toHaveBeenCalled()
			expect(tabRender).toHaveBeenCalled()
		})
	})

	describe('remove()', () => {
		it('should remove tab', () => {
			const tab = new Tab()
			tab.remove()

			expect(tabRemove).toHaveBeenCalled()
		})
	})
})
