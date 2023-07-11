let displayZero = document.querySelector(".zero")




function showDisplay(event){
    const x = event.target.innerText
    if(displayZero.innerHTML == 0){
        return displayZero.innerHTML = x
    }
    else{
        return displayZero.innerHTML += x
    }
}



function result(){
    let calculate = displayZero.innerText;
    displayZero.innerText = eval(calculate)
}



function allclear(){
    displayZero.innerText = 0
}

function lastClear(){
    const text = displayZero.innerText;
    if(text.length == 1){
        displayZero.innerText = 0
    }
    else{
        displayZero.innerText = text.substring(0 , text.length - 1)
    }
}



document.querySelector(".lastclear").addEventListener("click" , lastClear)
document.querySelector(".allclear").addEventListener("click" , allclear)
document.querySelector(".result").addEventListener("click" , result)
let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click" , showDisplay)
})