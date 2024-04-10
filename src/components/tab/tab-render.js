'use strict'

import { createIcons, Folder, PencilRuler } from 'lucide'
import { setAttributes } from '../../utilities/set-attributes.js'
import { activateTabEventListener } from './tab-active.js'

function renderTab() {
	const container = document.createElement('div')
	const iconMakerContainer = document.createElement('div')
	const iconManagerContainer = document.createElement('div')
	const makerIcon = document.createElement('i')
	const managerIcon = document.createElement('i')

	setAttributes(container, {
		class: 'tab',
		id: 'tab'
	})

	setAttributes(iconMakerContainer, {
		class: 'icon-container',
		id: 'icon-maker-container'
	})

	setAttributes(iconManagerContainer, {
		class: 'icon-container active',
		id: 'icon-manager-container'
	})

	setAttributes(makerIcon, {
		'class': 'icon',
		'data-lucide': 'pencil-ruler'
	})

	setAttributes(managerIcon, {
		'class': 'icon',
		'data-lucide': 'folder'
	})

	iconMakerContainer.appendChild(makerIcon)
	iconManagerContainer.appendChild(managerIcon)
	container.appendChild(iconMakerContainer)
	container.appendChild(iconManagerContainer)
	document.body.appendChild(container)

	createIcons({
		icons: {
			PencilRuler,
			Folder
		}
	})

	activateTabEventListener()

	return true
}

export { renderTab }
