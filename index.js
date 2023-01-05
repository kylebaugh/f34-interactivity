console.log('JS connected')

let counter = document.querySelector('#counter')

// STEP 1: Grab an HTML element

const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')

const themeBtns = document.querySelectorAll('.theme-buttons')

console.log(themeBtns)

// STEP 2: Write out a function

let count = 0

const increase = () => {
    count++
    // console.log(count)
    counter.textContent = count
}

const decrease = () => {
    count--
    // console.log(count)
    counter.textContent = count
}

const reset = (event) => {
    console.log(event.target.id)
    count = 0
    // console.log(count)
    counter.textContent = count
}

const selectTheme = (event) => {
    console.log(event.target.textContent)
    let theme = event.target.textContent

    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const buttons = document.querySelectorAll('button')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }

}


for(let i = 0; i < themeBtns.length; i++){
    console.log(themeBtns[i].textContent)

    themeBtns[i].addEventListener('click', selectTheme)
}


// STEP 3: Combine steps one and two using an event listener

plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)