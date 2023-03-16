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

// adding letters for keyboards
row1Letters.forEach((letter) => {
    console.log(letter)
    let letterEl = document.createElement('div')
    letterEl.innerHTML = letter
    letterEl.style.border = 'solid'

    const elWdith = (row1Div.offsetWidth / row1Letters.length)

    letterEl.style.width = elWdith + "%"
    console.log(elWdith + "%")

    row1Div.appendChild(letterEl)
})