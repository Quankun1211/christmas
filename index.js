

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
const noneSelect = document.querySelector('.none-select')
const backBtn = document.querySelector('.back-btn')
const backGift = document.querySelector('.back-gift-btn')
const addGift = document.querySelector('.add-gift')
const input = document.querySelector('.input-gift')
const output = document.querySelector('.thanks')
var inputValue

setTimeout(() =>{
    yesBtn.onclick = () => {
        select.classList.add('none')
        giftBox.classList.remove('none')
    }
},400)
setTimeout(() =>{
    noBtn.onclick = () => {
        select.classList.add('none')
        noneSelect.classList.remove('none')
    }
},400)
backBtn.onclick = () => {
    noneSelect.classList.add('none')
    select.classList.remove('none')

}
backGift.onclick = () => {
    giftBox.classList.add('none')
    select.classList.remove('none')

}
boxs.forEach((box, index) => {
    const giftItem = giftItems[index]
    box.onclick = () => {
        giftItem.classList.add('active')
        giftBox.classList.add('none')
    }
})
close.forEach((close, index) => {
    const giftItem = giftItems[index]
    close.onclick = () => {
        giftItem.classList.remove('active')
        giftBox.classList.remove('none')
    }
})
input.onchange = (e) => {
    inputValue = e.target.value
}
addGift.onclick = () => {
    var html = `<h1 class="thanks-text gift-text">Cảm ơn ${inputValue} !! Chúc bạn một mùa giáng sinh vui vẻ nhaaa <3 <3</h1>`
    output.innerHTML = html
}


// window.onclick = () => {
//     audio.play()
// }