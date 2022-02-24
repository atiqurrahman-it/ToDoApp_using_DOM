// background color section start 

const fext_div1=document.querySelector('.div_flex1')
const fext_div2=document.querySelector('.div_flex2')
const fext_div3=document.querySelector('.div_flex3')

let completeUl = document.querySelector('.complete-list ul');

let container=document.querySelector('.container')

fext_div1.addEventListener('click',function(){
    container.style.backgroundColor=`rgb(204, 5, 187)`;

});

fext_div2.addEventListener('click',function(){
    container.style.backgroundColor=`rgb(212, 129, 4)`;

});
fext_div3.addEventListener('click',function(){
    container.style.backgroundColor=`rgb(6, 144, 224)`;


});

// background color section End  

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
     // this blow code  work after myvalidation check 
    // let list_item=add_list_element(new_task.value);
    // item.appendChild(list_item);
    
    // new_task.value=""
    // bindInCompleteItems(list_item,Completetask)
    
    
});


// second way Start 
let checkbox=document.querySelector('#items');
checkbox.addEventListener('click',function(event){
//    const single_click_item=event.target.parentElement

  if ($(event.target).is('[type="checkbox"]')){
    const single_click_item=event.target.parentElement

    let cc=single_click_item.querySelector('input[type="checkbox"]');
    cc.remove()
 
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    single_click_item.appendChild(deleteBtn);
 
    let complete_item= single_click_item.cloneNode(true) //depth clone 
    single_click_item.remove()
 
    add_complate_item(complete_item)

  }
   

});

// let completeUl = document.querySelector('.complete-list ul');
 function add_complate_item(item){
    completeUl.appendChild(item)

}

// delete for complete items 
completeUl.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        let li=e.target.parentElement
        li.remove()
    }
})


// second way End 

// frist way  Start 



// let Completetask= function() {
//     let listItem = this.parentNode;  // this meens  click input flied
//     //this.parentNode meens  input er parent that meens li flied 
//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.className = 'delete';
//     listItem.appendChild(deleteBtn);

//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.remove();

//     completeUl.appendChild(listItem);

//     bindCompleteItems(listItem, deleteTask); //delete er jono
    
// }

// let deleteTask = function() {
//     let listItem = this.parentNode;
//     let ul = listItem.parentNode;
//     ul.removeChild(listItem);
// }


// let bindInCompleteItems = function(taskItem, checkboxClick) {
//     let checkBox = taskItem.querySelector('input[type="checkbox"]');
//     checkBox.onchange = checkboxClick; // when box is check then function is runing (complate function e input filed jabe (this) )
// }

// // defual element compalte er joono
// for(let i=0; i< item.children.length; i++ ) {
//     bindInCompleteItems(item.children[i], Completetask);
// }


// let bindCompleteItems = function(taskItem, deleteButtonClick) {
//     let deleteButton = taskItem.querySelector('.delete');
//     deleteButton.onclick = deleteButtonClick;
// }


// // defual element delete  er joono
// for(let i=0; i< completeUl.children.length; i++ ) {

//     bindCompleteItems(completeUl.children[i], deleteTask);
// }



// Frist way End  



// validation er jono  start 
function myvalidation(){
    let values=new_task.value.trim()
    if(values ==""){
        new_task.classList.add('inbutbox_error')
        setErrorFor(new_task,'** Please fill up the Taks Name!') //setErrorFor fucntion define korte hobe
    }
    else{
        let list_item=add_list_element(new_task.value);
        item.appendChild(list_item);
        new_task.value=""
        // bindInCompleteItems(list_item,Completetask)

        new_task.classList.remove('inbutbox_error')
        new_task.classList.add('inbutbox_success')
        setSuccess(new_task)
    }
}

function setErrorFor(values,mess){
    let error_message=document.querySelector('.error_message')
    error_message.innerHTML=mess;
    error_message.style.color="red"
    
}
function setSuccess(values){
    let error_message=document.querySelector('.error_message')
    error_message.innerHTML="";
    
}

// validation er jono  End  


