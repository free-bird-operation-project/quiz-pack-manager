'use strict'

import { JSDOM } from 'jsdom'
import { renderSnackbar } from '../snackbar-render.js'

describe('renderSnackbaar', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	it('should return false if message is not provided', () => {
		const result = renderSnackbar(null)
		expect(result).toBe(false)
	})

	it('should render snackbar with provided message', () => {
		const message = 'Test message'
		renderSnackbar(message)

		const snackbar = document.getElementById('snackbar')
		expect(snackbar).not.toBeNull()
		expect(snackbar.textContent).toBe(message)
		expect(snackbar.classList.contains('snackbar')).toBe(true)
	})
})
