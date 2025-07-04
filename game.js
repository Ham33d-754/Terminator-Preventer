// Global Variables
///////////////////
const Words = [
  'john',
  'sarah'
  // 'skynet',
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

let hangedMan = 10 // images that will need to change eacg time the fails
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
      //
      // turn this into a function
      console.log('letter is correct')
      let secrtArry = document
        .querySelector('.guessWord')
        .querySelectorAll('span')
      secrtArry[index].innerHTML = `${letter}`
      foundLetterInWord = true
      // turn this into a function
      //

      const newArray = []
      Array.from(secrtArry).forEach((span, index) => {
        newArray.push(span.innerText)
      })
      const newWord = newArray.join('')

      if (select === newWord) {
        messageEl.innerHTML = `YOU WON!!!`
      }
    }
  })
  //
  // turn this into a function
  if (foundLetterInWord === false) {
    hangedMan--
    console.log('letter is BAD')
    console.log(hangedMan)

    switch (hangedMan) {
      case 10:
        document.getElementById('image').src = './hangman/0.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 9:
        document.getElementById('image').src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 8:
        document.getElementById('image').src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 7:
        document.getElementById('image').src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 6:
        document.getElementById('image').src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 5:
        document.getElementById('image').src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 4:
        document.getElementById('image').src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 3:
        document.getElementById('image').src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 2:
        document.getElementById('image').src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 1:
        document.getElementById('image').src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 0:
        document.getElementById('image').src = './hangman/0.png'
        messageEl.style.color = 'red'
        messageEl.innerHTML = `YOU DIED AT THE HANDS OF THE TERMINATOR!`
      // turn this into a function
      //
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
