const list = document.querySelector('#list')
const input = document.querySelector("#input")

document.addEventListener('keypress', e =>{
    if ( e.key == 'Enter' ){
        addTask();
        // save();
    }
})

function addTask(){

    if ( input.value == '' ){
        return
    }

    li = document.createElement("li")

    li.innerHTML = input.value
    list.appendChild(li)
    input.value = ''
}