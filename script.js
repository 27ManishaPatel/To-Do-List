console.log("hello");

// Add a "checked" symbol when clicking on a list item

var list = document.getElementById("todoList");
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

// Create a new list item when clicking on the "Add" button
function todolist() {
    var newItem = document.createElement("li");
    var inputValue = document.getElementById("mylist",).value;
    if (inputValue == "") {
        alert("You did not enter any item!");
    }
    else {
        var text = document.createTextNode(inputValue);
        newItem.appendChild(text);
        document.getElementById("todoList").appendChild(newItem);
    }

    var trash = document.createElement("I");
    trash.className = "fa fa-trash";
    trash.id = "close";
    newItem.appendChild(trash);
    document.getElementById("todoList").appendChild(newItem);

    var trashbtn = document.getElementsByClassName("fa fa-trash");
    var i;
    for (i = 0; i < trashbtn.length; i++) {
        trashbtn[i].addEventListener("click", function () {
            this.parentElement.style.display = 'none';
        });
    }
}

// trash button 
var trashbtn = document.getElementsByClassName("fa fa-trash");
var i;
for (i = 0; i < trashbtn.length; i++) {
    trashbtn[i].addEventListener("click", function () {
        this.parentElement.style.display = 'none';
    });
}

displayDate = document.getElementById("day");
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesnday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
displayDate.innerHTML = "Today is " + day;