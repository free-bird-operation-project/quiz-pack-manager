'use strict'

import { JSDOM } from 'jsdom'
import { removeSnackbar } from '../snackbar-remove.js'

describe('removeSnackbar', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	it('should return false if snackbar element does not exist', () => {
		const result = removeSnackbar()
		expect(result).toBe(false)
	})

	it('should set timer to 2500 if snackbar text content length is less than 50', () => {
		const snackbar = document.createElement('div')
		snackbar.id = 'snackbar'
		snackbar.textContent = 'Short message'
		document.body.appendChild(snackbar)

		jest.spyOn(global, 'setTimeout')
		removeSnackbar()
		jest.runAllTimers()
		expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2500)
	})

	it('should set timer to 5000 if snackbar text content length is 50 or more', () => {
		const snackbar = document.createElement('div')
		snackbar.id = 'snackbar'
		snackbar.textContent =
			'This is a very long message that exceeds 50 characters limit'
		document.body.appendChild(snackbar)

		jest.spyOn(global, 'setTimeout')
		removeSnackbar()
		jest.runAllTimers()
		expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000)
	})

	it('should add "remove" class to snackbar and remove it after 500 milliseconds', () => {
		const snackbar = document.createElement('div')
		snackbar.id = 'snackbar'
		document.body.appendChild(snackbar)

		jest.useFakeTimers()
		removeSnackbar()
		jest.runAllTimers()
		expect(snackbar.classList.contains('remove')).toBe(true)

		jest.advanceTimersByTime(500)
		expect(document.getElementById('snackbar')).toBeNull()
	})
})
