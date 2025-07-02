// Global Variables
///////////////////
const Words = [
  'john',
  'sarah',
  'skynet'
  // 'cyberdyne',
  // 'terminator',
  // 'judgment',
  // 'resistance',
  // 'time-travel',
  // 'connor',
  // 'arnold',
  // 'android',
  // 'apocalypse',
  // 'neural-net',
  // 'future-war',
  // 'machine',
  // 'assassin',
  // 'reprogrammed'
]

let hangedMan // images that will need to change eacg time the fails
let win
let newEl
// let cen = ''

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

  // log checks
  console.log(select)
}

const RandomWords = () => {
  // guessWordEl.textContent
  select = Words[Math.floor(Math.random() * Words.length)]
  const chars = select.split('')
  console.log(chars)
  censorWord(chars)
  // console.log(select)
  return select
}

// hides the selected word and turns it to dashes (-)
const censorWord = (chars) => {
  guessWordEl.textContent = ''
  censored = chars.forEach((whatever, index) => {
    newEl = document.createElement('span')
    newEl.setAttribute('id', index)
    newEl.textContent = '-'

    guessWordEl.appendChild(newEl)
  })
}

// const censorWord = (chars) => {
//   cen = []
//   censored = chars.forEach(() => {
//     cen.push('-')
//   })
// }

const checkRandomWord = (pressedKey) => {
  const chars = select.split('')
  // console.log(chars)
  chars.forEach((letter, index) => {
    if (letter === pressedKey) {
      console.log('letter is correct')
      // console.log(index)
      let secrtArry = document
        .querySelector('.guessWord')
        .querySelectorAll('span')

      // console.log(pressedKey)
      secrtArry[index].innerHTML = `${letter}`
      // console.log(guessWordEl)
    }
  })
}

// const updateGuessWord = () => {
//   // Loop over board array & dispaly the state
//   keyEl.forEach((key, index) => {
//     key.textContent = board[index]
//   })
// }

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
