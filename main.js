// window.onload(ev)
const taskId = document.getElementById("task id");
const taskForm = document.getElementById("task form");
const addBtn = document.getElementById("btn add");
const mainId = document.getElementById("tasks")

taskForm.addEventListener("submit",(e)=> {
    e.preventDefault()
    const rowDiv = document.createElement("div");
    rowDiv.className = "row"
    const newItem = document.createElement("div");
    newItem.className = "content"
    const newItemValue = document.createElement("input")
    newItemValue.value = taskId.value;
    newItemValue.setAttribute("readonly","readonly")
    newItem.appendChild(newItemValue);
    rowDiv.appendChild(newItem)
    mainId.appendChild(rowDiv)
    const newItemEdit = document.createElement("button")
    newItemEdit.className = "edit"
    newItemEdit.innerText = "Edit"
    const newItemDelete = document.createElement("button")
    newItemDelete.className = "delete"
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
            newItemEdit.innerText = "Save"    
        } else {
            newItemValue.setAttribute("readonly","readonly")
            newItemEdit.innerText = "Edit"
        }
    })
    newItemDelete.addEventListener('click',()=>{
        rowDiv.removeChild(newItem)
    })
    taskId.value =""
})
