var body = document.body
let toggle = document.querySelector('.toggle')
toggle.addEventListener('click', evt =>{
    if (document.getElementsByClassName('.toggle').checked = true){
        body.classList.toggle("light-theme");
        body.classList.toggle('dark-theme')
    }
    if (document.getElementsByClassName('.toggle').checked = false){
        body.classList.toggle('light-theme')
        body.classList.toggle('dark-theme')
    }
})

document.addEventListener("DOMContentLoaded", evt => {
    if (document.getElementsByClassName('.toggle').checked=true){
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
    }
})
let finish = document.querySelector('#frm-btn')
finish.addEventListener('click', function(evt){
    evt.preventDefault()
    evt.stopImmediatePropagation()
    data = document.querySelectorAll('input')
    console.log(data[1].value)
    console.log(data[2].value)
    message = document.querySelector('#msg')
    console.log(message.value)
})