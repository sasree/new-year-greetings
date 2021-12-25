// window.onload(ev)
const taskId = document.getElementById("task id");
const rowId = document.getElementById("tasks");
const taskForm = document.getElementById("task form");
const addBtn = document.getElementById("btn add");
const mainId = document.getElementById("tasks")
// Alert if the new item is empty. Add enter key functionality to Edit and Save button
taskForm.addEventListener("submit",(e)=> {
    e.preventDefault()
    const rowDiv = document.createElement("div");
    rowDiv.className = "content"
    const newItem = document.createElement("div");
    newItem.className = "input-group shadow p-3 bg-body rounded"
    
    const newItemValue = document.createElement("input")
    newItemValue.className = "form-control"
    newItemValue.value = taskId.value;
    newItemValue.setAttribute("readonly","readonly")
    newItem.appendChild(newItemValue);
    rowDiv.appendChild(newItem)
    mainId.appendChild(rowDiv)
    const newItemEdit = document.createElement("button")
    newItemEdit.className = "edit btn btn-success"
    newItemEdit.innerText = "Edit"
    const newItemDelete = document.createElement("button")
    newItemDelete.className = "delete btn-danger"
    newItemDelete.innerText = "Delete"
    const newItemSave = document.createElement("button")
    newItemSave.className = "save"
    newItemSave.innerText = "Save"
    newItem.appendChild(newItemEdit)
    newItem.appendChild(newItemDelete)
    newItemEdit.addEventListener("click",()=>{
        if(newItemEdit.innerText==="Edit") {
            newItemValue.removeAttribute("readonly");
            newItemValue.focus();
            newItemEdit.className = "edit btn btn-warning"
            newItemEdit.innerText = "Save"    
        } else {
            newItemValue.setAttribute("readonly","readonly")
            newItemEdit.className = "edit btn btn-success"
            newItemEdit.innerText = "Edit"
        }
    })
    newItemDelete.addEventListener('click',()=>{
        
        rowDiv.removeChild(newItem)
    })
    taskId.value =""
});
