// Global Variables
///////////////////
const Words = [
  'john',
  'sarah',
  'skynet',
  'cyberdyne',
  'terminator',
  'judgment',
  'resistance',
  'time-travel',
  'connor',
  'arnold',
  'android',
  'apocalypse',
  'neural-net',
  'future-war',
  'machine',
  'assassin',
  'reprogrammed'
]

let hangedMan = 0 // images that will need to change eacg time the fails
let win
let newEl
// let cen = ''

// Cached Elements
//////////////////
let guessWordEl = document.querySelector('.guessWord')
let messageEl = document.querySelector('#message')
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
// Selects a random word from the words array
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

const checkRandomWord = (pressedKey) => {
  let foundLetterInWord = false
  const chars = select.split('')
  // console.log(chars)
  chars.forEach((letter, index) => {
    if (letter === pressedKey) {
      console.log('letter is correct')
      let secrtArry = document
        .querySelector('.guessWord')
        .querySelectorAll('span')
      // console.log(pressedKey)
      secrtArry[index].innerHTML = `${letter}`
      // console.log(guessWordEl)
      foundLetterInWord = true
    }
  })
  if (foundLetterInWord === false) {
    hangedMan++
    console.log('letter is BAD')
    console.log(hangedMan)
    messageEl.innerHTML = `hi كيكرز`

    document.getElementById('0').src = './hangman/1.png'
    switch (hangedMan) {
      case 0:
        document.getElementById('0').src = './hangman/0.png'
        break
      case 1:
        document.getElementById('0').src = './hangman/1.png'
        break
      case 2:
        document.getElementById('0').src = './hangman/0.png'
        messageEl.innerHTML = `YOU DIED AT THE HANDS OF THE TERMINATOR!`
    }
  }
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
