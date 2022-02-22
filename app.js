

const new_task=document.querySelector('#new-task')
const addTask=document.querySelector('#addTask')
const item=document.querySelector('#items')

form=document.querySelector('.new-task-container')



function add_list_element(value_task){
    let listItem=document.createElement('li');
    let checkbox=document.createElement('input');
    let label=document.createElement('label');

    listItem.className="item";

    checkbox.type="checkbox";
    label.innerHTML=value_task;
    

    listItem.appendChild(checkbox)
    listItem.appendChild(label)

    return listItem

}



form.addEventListener('submit',function(event){
    event.preventDefault(); // defualt behabiar off 

    myvalidation();

    let list_item=add_list_element(new_task.value);
    item.appendChild(list_item);
    new_task.value=""
    
});


function myvalidation(){
    let values=new_task.value.trim()

    if(values ==""){
        setErrorFor(new_task,'** Please fill up the baground color name!') //setErrorFor fucntion define korte hobe
        

    }
    else{
        
    }


}
