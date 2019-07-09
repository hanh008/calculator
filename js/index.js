// create Array
var arr = []

// create string
var str = ''

// create display variable
let display = document.getElementById('display')

// initialise listen 
listen()

// create listen function using event listener
function listen() {
    document.addEventListener('click', buttonValue)
}

// create get button value function using if and else statements
function buttonValue() {
    let button = event.target.value 
    if (!isNaN(button) || button === '.') {
        number(button)
    } else if (button === 'AC') {
        clear()
    } else if (button === '=') {
        calculate()
    } else {
        store(button)
    }
}

// create number function using if and else statements
function number(button) {
    if(button === '.' && str.includes('.')) {
        return
    } else if(str.charAt(0) === '0' && str.length === 1 && button === '0') {
        return
    } else {
        str += button 
        display.value = str
    }
}

// create clear function
function clear() {
    str = ''
    arr = []
    display.value = '0'
}

// create store number function us if and else statements
function store(button) { 
    if(str === '' && arr.length === '0') {
        return
    } else if (str === '') {
        arr.length = arr.length - 1
        arr.push(button)
    } else {
        arr.push(str)
        arr.push(button)
        str = ''
    }
}

// create calculate function using if and else statements and for loop
function calculate() {
    arr.push(str)
    let currentNum = Number(arr[0])
    for(var i = 0; i < arr.length; i++) {
        let nextNum = Number(arr[i + 1])
        let symbol = arr[i]
        if(symbol === '+') {
            currentNum += nextNum
        } else if(symbol === '-') {
            currentNum -= nextNum 
        } else if(symbol === 'x') {
            currentNum *= nextNum
        } else if(symbol === '/') {
            currentNum /= nextNum
        }
    }
    if(currentNum < 0) {
        currentNum = Math.abs(currentNum) + '-'
    }
    display.value = currentNum
    str = JSON.stringify(currentNum)
    arr = []
}
