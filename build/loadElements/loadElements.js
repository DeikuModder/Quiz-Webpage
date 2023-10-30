/* eslint-disable array-callback-return */
import quizData from '../quizData/quizData.js'
import finalScreen from '../finalScreen/finalScreen.js'
import elementCreator from './utils.js'
let score = 0
const loadElements = (counter, parentElement, mainBody) => {
  const questionIndexTitle = document.createElement('h2')
  questionIndexTitle.id = 'questionIndex'
  elementCreator(questionIndexTitle, `Pregunta ${counter + 1} de ${quizData.length}`, parentElement)
  const questionTitle = document.createElement('h3')
  questionTitle.id = 'questionTitle'
  elementCreator(questionTitle, quizData[counter].title, parentElement)
  const questionContainer = document.createElement('div')
  questionContainer.id = 'questionContainer'
  parentElement.appendChild(questionContainer)
  function handleChangeData () {
    if (counter >= quizData.length - 1) {
      counter = quizData.length - 1
    } else {
      parentElement.removeChild(questionIndexTitle)
      parentElement.removeChild(questionTitle)
      parentElement.removeChild(questionContainer)
      loadElements(counter + 1, parentElement, mainBody)
    }
  }
  quizData[counter].options.map(questions => {
    const buttonChoice = document.createElement('button')
    buttonChoice.className = 'btnChoice'
    elementCreator(buttonChoice, questions, questionContainer)
    buttonChoice.addEventListener('click', () => {
      handleChangeData()
      if (buttonChoice.innerHTML === quizData[counter].correctAnswer.toString()) {
        score++
      }
      if (counter === quizData.length - 1) {
        const resultsBtn = document.createElement('button')
        resultsBtn.id = 'resultsBtn'
        elementCreator(resultsBtn, 'Ver resultados!', parentElement)
        resultsBtn.addEventListener('click', () => {
          setTimeout(() => {
            finalScreen(score, [...quizData], parentElement, mainBody)
          }, 1500)
        })
      }
    })
  })
}
export default loadElements
