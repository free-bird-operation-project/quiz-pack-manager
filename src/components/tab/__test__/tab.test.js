'use strict'

import { JSDOM } from 'jsdom'
import { Tab } from '../tab.js'

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
		it('should render tab if it is not on DOM', () => {
			const tab = new Tab()

			tab.render()

			expect(document.body.childElementCount).toBe(1)
		})

		it('should not render if tab is already on DOM', () => {
			const existingTab = new Tab()
			existingTab.render()

			const newTab = new Tab()
			newTab.render()

			expect(document.body.childElementCount).toBe(1)
		})
	})

	describe('remove()', () => {
		it('should remove tab on DOM', () => {
			const tab = new Tab()
			tab.remove()

			expect(document.body.childElementCount).toBe(0)
		})
	})
})
