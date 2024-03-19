'use strict'

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/\//g, '&#x2F;')
		.replace(/\(/g, '&#40;')
		.replace(/\)/g, '&#41;')
		.replace(/\{/g, '&#123;')
		.replace(/\}/g, '&#125;')
		.replace(/\[/g, '&#91;')
		.replace(/\]/g, '&#93;')
		.replace(/\\/g, '&#92;')
		.replace(/\|/g, '&#124;')
		.replace(/`/g, '&#96;')
}

export { escapeHtml }
