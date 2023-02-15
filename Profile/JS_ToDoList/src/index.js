import './style.css';
import {logToDoList} from './log'
import {createListItem} from './listUI'
import {goToProjects,goToLists,OnLoad} from './projectListShuffle'
import { SetFormUi } from './ProjectUI';


//Loads the Main UI 
export default (function page_UI() {
    //
    const header_main = document.createElement('div');
    header_main.className = 'mainHeader';
    //
    const header = document.createElement('h1');
    header.classList.add('header');
    header.innerText = 'ToDoList';
    //
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('addproject');
    projectBtn.innerText = 'Projects';
    //
    const listBtn = document.createElement('button');
    listBtn.classList.add('addlist');
    listBtn.innerText = 'List'
    //

    header_main.append(header,projectBtn,listBtn,);
    //
    //create list
    let list_content = document.getElementById('list');
    list_content.classList.add('list');
    
    //
    let project_content = document.getElementById('project')
    project_content.classList.add('project')
    //
    document.body.append(header_main,list_content);
    //

    //
    listBtn.addEventListener('click',goToLists)
    //
    projectBtn.addEventListener('click',goToProjects)
})()


//Removes list_content when you first open the page
goToProjects();


    


    
    



    




    

