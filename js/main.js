// main divs
const spaceManDiv = document.querySelector('.spaceman')
const answerDiv = document.querySelector('.answer')
const keyboardDiv = document.querySelector('.keyboard')

// keyboard elements
const row1Div = document.querySelector('.row1')
const row2Div = document.querySelector('.row2')
const row3Div = document.querySelector('.row3')

// keyboard keys
const row1Letters = ['q','w','e','r','t','y','u','i','o','p']
const row2Letters = ['a','s','d','f','g','h','j','k','l']
const row3Letters = ['z','x','c','v','b','n','m']

// height and width of keyboard div and letters
const keyboardHeight = row1Div.offsetHeight
const letterHeight = (keyboardHeight/10)
const keyboardWdith = row1Div.offsetWidth
const letterWidth = ((keyboardWdith / row1Letters.length) / 10) + 'vw'

// single spot for letter styles
const letterFontSize = '5.5vh'

// adding letters for keyboards
// top row
row1Letters.forEach((letter) => {
    let letterEl = document.createElement('div')
    letterEl.style.border = 'solid'
    letterEl.style.textAlign = 'center'
    letterEl.innerHTML = letter.toUpperCase()
    letterEl.style.width = letterWidth
    letterEl.style.fontSize = letterFontSize

    row1Div.appendChild(letterEl)
})

// second row
row2Letters.forEach((letter) => {
    let letterEl = document.createElement('div')
    letterEl.style.border = 'solid'
    letterEl.style.textAlign = 'center'
    letterEl.innerHTML = letter.toUpperCase()
    letterEl.style.width = letterWidth
    letterEl.style.fontSize = letterFontSize

    row2Div.appendChild(letterEl)
})

// third row
row3Letters.forEach((letter) => {
    let letterEl = document.createElement('div')
    letterEl.style.border = 'solid'
    letterEl.style.textAlign = 'center'
    letterEl.innerHTML = letter.toUpperCase()
    letterEl.style.width = letterWidth 
    letterEl.style.fontSize = letterFontSize

    row3Div.appendChild(letterEl)
})

// answer area elements
const hintDiv = document.querySelector('.hint')
const categoryDiv = document.querySelector('.category')
const answerKeysDiv = document.querySelector('.answer-keys')

// answer string and array
// const answerString = 'Warm toasted bagel with lox and cream'
const answerString = 'New York Giants'
const separatedAnswer = answerString.split('')

// height and width of keys 
const answerHeight = answerDiv.offsetHeight
const keyHeight = ((answerHeight / 4) / 10) + 'vh'
const answerWidth = answerKeysDiv.offsetWidth
const keyWidth = (answerWidth / 10)

// adding letter to answer div
let letterIndex = 0
separatedAnswer.forEach((letter) => {
    let letterEl = document.createElement('div')
    letterEl.style.border = 'solid'
    letterEl.style.textAlign = 'center'
    letterEl.innerHTML = letter.toUpperCase()
    letterEl.style.height = keyHeight
    letterEl.style.fontSize = '8vh'

    if (letter === ' ') {
        letterEl.style.backgroundColor = 'green'
    }

    answerKeysDiv.appendChild(letterEl)
})