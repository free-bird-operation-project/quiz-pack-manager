'use strict'

function initializeApp() {
	// Add main element in the document
	const main = document.createElement('main')
	document.body.appendChild(main)

	// Log the proprietary information in the console
	console.log(
		`%c
    &&&&&&&&&&&&&&&&&&&&&&&&&
   &&&&&&&&&&&&&&&&&&&&&&&&&&&
  &&&&                     &&&&
  &&&      &&&&&&&&&&       &&&
  &&&    &&&&&&&&&&&&&&&    &&&
  &&&    &&&&&      &&&&    &&&
  &&&    &&&&               &&&
  &&&    &&&&               &&&
  &&&    &&&&               &&&
  &&&    &&&&&      &&&&    &&&
  &&&    &&&&&&&&&&&&&&&    &&&
  &&&      &&&&&&&&&&&      &&&
  &&&&                     &&&&
   &&&&&&&&&&&&&&&&&&&&&&&&&&&
    &&&&&&&&&&&&&&&&&&&&&&&&&
  `,
		`color: orange;
     font-family: monospace;
     font-weight: bold;
     font-size: 12pt;
     font-style: italic
    `
	)

	console.log(
		`%c
GitHub repository: 🔗https://github.com/free-bird-operation-project/quiz-pack-manager
Developer: Chessurisme 🔗https://github.com/chessurisme
  `,
		`
    color: lightblue;
     font-family: monospace;
     font-weight: bold;
     font-size: 11pt;
`
	)
}

export { initializeApp }

