//variaveis
let cookie = document.querySelector(".cookie")
let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
let index = document.querySelector('.index')
let button = document.getElementsByTagName('button')

let randomNumber = (Math.random() * (2 - 0) + 0).toFixed(0)
let array = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 'A sorte favorece os audaciosos. O sucesso está a um passo de distância!', 'Uma nova oportunidade está à sua espera. Esteja preparado para abraçá-la!'];

//eventos
cookie.addEventListener('click', toggleScreen)
button.addEventListener('click', toggleScreen)


//funcções
function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    randomMessage()
    
}

function randomMessage(){
    let random = randomNumber
    index.innerHTML = array[random]
}

console.log(cookie)