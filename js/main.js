// answer string and array
// const answerString = 'Warm toasted bagel with lox and cream'
const answerString = 'wwrr ty iioo'
const separatedAnswer = answerString.split('')
const answerArr = []

let answerReduced = []
let wrongGuesses = []
let correctGuesses = []

separatedAnswer.forEach((letter)=> {
    answerArr.push(letter.toUpperCase())
})
console.log(answerArr)
answerReduced = answerArr.reduce((acc, letter)=>{
    if (acc.includes(letter)) {
        console.log('exists')
    } else {
        if (letter === ' ') {
            // do nothing
        } else {
            acc.push(letter)
        }
    }
    return acc
}, [])

console.log(answerReduced)
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

    // add function
    letterEl.addEventListener('click', function(event){
        const guessedLetter = event.target.innerHTML

        if (answerArr.includes(guessedLetter)) {
            event.target.style.backgroundColor = 'green'
            if (correctGuesses.includes(guessedLetter)) {
                // do nothing
            } else {
                correctGuesses.push(guessedLetter)
            }
            checkLetter(guessedLetter, true)
        } else {
            event.target.style.backgroundColor = 'red'
            wrongGuesses.push(guessedLetter)
            checkLetter(guessedLetter, false)
        }
    })

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
    letterEl.setAttribute('value',letter.toUpperCase())
    letterEl.style.height = keyHeight
    letterEl.style.fontSize = '8vh'

    if (letter === ' ') {
        letterEl.style.backgroundColor = 'green'
    }
    answerKeysDiv.appendChild(letterEl)
    letterIndex += 1
})

// spaceman elements
const headDiv = document.querySelector('.head') 
const leftArmDiv = document.querySelector('.LArm')
const torsoDiv = document.querySelector('torso')
const rightArmDiv = document.querySelector('RArm')
const leftLegDiv = document.querySelector('LLeg')
const rightLegDiv = document.querySelector('RLeg')

// position spaceman

// functions

function letterClicked() {
    console.log('clicked')
}

function checkLetter(someLetter, someBool) {

    if (someBool) {
        const answerKeys = answerDiv.querySelectorAll('div')
    
        answerKeys.forEach((answerKey)=> {

        const answerKeyVal = answerKey.getAttribute('value')

        if (answerKeyVal === someLetter) {
            answerKey.innerHTML = someLetter
        }
    })
    } 

    // check for win or lose 
    if (wrongGuesses.length === 5) {
        console.log('loser')
    } else {
        function isWinner(letter) {
            return correctGuesses.includes(letter)
        }
        if (answerReduced.every(isWinner)) {
            console.log('winner')
        }
    }

}