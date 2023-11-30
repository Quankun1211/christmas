

const yesBtn = document.getElementById('yes')
const noBtn = document.getElementById('no')
const select = document.querySelector('.select')
const content = document.querySelector('.content')
const giftBox = document.querySelector('.gift-box')
const boxs = document.querySelectorAll('.box')
const gift = document.querySelector('.gift-item')
const giftItems = document.querySelectorAll('.gift-item')
const close = document.querySelectorAll('.close')
const audio = document.getElementById('audio')


setTimeout(() =>{
    yesBtn.onclick = () => {
        select.classList.add('none')
        giftBox.classList.remove('none')
    }
},4000)
boxs.forEach((box, index) => {
    const giftItem = giftItems[index]
    box.onclick = () => {
        giftItem.classList.add('active')
        giftBox.classList.add('none')
        console.log(index)
    }
})
close.forEach((close, index) => {
    const giftItem = giftItems[index]
    close.onclick = () => {
        giftItem.classList.remove('active')
        giftBox.classList.remove('none')
    }
})

function playAudio() {
    audio.play()
}
window.addEventListener('DOMContentLoaded',playAudio())