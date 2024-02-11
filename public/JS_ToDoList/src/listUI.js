
import { format} from 'date-fns'








    let list_content = document.getElementById('list');





    export const createListItem = (header,getDesc,newDate) =>{
    
    //create list Item
    let list_item = document.createElement('div');
    list_item.classList.add('listItem');

    list_content.append(list_item);

    console.log()

    //create item header
    let item_header = document.createElement('h3');
    item_header.classList.add('itemHeader');
    item_header.innerText = "• " + header;
    list_item.appendChild(item_header);


    //create button Div
    let button_content = document.createElement('div');
    button_content.classList.add('Btns');
    list_item.appendChild(button_content);


    //Complete button
    let complete_btn = document.createElement('button');
    complete_btn.classList.add('completeBtn');
    complete_btn.innerText = '✖';
    complete_btn.style.backgroundColor = 'red';
    
    //
    
    //

    //delete button
    let delete_btn = document.createElement('button');
    delete_btn.classList.add('deleteBtn');
    delete_btn.innerText = 'Del';
    //
    
    //


    //edit button
    let edit_btn = document.createElement('button');
    edit_btn.classList.add('editBtn');
    edit_btn.innerText = 'Edt';
    button_content.append(edit_btn,delete_btn,complete_btn);
    //
    //
    //description
    let descSetter = document.createElement('div');
    descSetter.classList.add('descs')
    descSetter.innerText = 'Description : ' + getDesc;
    list_item.appendChild(descSetter)
    //
    //
    //date
    let dateSetter = document.createElement('div')
    dateSetter.classList.add('dates')
    dateSetter.innerText = "Due : " + newDate ;
    list_item.appendChild(dateSetter);

    


    const btns_event = (() => {
        //
        edit_btn.addEventListener('click' ,() =>{
            let promptLogger = prompt("What do you want to change?");
            if(promptLogger == null || promptLogger == '' )return;
            item_header.innerText = "• " + promptLogger 
        });
        //
        delete_btn.addEventListener('click',() =>{
            item_header.parentElement.remove()
            localStorage.clear();
        });
        //
        complete_btn.addEventListener('click',() =>{
            complete_btn.innerText = complete_btn.innerText =='✖' ? '✔' : '✖';
            if( complete_btn.innerText == '✔'){
                complete_btn.style.backgroundColor = 'green';
            } else if ( complete_btn.innerText == '✖'){
                complete_btn.style.backgroundColor = 'red';
            }
        })
    
    })()
    //
    //
    //
    


        return {header,getDesc,dateSetter};

        

    };


    


    






