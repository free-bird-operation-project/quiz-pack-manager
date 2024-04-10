'use strict'

import { JSDOM } from 'jsdom'
import { activateTabEventListener } from '../tab-active.js'
import { initializeMakerPage } from '../../../pages/maker/index.js'
import { initializeManagerPage } from '../../../pages/manager/index.js'

jest.mock('../../../pages/maker/index.js')
jest.mock('../../../pages/manager/index.js')

describe('activateTabEventListener', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.MouseEvent = window.MouseEvent
		global.HTMLElement = window.HTMLElement
		document.body.innerHTML = `
			<div id="icon-maker-container"></div>
			<div id="icon-manager-container"></div>
		`
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	it('should add event listeners to maker and manager icons', () => {
		activateTabEventListener()

		const makerIcon = document.getElementById('icon-maker-container')
		const managerIcon = document.getElementById('icon-manager-container')

		expect(makerIcon).toBeDefined()
		expect(managerIcon).toBeDefined()

		const clickEvent = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window
		})

		makerIcon.dispatchEvent(clickEvent)
		expect(managerIcon.classList.contains('active')).toBe(false)
		expect(makerIcon.classList.contains('active')).toBe(true)
		expect(initializeMakerPage).toHaveBeenCalled()

		managerIcon.dispatchEvent(clickEvent)
		expect(makerIcon.classList.contains('active')).toBe(false)
		expect(managerIcon.classList.contains('active')).toBe(true)
		expect(initializeManagerPage).toHaveBeenCalled()
	})
})
