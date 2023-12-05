const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {        //COMMAND FOR THE BUTTON//
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {    //TO CHECK AND DELETE THE TASK//
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }
},false);

function saveData(){    //TO SAVE THE DATA//
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();