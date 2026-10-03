let myname = prompt("😎What is your name?")

while(myname == "" || myname == null){
    myname = prompt("you have to enter your name to continue🤔")
}
if(myname != "" && myname != null){
    alert("Welcome " + myname + " to my website!😎")
    document.getElementById("title").innerText = "Hello " + myname + ", welcome to my website!"
    document.getElementById("title").style.color = "rgb(0, 187, 255)"
}

function bgcolor(color) {
     if(color == "#1c1c1c"){
        document.body.style.color = "whitesmoke"
        }else{
        document.body.style.color = "#1c1c1c"
     }
    document.body.style.backgroundColor = color
}

let taskinput = document.getElementById("taskinput")
function addtask(){
    if(taskinput.value === ""){
        alert("you have to enter your task🥲🙃")
      }else{
        showtask(taskinput.value)
        taskinput.value = ""
    }
}
taskinput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){addtask()}
})
function showtask(task){
    document.getElementById("taskbox").innerHTML += 
        `
            <div class="task">
                <h4>${task}</h4>
                <div class="button">
                    <button onclick="deletetask(this)">🗑️</button>
                    <button onclick="edittask(this)">✏️</button>
                    <button onclick="donetask(this)">✅</button>
                </div>
            </div>
        `
}
function deletetask(button){
button.closest(".task").remove()
}
function edittask(button){
    let oldtask = button.closest(".task").querySelector("h4")
    let newtask = prompt("Edit your task", oldtask.innerText)
    if(newtask != null && newtask != ""){
        oldtask.innerText = newtask
    }
}
function donetask(button){
     button.closest(".task").classList.toggle("done")
} 

    function greenColor() {
        document.getElementById("title").style.color = "green"
    }
    function blueColor() {
        document.getElementById("title").style.color = "blue"
    }
    function redColor() {
        document.getElementById("title").style.color = "red"
    }

