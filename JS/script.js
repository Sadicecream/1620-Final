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
    else{
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
    }
})