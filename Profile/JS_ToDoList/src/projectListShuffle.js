

let list_content = document.getElementById('list');
let project_content = document.getElementById('project')




export function goToProjects(){
    list_content.remove();
    document.body.append(project_content)
    
}
export function goToLists(){
    project_content.remove();
    document.body.append(list_content)
}