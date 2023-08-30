import sounds from './sounds.js'
import Sound from './sounds.js'

const buttoPlay = document.querySelector('.buttonPlay')
const buttonStop = document.querySelector('.buttonStop')
const buttonSum = document.querySelector('.buttonSum')
const buttonSubtraction = document.querySelector('.buttonSubtraction')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const card4 = document.querySelector('.card4')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let timerTimeOut
let svg1  = document.querySelector('.card1 svg path')
let svg2  = document.querySelector('.card2 svg path')
let svg3  = document.querySelector('.card3 svg path')
let svg4  = document.querySelector('.card4 svg path')
let ligth = document.querySelector('.ligth')
let dark = document.querySelector('.dark')
let body = document.querySelector('body')
let timerControls = document.querySelector('.timerControls')
let soundd = document.querySelector('.sound')
let vol1 = document.querySelector('#vol1')
let vol2 = document.querySelector('#vol2')
let vol3 = document.querySelector('#vol3')
let vol4 = document.querySelector('#vol4')

vol1.addEventListener('input', () => {
    let s1 = Number(vol1.value) / 100
    sound.floresta.volume = s1
})

vol2.addEventListener('input', () => {
    let s2 = Number(vol2.value) / 100
    sound.chuva.volume = s2
})

vol3.addEventListener('input', () => {
    let s3 = Number(vol3.value) / 100
    sound.cafeteria.volume = s3
})

vol4.addEventListener('input', () => {
    let s4 = Number(vol4.value) / 100
    sound.lareira.volume = s4
})

ligth.addEventListener('click', () =>{
    dark.classList.remove('hiden')
    body.classList.add('darkmod')
    timerControls.classList.add('darkmod')
    soundd.classList.add('darkmod')
})

dark.addEventListener('click', () =>{
    dark.classList.add('hiden')
    ligth.classList.remove('hiden')
    body.classList.remove('darkmod')
    timerControls.classList.remove('darkmod')
    soundd.classList.remove('darkmod')
})


const sound = Sound()

function resetTimer() {
    minutes.textContent = minutes.textContent = 2
}

function sum() {
    minutes.textContent = Number(minutes.textContent) + 5
    minutes.textContent = String(minutes.textContent).padStart(2, "0") 
}
function subtraction() {
    minutes.textContent = Number(minutes.textContent) - 5
    minutes.textContent = String(minutes.textContent).padStart(2, "0") 
}

function countDown(){
    timerTimeOut = setTimeout(function(){
        let newSegunds = Number(seconds.textContent)
        let newMinutes = Number(minutes.textContent)
        if(newMinutes <= 0  && newSegunds <= 0) {  
            sound.despertador.play()
            return
        }

        if(newSegunds <= 0 ){
            minutes.textContent = String(minutes.textContent - 1).padStart(2, "0")
            newSegunds = 60
        }

        seconds.textContent = String(newSegunds - 1).padStart(2, "0")
        sound.relogio.play()
        countDown()
    },1000)
}

buttoPlay.addEventListener('click', () =>{
    countDown()
})
buttonStop.addEventListener('click', () =>{
    clearTimeout(timerTimeOut)
})
buttonSum.addEventListener('click', () =>{
    sum()
})
buttonSubtraction.addEventListener('click', () =>{
    if(minutes.textContent <= 5){
        alert(`Número menor de 5`)
        return
    }
    subtraction()
})


card1.addEventListener('click', () =>{
    sound.floresta.play()
    svg4.classList.remove('clicado')
    svg3.classList.remove('clicado')
    svg2.classList.remove('clicado')
    svg1.classList.add('clicado')
})

card2.addEventListener('click', () =>{
    sound.chuva.play()
    svg4.classList.remove('clicado')
    svg3.classList.remove('clicado')
    svg1.classList.remove('clicado')
    svg2.classList.add('clicado')
})

card3.addEventListener('click', () =>{
    sound.cafeteria.play()
    svg4.classList.remove('clicado')
    svg1.classList.remove('clicado')
    svg2.classList.remove('clicado')
    svg3.classList.add('clicado')
})

card4.addEventListener('click', () =>{
    sound.lareira.play()
    svg3.classList.remove('clicado')
    svg1.classList.remove('clicado')
    svg2.classList.remove('clicado')
    svg4.classList.add('clicado')
})


