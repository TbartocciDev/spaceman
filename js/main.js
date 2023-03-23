// query selectors
// all different views
const startScreen = document.querySelector('.play-screen')
const spacemanScreen = document.querySelector('.game-screen')
const messageScreen = document.querySelector('.message-screen')

// main game elements
const spaceManDiv = document.querySelector('.spaceman')
const answerDiv = document.querySelector('.answer')
const keyboardDiv = document.querySelector('.keyboard')

// answer area elements
const hintDiv = document.querySelector('.hint')
const categoryDiv = document.querySelector('.category')
const answerKeysDiv = document.querySelector('.answer-keys')

// keyboard area elements
const keyboardRows = document.querySelectorAll('#row')

// spaceman elements
const spacemanEls = document.querySelectorAll('#spaceman')

// styles
// main page buttons
const selectedStyleColor = '#808080'
const selectedBorderColor = 'black'
const unSelectedStyleColor = '#d3d3d3'
const unSelectedBorderColor = 'gray'

// keyboard keys
const letterFontSize = '5.5vh'
const letterBackgroundColor = 'lightgray'
const keyMargins = '0 0.5vw 0 0.5vw'
const shadowColor = '#818181'
const keyBoxShadow = '-1vw -1.1vh 3px '+shadowColor+' inset, 1vw 0.3vh 3px '+shadowColor+' inset'
const keyHeight = '80%'

// correct or incorrect keys
const keyboardGreen = 'var(--buttonGreen)'
const greenShadow = '-1vw -1.1vh 3px var(--buttonShadowGreen) inset, 1vw 0.3vh 3px var(--buttonShadowGreen) inset'
const keyboardRed = 'var(--buttonRed)'
const redShadow = '-1vw -1.1vh 3px var(--buttonShadowRed) inset, 1vw 0.3vh 3px var(--buttonShadowRed) inset'

// global variables
let answerArr = []
let answerReduced = []
let guesses = []
let wrongGuesses = []
let correctGuesses = []
let answerObject = {}
let answerString = 'null'
let separatedAnswer = []

// -----------------------------------------
// start screen features and code
// -----------------------------------------

// build changing style components
let gameStyle = 'default'

const stylesBoxDiv = document.querySelector('.styles-box')
const styleButtons = stylesBoxDiv.querySelectorAll('#style-box')

styleButtons.forEach(function(button){
    const titleDiv = button.querySelector('.style-title')
    button.setAttribute('val', titleDiv.innerHTML)

    button.addEventListener('click', function(event){
        gameStyle = button.getAttribute('val').toLowerCase()

        styleButtons.forEach(function(eachButton) {
            if (button === eachButton) {
                eachButton.style.backgroundColor = selectedStyleColor
                eachButton.style.borderColor = selectedBorderColor
            } else {
                eachButton.style.backgroundColor = unSelectedStyleColor
                eachButton.style.borderColor = unSelectedBorderColor
            }
        })
    })
})

// add function to play button
const playBtn = document.querySelector('.play-button')

playBtn.addEventListener('click',function(event) {
    renderGame()
})

const styleSheet = document.querySelector('#pagestyle')

function renderGame() {
    getStyleSheet(gameStyle)
    resetVariables()
    showGame()
    hideSpaceman()
    getRandomPhrase()
    getAnswerComponents()
    renderAnswerBoard()
    renderKeyboards()
    addHintFade()
}

// functions

// change style sheet 
function getStyleSheet(style) {
    const styleSheetRef = 'css/'+style+'.css'
    styleSheet.setAttribute('href' , styleSheetRef)
    console.log('style: ' + style )
}

// show different views
function showGame() {
    startScreen.style.zIndex = '1'
    spacemanScreen.style.zIndex = '3'
    messageScreen.style.zIndex = '2'
    console.log('show game')
}
function showStartScreen() {
    startScreen.style.zIndex = '3'
    spacemanScreen.style.zIndex = '1'
    messageScreen.style.zIndex = '2'
}
function showMessage(message) {
    startScreen.style.zIndex = '1'
    spacemanScreen.style.zIndex = '2'
    messageScreen.style.zIndex = '3'
}

// -----------------------------------------
// start screen features and code
// -----------------------------------------

const exitBtn = document.querySelector('exit-button')
// -----------------------------------------
// game features and code
// -----------------------------------------

// all phrases to be guessed
const answers = [
    {
        string: 'Testing Testing',
        category: 'Funny Phrase'
    },
    {
        string: 'Second Phrase',
        category: 'Some Phrase'
    },
    {
        string: 'Jungle Gym',
        category: 'Object'
    },
]

// reset variables
function resetVariables() {
    answerArr = []
    answerReduced = []
    guesses = []
    wrongGuesses = []
    correctGuesses = []
    answerObject = {}
    answerString = 'null'
    separatedAnswer = []
}

// get random phrase from list
function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * answers.length)
    answerObject = answers[randomIndex]
    answerString = answerObject.string
    console.log('random phrase: '+answerString)
}


function renderAnswerBoard() {
    removeChildrenFromParent(answerKeysDiv)
    let letterIndex = 0
    separatedAnswer.forEach((letter) => {
        let letterEl = document.createElement('div')
        letterEl.style.border = 'solid'
        letterEl.style.borderColor = 'white'
        letterEl.style.color = 'white'
        letterEl.style.textAlign = 'center'
        letterEl.style.backgroundColor
        letterEl.setAttribute('value',letter.toUpperCase())
        letterEl.style.height = keyHeight
        letterEl.style.fontSize = '5vh'

        if (gameStyle === 'browser') {
            letterEl.style.border = 'none'
            let pictureEl = document.createElement('img')
            pictureEl.src = 'https://images.squarespace-cdn.com/content/v1/6217b15f5ffe405747511988/9fe457a0-3bec-4115-a2a4-331ef43ffd24/asteroid-png.png?format=1000w'
            pictureEl.style.height = '100%'
            pictureEl.style.width = '100%'
            pictureEl.style.rotate = '30deg'

            let direction = 'left'
            function changeAsteroid() {
                if (direction === 'left'){
                    direction = 'right'
                    pictureEl.style.rotate = '210deg'
                } else {
                    direction = 'left'
                    pictureEl.style.rotate = '30deg'
                }
            }
            setInterval(changeAsteroid, 1000)

            if (letter === ' ') {
                letterEl.style.border = 'none'
            } else {
                letterEl.appendChild(pictureEl)
            }
        } else {
            if (letter === ' ') {
                letterEl.style.border = 'none'
            }
        }
        answerKeysDiv.appendChild(letterEl)
        letterIndex += 1
    })
    console.log('appended: '+letterIndex)
}

function removeChildrenFromParent(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function getAnswerComponents() {
    separatedAnswer = answerString.split('')
    separatedAnswer.forEach((letter)=> {
        answerArr.push(letter.toUpperCase())
    })

    answerReduced = answerArr.reduce((acc, letter)=>{
        if (acc.includes(letter)) {
            // exists, do nothing
        } else {
            if (letter === ' ') {
                // do nothing
            } else {
                acc.push(letter)
            }
        }
        return acc
    }, [])
}

// adding letters for keyboards
function renderKeyboards() {

    const keyboardChars = [[
        'q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']]
    let keyboardNum = 0
    keyboardRows.forEach(function(row){
        removeChildrenFromParent(row)
        keyboardChars[keyboardNum].forEach((letter) => {
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
            row.appendChild(letterEl)
        })
    keyboardNum += 1
    })
    console.log('keyboards rendered')
}  

// hide spaceman
function hideSpaceman() {
    for(let i=0;i<spacemanEls.length;i++) {
        console.log('element')
        spacemanEls[i].style.opacity = 0
    }
}

// hint animation
function addHintFade() {
    console.log('hint affect added')
    hintDiv.addEventListener('click',function(event) {
        categoryDiv.style.opacity = '1'
        let intervalID = setInterval(fade, 100)
    
        function fade() {
            if (categoryDiv.style.opacity > 0) {
                categoryDiv.style.opacity = categoryDiv.style.opacity - 0.07;
            } else {
                clearInterval(intervalID)
            }
        }
    })
}

// check logic functions

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
    if (wrongGuesses.length === spacemanEls.length) {
        console.log('loser')
        showMessage()
    } else if (correctGuesses.length === answerReduced.length){
        console.log('winner')
        showMessage()
        // showStartScreen()
    }

    // show spaceman
    for(let i = 0;i<wrongGuesses.length; i++) {
        spacemanEls[i].style.opacity = 1
    }
}

function letterClicked(keyEl) {
    keyEl.addEventListener('click', function(event){
        console.log('pressed')
        const guessedLetter = event.target.innerHTML

        if (guesses.includes(guessedLetter)) {
            // already guessed, do nothing
        } else {
            // has not been guessed
            if (wrongGuesses.length +1 <= spacemanEls.length && correctGuesses.length+1 <= answerReduced.length) {
                if (answerArr.includes(guessedLetter)) {
                    // if its correct
                    keyEl.style.backgroundColor = keyboardGreen
                    keyEl.style.boxShadow = greenShadow
                    correctGuesses.push(guessedLetter)
                    checkLetter(guessedLetter,true)
                } else {
                    // if its wrong
                    wrongGuesses.push(guessedLetter)
                    keyEl.style.backgroundColor = keyboardRed
                    keyEl.style.boxShadow = redShadow
                    checkLetter(guessedLetter,false)
                }
                guesses.push(guessedLetter)
            }
        }
    })
}

// debug functions

function debugShowSpaceman() {
    wrongGuesses = spacemanEls
    checkLetter('a',true)
    showGame()
}

function debugShowKeyboard() {
    renderKeyboards()
    showGame()
}

function debugShowAnswerArea(answer) {
    answerString = answer
    getAnswerComponents()
    renderAnswerBoard()
    showGame()
}

// showMessage('Giving up early?')
