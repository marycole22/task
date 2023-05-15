const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[]

console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

function displayItems(){
    let items = ""
    for(let i = 0; i < itemsArray.length; i++){
        items += `<div class="item">
        <div class="input-control">
            <textarea disabled>${itemsArray[i]}</textarea>
            <div class="edit">
                <i class="fa-solid fa-trash deleteBtn"></i>
                <i class="fa-solid fa-file-pen editBtn"></i>
            </div>
        </div>
        <div class="update">
            <button class="saveBtn">Save</button>
            <button class="cancelBtn">Cancel</button>
        </div>
    </div>`
    }
    document.querySelector(".list").innerHTML = items
    activateDeleteListeners()
    activateEditListeners()
    activateSaveListeners()
    activateCancelListeners()
}
 function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => {deleteItem(i) })
    })
 }

 function activateEditListeners(){
    const editBtn = document.querySelectorAll(".editBtn")
    const update = document.querySelectorAll(".update")
    const input = document.querySelectorAll(".input-control textarea")
    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            update[i].style.display = "block"
            input[i].disabled = false
        })
    })
 }
  
 function activateSaveListeners(){
    const saveBtn = document.querySelectorAll(".saveBtn")
    const input = document.querySelectorAll(".input-control textarea")
    saveBtn.forEach((sb, i) => {
       sb.addEventListener("click", () => {
        updateItem(input[i].value, i)
       })
    })
 }

  function activateCancelListeners(){
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const update = document.querySelectorAll(".update")
    const input = document.querySelectorAll(".input-control textarea")
     cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            update[i].style.display = "none"
            input[i].disabled =true
        })
     })
  }

   function updateItem(text, i){
    itemsArray[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
   }

   function deleteItem(i){
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
   }

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}





function displaydate(){
    let date = new Date()
    date = date.toDateString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}
window.onload = function(){
    displaydate()
   displayItems()
}