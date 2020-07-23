// Assignment Code and Event Listener to prompt Q's when btn pushed
var generatBtn = document.querySelector('#generate');
generatBtn.addEventListener('click', createPassword);



function createPassword() {
    let passwordLenth = parseInt(prompt('what length do you want your password'))
    if (passwordLenth <8 || passwordLenth > 128) {
        alert('Please use valid number')
        return
    }
    let lowerCase = 'abc'
    let upperCase = 'ABC'
    let specChar = '!@#'
    let numeric = '123'
    let randoPass = ''
    let lowerConfirm = confirm('do you want lower')
    let upperConfirm = confirm('do you want upper')
    let speConfirm = confirm('do you want special')
    let numsConfirm = confirm('do you want numbers')
    let selectedChars = ''

    if (lowerConfirm) {
        selectedChars += lowerChar
    }
    if (upperConfirm) {
        selectedChars += upperChar
    }
    if (specConfirm) {
        selectedChars += specChar
    }
    if (numsConfirm) {
        selectedChars += numeric
    }

let passwordLenth = ''

for(passwordLenth>7 || passwordLenth<128; passwordLenth++);
}