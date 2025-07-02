// Global Variables
///////////////////
const Words = [
  'Skynet',
  'cyberdyne',
  'terminator',
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
  'reprogrammed'
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
  // checkRandomWord()

  // log checks
  console.log(select)
}

const RandomWords = () => {
  // guessWordEl.textContent
  select = Words[Math.floor(Math.random() * Words.length)]
  const chars = select.split('')
  // console.log(chars)
  censorWord(chars)
  guessWordEl.textContent = cen
  console.log(select)
  return select
}

const censorWord = (chars) => {
  cen = ''
  censored = chars.forEach(() => {
    cen += '-'
  })
}

const checkRandomWord = (pressedKey) => {
  const chars = select.split('')
  console.log(chars)
  chars.forEach((letter) => {
    if (letter === pressedKey) {
      console.log('letter is correct')
    } else {
      console.log('NOPE, try again')
    }
  })
}

const updateGuessWord = () => {
  // Loop over board array & dispaly the state
  keyEl.forEach((key, index) => {
    key.textContent = board[index]
  })
}

// Event Listeners
//////////////////

init()

resetBtnEl.addEventListener('click', init)

keyEl.forEach((keyEl) => {
  keyEl.addEventListener('click', () => {
    checkRandomWord(keyEl.textContent)
    console.log(keyEl.textContent)
  })
})
