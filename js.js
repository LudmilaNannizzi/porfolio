/*const $=(id) => document.getElementById(id)*/
const sk1 = document.getElementById('skill-1')
const mod1 = document.querySelector('.mod-1')

const sk2 = document.getElementById('skill-2')
const mod2 = document.querySelector('.mod-2')

const sk3 = document.getElementById('skill-3')
const mod3 = document.querySelector('.mod-3')

const sk4 = document.getElementById('skill-4')
const mod4 = document.querySelector('.mod-4')

const sk5 = document.getElementById('skill-5')
const mod5 = document.querySelector('.mod-5')

const sk6 = document.getElementById('skill-6')
const mod6 = document.querySelector('.mod-6')

const bgmodal = document.querySelectorAll('.modal-background')
// APERTURA  Y CIERRE DE MODALES

sk1.addEventListener('click', ()=>{
    mod1.classList.add('is-active')
})
bgmodal[0].addEventListener('click', ()=>{
    mod1.classList.remove('is-active')
})

sk2.addEventListener('click', ()=>{
    mod2.classList.add('is-active')
})
bgmodal[1].addEventListener('click', ()=>{
    mod2.classList.remove('is-active')
})

sk3.addEventListener('click', ()=>{
    mod3.classList.add('is-active')
})
bgmodal[2].addEventListener('click', ()=>{
    mod3.classList.remove('is-active')
})

sk4.addEventListener('click', ()=>{
    mod4.classList.add('is-active')
})
bgmodal[3].addEventListener('click', ()=>{
    mod4.classList.remove('is-active')
})

sk5.addEventListener('click', ()=>{
    mod5.classList.add('is-active')
})
bgmodal[4].addEventListener('click', ()=>{
    mod5.classList.remove('is-active')
})

sk6.addEventListener('click', ()=>{
    mod6.classList.add('is-active')
})
bgmodal[5].addEventListener('click', ()=>{
    mod6.classList.remove('is-active')
})



