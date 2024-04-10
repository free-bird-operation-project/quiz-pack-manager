'use strict'

function removeSnackbar() {
	const snackbar = document.getElementById('snackbar')
	const listTimer = [2500, 5000]
	let timer = listTimer[1]

	if (!snackbar) {
		return false
	}

	if (snackbar.textContent.length < 50) {
		timer = listTimer[0]
	}

	setTimeout(() => {
		snackbar.classList.add('remove')
		setTimeout(() => snackbar.remove(), 500)
	}, timer)
}

export { removeSnackbar }
