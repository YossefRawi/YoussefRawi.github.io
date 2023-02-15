import { logToDoList } from "./log";

export const SetFormUi = (() => {

let form_content = document.getElementById('form');
let form_title = document.getElementById('title');
let form_date = document.getElementById('date');
let form_desc = document.getElementById('desc');
let form_submit = document.getElementById('submit');




function logInputs(){
    console.log(form_title.value,form_date.value,form_desc.value)
}

return{
    form_date,
    form_title,
    form_desc,
    form_submit,
    logInputs
}
})()

SetFormUi.form_submit.addEventListener('click',logToDoList)

