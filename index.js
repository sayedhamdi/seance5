// Selectionner les elements 

// chnowa hachti bech naamel

// partie 1 
//register names in the register list 
// how ?

// get the value of the input 
// create an elemnt which contains 
// name and a button 
let input = document.querySelector("input")
let addButton = document.querySelector("button")
let registedList = document.querySelector("#registred")
let vaccinatedList = document.querySelector("#vaccinated")




if(localStorage.getItem("input")){
    input.value = localStorage.getItem("input")
}
//
let index = 0

function ajouter(){
    // get the value
    let name = input.value
    if(name==""){
        alert("ya foulen hot esmek")
        return
    }

    let div = `<div ><span>${name}</span><button id='${index}'>V</button></div>`
    registedList.innerHTML+=div
    index++
    input.value=""
    let vacBTNs = document.querySelectorAll("#registred button")
    vacBTNs.forEach(affichiRohek)
}

function affichiRohek(btn){
    btn.onclick = function (){ 
        let element = btn.parentElement
        vaccinatedList.append(element)
        element.children[1].innerText= "X"

        let deleteBTN = document.querySelectorAll("#vaccinated button")
        deleteBTN.forEach(btn=> {
            btn.onclick = function(){
                btn.parentElement.remove()
            }
        })

    }

}


input.onkeyup = sajelFelLocalStorage

function sajelFelLocalStorage(){
    localStorage.setItem("input",input.value)
}

addButton.onclick = ajouter 