/* eslint-disable array-callback-return */
import quizData from '../quizData/quizData.js'
import finalScreen from '../finalScreen/finalScreen.js'
import { elementCreator } from './utils.js'

let score = 0

const loadElements = (counter, parentElement, mainBody) => {
  // create question index title

  const questionIndexTitle = document.createElement('h2')
  questionIndexTitle.id = 'questionIndex'
  elementCreator(questionIndexTitle, `Pregunta ${counter + 1} de ${quizData.length}`, parentElement)

  // create question title

  const questionTitle = document.createElement('h3')
  questionTitle.id = 'questionTitle'
  elementCreator(questionTitle, quizData[counter].title, parentElement)

  // create the container for the questions

  const questionContainer = document.createElement('div')
  questionContainer.id = 'questionContainer'
  parentElement.appendChild(questionContainer)

  // remove the previous questions and create new ones with the following data

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

  // create the buttons with the options

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

        resultsBtn.addEventListener('click', () => { setTimeout(() => { finalScreen(score, [...quizData], parentElement, mainBody) }, 1500) })
      }
    })
  })
}

export default loadElements
