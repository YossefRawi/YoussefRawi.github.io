import  {createListItem} from './listUI'
import{goToLists} from './projectListShuffle'
import {SetFormUi} from './ProjectUI'
import { format} from 'date-fns'








export function logToDoList(){
    let title_Logger = SetFormUi.form_title.value;
    let desc_Logger = SetFormUi.form_desc.value;
    let date_Logger = SetFormUi.form_date.value;
    
    if(title_Logger == null || title_Logger == '' || desc_Logger == null || desc_Logger == '')return alert('Title, date and description must not be empty!') ;
    if(date_Logger == null || date_Logger == '') return alert('Invalid time value');
    //
    let new_todo = createListItem(title_Logger,desc_Logger,format(new Date(date_Logger), 'dd / MMM / yyyy'))
    //
    
    setToLocalStoarge(title_Logger,desc_Logger,date_Logger,new_todo)
    
    goToLists();
    
    
    console.log(title_Logger,desc_Logger,date_Logger);



};


    function setToLocalStoarge(title,desc,date,new_todo){
        localStorage.setItem(title,title)
        localStorage.setItem(desc,desc)
        localStorage.setItem(date,date)
        let serialized = JSON.stringify(new_todo)
        let setSerialized = localStorage.setItem(title,serialized)
        let deSerialized = JSON.parse(localStorage.getItem(setSerialized))
    
        return deSerialized
    }

