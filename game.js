// Global Variables
///////////////////
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
let hangedMan
let win

// Cached Elements
//////////////////
let guessWordEl = document.querySelector('.guessWord')
const messageEl = document.querySelector('.message')
const keyEl = document.querySelectorAll('.key')
// console.log(keyEl)
const resetBtnEl = document.querySelector('#resetBtn')

// Functions
////////////
const init = () => {
  const boardboard = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  RandomWords()
}

const RandomWords = () => {
  // guessWordEl.textContent
  randomWord = Words[Math.floor(Math.random() * Words.length)]
  return console.log(randomWord)
}

// const randomWord = Words[Math.floor(Math.random() * Words.length)]
// console.log(randomWord)

// Event Listeners
//////////////////

init()

resetBtnEl.addEventListener('click', init)
