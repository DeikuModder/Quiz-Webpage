import loadElements from './loadElements/loadElements.js'

const quizContainer = document.getElementById('quizContainer')
const mainBody = document.querySelector('.mainBody')

const renderOnScreen = () => loadElements(0, quizContainer, mainBody)

renderOnScreen()
