'use strict'

import { JSDOM } from 'jsdom'
import { isTabOnDOM } from '../tab-is-on-dom.js'

describe('isTabOnDOM', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	it('should return true if tab element exists in the DOM', () => {
		const tabElement = document.createElement('div')
		tabElement.id = 'tab'
		document.body.appendChild(tabElement)

		const result = isTabOnDOM()

		expect(result).toBe(true)
	})

	it('should return false if tab element does not exist in the DOM', () => {
		const result = isTabOnDOM()

		expect(result).toBe(false)
	})
})
