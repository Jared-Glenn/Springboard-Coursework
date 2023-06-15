const addItem = document.querySelector("#add-item");
const itemList = document.querySelector("#item-list")
let items = JSON.parse(localStorage.getItem("items"));

if (items === null) {
    items = []
}

for (item of items) {
    let listItem = document.createElement("li");
    listItem.innerText = item.name;
    if (item.crossedOut === true){
        listItem.style.textDecoration = "line-through"
    }
    else {
        listItem.style.textDecoration = ""
    }
    let newButton = document.createElement("button");
    newButton.innerText = "Remove"

    listItem.append(newButton)
    itemList.append(listItem);
}

addItem.addEventListener("submit", function(e){
    e.preventDefault();
    let newItem = document.querySelector("#new-item");
    items.push({name: newItem.value, crossedOut: false})
    localStorage.setItem("items", JSON.stringify(items))

    let listItem = document.createElement("li");
    listItem.innerText = newItem.value;
    let newButton = document.createElement("button");
    newButton.innerText = "Remove"

    listItem.append(newButton)
    itemList.append(listItem);
    addItem.reset();
});

itemList.addEventListener("click", function(e){
    e.preventDefault();
    if (e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        
        for (let i = 0; i < items.length; i++){
            if (items[i].name + "Remove" === e.target.parentElement.innerText){
                items.splice(i, 1)
                localStorage.setItem("items", JSON.stringify(items))
                break
            }
        }
    }
})

itemList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        if (e.target.style.textDecoration == "line-through"){
            e.target.style.textDecoration = ""
            
            for (let i = 0; i < items.length; i++){
                if (items[i].name + "Remove" === e.target.innerText){
                    items[i].crossedOut = false
                    localStorage.setItem("items", JSON.stringify(items))
                    break
                }
            }
        }
        else {
            e.target.style.textDecoration = "line-through"

            for (let i = 0; i < items.length; i++){
                if (items[i].name + "Remove" === e.target.innerText){
                    items[i].crossedOut = true
                    localStorage.setItem("items", JSON.stringify(items))
                    break
                }
        }
    }
}
})