/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/


let addText = document.getElementById("add-button");
const todoList = document.getElementById("todo-list")



addText.onclick = function () {
    addToList()
}

function addToList (){
    let newItem = document.createElement("li");
    let inputText = document.getElementById("description").value;

    let text = document.createTextNode(inputText);
    newItem.appendChild(text)
    todoList.appendChild(newItem)
}

function removeFromList (event){

}

todoList.addEventListener('click', function (event){
    event.target.style.display= 'none';
})
