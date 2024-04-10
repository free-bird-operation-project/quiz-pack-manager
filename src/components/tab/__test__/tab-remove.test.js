'use strict'

import { JSDOM } from 'jsdom'
import { tabRemove } from '../tab-remove.js'

describe('tabRemove', () => {
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
		const result = tabRemove()

		expect(result).toBe(false)
	})

	it('should return true and remove tab element from the DOM if it exists', () => {
		const tabElement = document.createElement('div')
		tabElement.id = 'tab'
		document.body.appendChild(tabElement)

		const result = tabRemove()

		expect(result).toBe(true)
		expect(document.getElementById('tab')).toBeNull()
	})
})
