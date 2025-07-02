// Global Variables

const Words = [
  'Skynet',
  'cyberdyne',
  'terminator',
  'T-800',
  'T-1000',
  'judgment',
  'resistance',
  'time-travel',
  'Sarah',
  'Connor',
  'John',
  'Arnold',
  'android',
  'apocalypse',
  'neural-net',
  'future-war',
  'machine',
  'assassin',
  'reprogrammed',
  'liquid-metal'
]
let keyboard
let hangedMan
let win

// Cached Elements
let guessWordEl = document.querySelector('.guessWord')
const messageEl = document.querySelector('.message')
const keyBoardEl = document.querySelectorAll('.key')
console.log(keyBoardEl)
const resetBtnEl = document.querySelector('#resetBtn')

// Functions

const init = () => {
  RandomWords()
}

const RandomWords = () => {
  // guessWordEl.textContent
  guessWordEl = Words[Math.floor(Math.random() * Words.length)]
  return console.log(guessWordEl)
}
// const randomWord = Words[Math.floor(Math.random() * Words.length)]
// console.log(randomWord)

// Event Listeners

init()
resetBtnEl.addEventListener('click', init)
