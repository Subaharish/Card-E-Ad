const bg = document.querySelector('.bg')
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const logo = document.querySelector('.logo')
const firstGif = document.querySelector('.gif-1')
const SecondGif = document.querySelector('.gif-2')
const btn = document.querySelector('.btn')
const wallet = document.querySelector('.wallet')

firstGif.style.display = 'none'
SecondGif.style.display = 'none'
btn.style.display = 'none'
wallet.style.display = 'none'
bg1.style.display = 'none'
bg2.style.display = 'none'

setTimeout(()=>{
    firstGif.style.display='flex'
    bg.style.display='none'
    setTimeout(()=>{
        btn.style.display='flex'
    },1000)
},2000)

btn.addEventListener('click', ()=>{
    btn.style.display='none'
    firstGif.style.display='none'
    bg.style.display='none'
    SecondGif.style.display = 'flex'
    setTimeout(()=>{
        SecondGif.style.display = 'none'
        bg1.style.display='flex'
        wallet.style.display='flex'
        // wallet.classList.add('move')
    },4500)
    setTimeout(()=>{
        bg1.style.display='none'
        wallet.style.display='none'
        bg2.style.display = 'flex'
        logo.style.display = 'none'
    },5500)
})