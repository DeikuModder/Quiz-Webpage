const finalScreen = (score, answers, elementToReplace, parentElement) => {
  const resultsContainer = document.createElement('div')
  resultsContainer.id = 'resultsContainer'

  resultsContainer.innerHTML = score !== answers.length
    ? `
  <h2 class="scoreTitle">Tu puntuación es: ${score} de ${answers.length}!</h2>
    <p class="correctAnswersTitle">Respuestas correctas: </p>
  
    <ul class="answersContainer">
        ${
            answers.map(answer => `<li class="correctAnswers">${answer.title}:  ${answer.correctAnswer}</li>`).join('')
        }
    </ul>
  
    `
    : `<h2 class="scoreTitle">Tu puntuación es: ${score} de ${answers.length}!</h2>
            <p class="congrats">FELICITACIONES!</p>
        `

  parentElement.replaceChild(resultsContainer, elementToReplace)
}

export default finalScreen
