/*
Criando uma Calculadora com HTML, CSS e Javascript
*/

let input = document.querySelector('.value')
const allowedKeys = ["/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "00", ".", " "]

input.focus()

document.querySelectorAll(".num").forEach(function (numBtn) {
    numBtn.addEventListener("click", function () {
        const value = numBtn.dataset.value
        input.value += value
        input.focus()
    })
})

document.querySelector(".clear").addEventListener("click", function() {
    input.value = ''
    input.focus()
})

input.addEventListener("keydown", function(ev) {
    ev.preventDefault()

    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    if(ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if(ev.key === 'Enter') {
        calculate()
    }

    
})

document.querySelector(".equal").addEventListener("click", calculate)

function calculate() {
    const result = eval(input.value)
    input.value = result
}