'use strict'

import { initializeMakerPage } from '../../pages/maker/index.js'
import { initializeManagerPage } from '../../pages/manager/index.js'

function activateTabEventListener() {
	const maker = document.getElementById('icon-maker-container')
	const manager = document.getElementById('icon-manager-container')

	const isMakerActive = () => maker.classList.contains('active')
	const isManagerActive = () => manager.classList.contains('active')

	maker.addEventListener('click', () => {
		if (!isMakerActive()) {
			manager.classList.remove('active')
			maker.classList.add('active')
			initializeMakerPage()
		}
	})

	manager.addEventListener('click', () => {
		if (!isManagerActive()) {
			maker.classList.remove('active')
			manager.classList.add('active')
			initializeManagerPage()
		}
	})
}
export { activateTabEventListener }
