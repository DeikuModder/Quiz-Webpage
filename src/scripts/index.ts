import loadElements from './loadElements/loadElements.js'

const quizContainer: HTMLElement = document.getElementById('quizContainer')!
const mainBody: HTMLElement = document.querySelector('.mainBody')!

const renderOnScreen = () => loadElements(0, quizContainer, mainBody)

renderOnScreen()
