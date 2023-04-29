const inputbox = document.getElementById("values")
const list = document.getElementById("list-container")
function addTask(){
    if (inputbox.value === "") {
        alert("You must write some thing to add todo list")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        savedata();
    }
    inputbox.value = "";
}
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false)

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}
function getdata() {
    list.innerHTML = localStorage.getItem("data");
}
getdata();