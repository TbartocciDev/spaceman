const row1Letters = ['q','w','e','r','t','y','u','i','o','p']
const row2Letters = ['a','s','d','f','g','h','j','k','l']
const row3Letters = ['z','x','c','v','b','n','m']

// main divs
const spaceManDiv = document.querySelector('.spaceman')
const answerDiv = document.querySelector('.answer')
const keyboardDiv = document.querySelector('.keyboard')

// keyboard divs
const row1Div = document.querySelector('.row1')
const row2Div = document.querySelector('.row2')
const row3Div = document.querySelector('.row3')

// height and width of keyboard div and letters
const keyboardHeight = row1Div.offsetHeight
const letterHeight = (keyboardHeight/10)
const keyboardWdith = row1Div.offsetWidth
const letterWidth = ((keyboardWdith / row1Letters.length) / 10) + 'vh'

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