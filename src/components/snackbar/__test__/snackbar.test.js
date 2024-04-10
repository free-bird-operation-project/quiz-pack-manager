'use strict'

import { JSDOM } from 'jsdom'
import { Snackbar } from '../snackbar.js'

describe('Snackbar', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	describe('constructor()', () => {
		it('should create a Snackbar instance with provided message', () => {
			const message = 'Test message'
			const snackbar = new Snackbar(message)
			expect(snackbar).toBeInstanceOf(Snackbar)
			expect(snackbar.message).toBe(message)
		})
	})

	describe('render()', () => {
		it('should return the Snackbar instance', () => {
			const snackbar = new Snackbar('Test message')
			const result = snackbar.render()
			expect(result).toBe(snackbar)
		})
	})

	describe('remove()', () => {
		it('should return the Snackbar instance', () => {
			const snackbar = new Snackbar('Test message')
			const result = snackbar.remove()
			expect(result).toBe(snackbar)
		})
	})
})
