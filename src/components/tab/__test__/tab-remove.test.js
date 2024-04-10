'use strict'

import { JSDOM } from 'jsdom'
import { removeTab } from '../tab-remove.js'

describe('removeTab', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	it('should return false if tab element does not exist in the DOM', () => {
		const result = removeTab()

		expect(result).toBe(false)
	})

	it('should return true and remove tab element from the DOM if it exists', () => {
		const tabElement = document.createElement('div')
		tabElement.id = 'tab'
		document.body.appendChild(tabElement)

		const result = removeTab()

		expect(result).toBe(true)
		expect(document.getElementById('tab')).toBeNull()
	})
})
