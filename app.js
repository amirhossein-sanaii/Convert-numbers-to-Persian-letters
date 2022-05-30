// npm i num2persian
const input = document.querySelector('.input-number')
const btn = document.querySelector('.btn')
const showNumber = document.querySelector('.text')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    let number = input.value
    showNumber.textContent = (number).num2persian()
        // console.log(input.value);
})