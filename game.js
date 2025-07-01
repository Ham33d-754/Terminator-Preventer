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

// Functions

const RandomWords = () => {
  return (randomWord = Words[Math.floor(Math.random() * Words.length)])
}
const randomWord = Words[Math.floor(Math.random() * Words.length)]
console.log(randomWord)

// Event Listeners
