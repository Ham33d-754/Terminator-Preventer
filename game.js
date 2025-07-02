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
let hangedMan // images that will need to change eacg time the fails
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
  RandomWords()
  checkRandomWord()
}

const RandomWords = () => {
  // guessWordEl.textContent
  select = Words[Math.floor(Math.random() * Words.length)]
  return console.log(select)
}

const checkRandomWord = () => {
  const chars = select.split('')
  console.log(chars)
}

// Event Listeners
//////////////////

init()

resetBtnEl.addEventListener('click', init)

keyEl.forEach((keyEl) => {
  keyEl.addEventListener('click', () => {
    console.log(keyEl.textContent)
  })
})
