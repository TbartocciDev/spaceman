// answer string and array
const answerString = 'Warm toasted bagel with lox and cream'
// const answerString = 'ednm ilas'
const separatedAnswer = answerString.split('')
const answerArr = []

let answerReduced = []
let guesses = []
let wrongGuesses = []
let correctGuesses = []

separatedAnswer.forEach((letter)=> {
    answerArr.push(letter.toUpperCase())
})
// console.log(answerArr)
answerReduced = answerArr.reduce((acc, letter)=>{
    if (acc.includes(letter)) {
        // console.log('exists')
    } else {
        if (letter === ' ') {
            // do nothing
        } else {
            acc.push(letter)
        }
    }
    return acc
}, [])

// console.log(answerReduced)
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

// single spot for letter styles
const letterFontSize = '5.5vh'
const letterBackgroundColor = 'lightgray'
const keyMargins = '0 0.5vw 0 0.5vw'
const shadowColor = '#818181'
const keyBoxShadow = '-1vw -1.1vh 3px '+shadowColor+' inset, 1vw 0.3vh 3px '+shadowColor+' inset'

// adding letters for keyboards
// top row
row1Letters.forEach((letter) => {
    let letterEl = document.createElement('div')
    letterEl.style.border = 'solid'
    letterEl.style.margin = keyMargins
    letterEl.style.textAlign = 'center'
    letterEl.style.flex = '1'
    letterEl.innerHTML = letter.toUpperCase()
    letterEl.style.fontSize = letterFontSize
    letterEl.style.backgroundColor = letterBackgroundColor
    letterEl.style.boxShadow = keyBoxShadow

    letterClicked(letterEl)
    row1Div.appendChild(letterEl)
})

// second row
row2Letters.forEach((letter) => {
    let letterEl = document.createElement('div')
    letterEl.style.border = 'solid'
    letterEl.style.margin = keyMargins
    letterEl.style.textAlign = 'center'
    letterEl.style.flex = '1'
    letterEl.innerHTML = letter.toUpperCase()
    letterEl.style.fontSize = letterFontSize
    letterEl.style.backgroundColor = letterBackgroundColor
    letterEl.style.boxShadow = keyBoxShadow

    letterClicked(letterEl)
    row2Div.appendChild(letterEl)
})

// third row
row3Letters.forEach((letter) => {
    let letterEl = document.createElement('div')
    letterEl.style.border = 'solid'
    letterEl.style.margin = keyMargins
    letterEl.style.textAlign = 'center'
    letterEl.innerHTML = letter.toUpperCase()
    letterEl.style.flex = '1'
    letterEl.style.fontSize = letterFontSize
    letterEl.style.backgroundColor = letterBackgroundColor
    letterEl.style.boxShadow = keyBoxShadow

    letterClicked(letterEl)
    row3Div.appendChild(letterEl)
})

// answer area elements
const hintDiv = document.querySelector('.hint')
const categoryDiv = document.querySelector('.category')
const answerKeysDiv = document.querySelector('.answer-keys')

// height and width of keys 
const answerHeight = answerDiv.offsetHeight
// const keyHeight = ((answerHeight / 4)/12) + 'vh'
const keyHeight = '80%'
const answerWidth = answerKeysDiv.offsetWidth

// adding letter to answer div
let letterIndex = 0
separatedAnswer.forEach((letter) => {
    let letterEl = document.createElement('div')
    letterEl.style.border = 'solid'
    letterEl.style.borderColor = 'white'
    letterEl.style.color = 'white'
    letterEl.style.textAlign = 'center'
    letterEl.setAttribute('value',letter.toUpperCase())
    // letterEl.style.marginTop = '1.5vh'
    letterEl.style.height = keyHeight
    letterEl.style.fontSize = '5vh'

    if (letter === ' ') {
        letterEl.style.border = 'none'
    }
    answerKeysDiv.appendChild(letterEl)
    letterIndex += 1
})

// spaceman elements
const headDiv = document.querySelector('.head') 
const leftArmDiv = document.querySelector('.LArm')
const torsoDiv = document.querySelector('.torso')
const rightArmDiv = document.querySelector('.RArm')
const leftLegDiv = document.querySelector('.LLeg')
const rightLegDiv = document.querySelector('.RLeg')

const spacemanEls = document.querySelectorAll('#spaceman')
// functions

function checkLetter(someLetter, someBool) {

    // show letter in answwer keys
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
    if (wrongGuesses.length >= spacemanEls.length) {
        console.log('loser')
    } else if (correctGuesses.length === answerReduced.length){
        console.log('winner')
    }

    // show spaceman
    for(let i = 0;i<wrongGuesses.length; i++) {
        spacemanEls[i].style.opacity = 1
    }
}

function letterClicked(keyEl) {
    keyEl.addEventListener('click', function(event){
        const guessedLetter = event.target.innerHTML

        if (guesses.includes(guessedLetter)) {
            // already guessed, do nothing
        } else {
            // has not been guessed
            if (wrongGuesses.length +1 <= spacemanEls.length && correctGuesses.length+1 <= answerReduced.length) {
                if (answerArr.includes(guessedLetter)) {
                    // if its correct
                    keyEl.style.backgroundColor = '#59f861'
                    keyEl.style.boxShadow = '-1vw -1.1vh 3px #1aa321 inset, 1vw 0.3vh 3px #1aa321 inset'
                    correctGuesses.push(guessedLetter)
                    checkLetter(guessedLetter,true)
                } else {
                    // if its wrong
                    wrongGuesses.push(guessedLetter)
                    keyEl.style.backgroundColor = '#e43838'
                    keyEl.style.boxShadow = '-1vw -1.1vh 3px #9d1212 inset, 1vw 0.3vh 3px #9d1212 inset'
                    checkLetter(guessedLetter,false)
                }
                guesses.push(guessedLetter)
            }
        }
    })
}