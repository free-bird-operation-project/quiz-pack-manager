'use strict'

import { JSDOM } from 'jsdom'
import { tabRender } from '../tab-render.js'

describe('tabRender', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	it('should render the tab elements in the DOM', () => {
		tabRender()

		const container = document.getElementById('tab')
		expect(container).not.toBeNull()
		expect(container.classList.contains('tab')).toBe(true)

		const iconMakerContainer = container.querySelector('.icon-container')
		expect(iconMakerContainer).not.toBeNull()
		expect(iconMakerContainer.classList.contains('icon-container')).toBe(true)

		const iconManagerContainer =
			container.querySelectorAll('.icon-container')[1]
		expect(iconManagerContainer).not.toBeNull()
		expect(iconManagerContainer.classList.contains('icon-container')).toBe(true)

		const makerIcon = iconMakerContainer.querySelector('.icon')
		expect(makerIcon).not.toBeNull()
		expect(makerIcon.getAttribute('data-lucide')).toBe('pencil-ruler')

		const managerIcon = iconManagerContainer.querySelector('.icon')
		expect(managerIcon).not.toBeNull()
		expect(managerIcon.getAttribute('data-lucide')).toBe('folder')
	})

	it('should set correct attributes for each element', () => {
		tabRender()

		const container = document.getElementById('tab')
		expect(container.getAttribute('class')).toBe('tab')

		const iconMakerContainer = container.querySelector('.icon-container')
		expect(iconMakerContainer.getAttribute('class')).toBe('icon-container')

		const iconManagerContainer =
			container.querySelectorAll('.icon-container')[1]
		expect(iconManagerContainer.getAttribute('class')).toBe('icon-container')

		const makerIcon = iconMakerContainer.querySelector('.icon')
		expect(makerIcon.getAttribute('class')).toBe(
			'lucide lucide-pencil-ruler icon'
		)
		expect(makerIcon.getAttribute('data-lucide')).toBe('pencil-ruler')

		const managerIcon = iconManagerContainer.querySelector('.icon')
		expect(managerIcon.getAttribute('class')).toBe('lucide lucide-folder icon')
		expect(managerIcon.getAttribute('data-lucide')).toBe('folder')
	})

	it('should return true after rendering', () => {
		const result = tabRender()
		expect(result).toBe(true)
	})
})
