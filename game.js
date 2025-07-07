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
let win = false
let newEl // This variable is to rebuild the the word

// Cached Elements
//////////////////

let guessWordEl = document.querySelector('.guessWord')
let messageEl = document.querySelector('#message')
const keyEl = document.querySelectorAll('.key')
const resetBtnEl = document.querySelector('#resetBtn')
let hangManImage = document.getElementById('image')

// Functions
////////////

const init = () => {
  RandomWords()
  win = false
}

// Selects a random word from the words array
const RandomWords = () => {
  select = Words[Math.floor(Math.random() * Words.length)]
  const chars = select.split('')
  censorWord(chars)
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
  chars.forEach((letter, index) => {
    if (letter === pressedKey) {
      let secrtArry = document
        .querySelector('.guessWord')
        .querySelectorAll('span')
      secrtArry[index].innerHTML = `${letter}`
      foundLetterInWord = true

      const newArray = []
      Array.from(secrtArry).forEach((span, index) => {
        newArray.push(span.innerText)
      })
      const newWord = newArray.join('')

      if (select === newWord) {
        win = true
        messageEl.style.color = 'Green'
        messageEl.innerHTML = `YOU WON!!!`
        document.getElementById('image').src = './images/wonGame.png'
      }
    }
  })
  //
  // turn this into a function
  if (foundLetterInWord === false) {
    hangedMan--

    switch (hangedMan) {
      case 10:
        hangManImage.src = './hangman/0.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 9:
        hangManImage.src = './hangman/1.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 8:
        hangManImage.src = './hangman/2.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 7:
        hangManImage.src = './hangman/3.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 6:
        hangManImage.src = './hangman/4.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 5:
        hangManImage.src = './hangman/5.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 4:
        hangManImage.src = './hangman/6.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 3:
        hangManImage.src = './hangman/7.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 2:
        hangManImage.src = './hangman/8.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 1:
        hangManImage.src = './hangman/9.png'
        messageEl.innerHTML = `careful you ${hangedMan} chances!`
        break

      case 0:
        document.getElementById('image').src = './images/lossGame.png'
        messageEl.style.color = 'red'
        messageEl.innerHTML = `PrePare TO BE TERMINATED`
      // turn this into a function
      //
    }
  }
}

// Event Listeners
//////////////////

init()

resetBtnEl.addEventListener('click', () => {
  messageEl.style.color = 'white'
  messageEl.innerHTML = `Reset completed`
  hangManImage.src = './hangman/0.png'
  hangedMan = 10
  keyEl.forEach((key) => {
    key.classList.remove('correct')
    key.classList.remove('wrong')
  })

  init()
})

keyEl.forEach((keyEl) => {
  keyEl.addEventListener('click', () => {
    if (win === true) {
      return
    } else if (hangedMan === 0) {
      return
    } else {
      checkRandomWord(keyEl.textContent)
      const pressed = keyEl.textContent.toLowerCase()

      if (select.includes(pressed)) {
        keyEl.classList.add('correct')
      } else {
        keyEl.classList.add('wrong')
      }
    }
  })
})
