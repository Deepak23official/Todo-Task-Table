const task_Panel = document.getElementById("task-panel")
const bgColor = document.getElementById("bg-color")
const container = document.querySelector(".container")
const input = document.getElementById("input")
const input1 = document.getElementById("input1")
const tbody = document.getElementById("tbody")
const Name = document.getElementById("Name")
const Status = document.getElementById("status")
const row = document.querySelectorAll(".row")
const Search = document.getElementById("search")
function openTask(){
    bgColor.classList.add("bg-black")
    container.style = "z-index:-1"
    task_Panel.style = "top:50%;transition:0.5s"
}
function Ser(){
    const id = document.querySelectorAll(".id")
    id.forEach(val=>{
        if(Search.value === val.textContent){
            let input = val.parentElement.innerText; 
            let userVal = input.split(/[\t\n]+/)
                .map(item => item.trim()) 
                .filter(item => item);
            console.log(userVal);
            tbody.innerHTML=`
            <tr>
            <td>${userVal[0]}</td>
             <td>${userVal[1]}</td>
                <td>${userVal[2]}</td>
                <td>${userVal[3]}</td>
                <td><i onclick="Del(event)" class="fa-solid fa-trash"></i></td>
            </tr>`
            Search.value = ""
        }else console.log("Bad");
    })
}
function Remove(){
    if(input.value.length>0){
        if(!input1.value =="" && !Name.value=="" && !Status.value ==""){
            bgColor.classList.remove("bg-black")
            container.style = "z-index:1"
            task_Panel.style = "top:-100%;transition:0.5s"
            // if(input.value.type === Number){
            //     console.log("hello");
                
            // }
            tbody.innerHTML += `
            <tr class="row">
                <td class="id">${input.value}</td>
                <td>${Name.value}</td>
                <td>${input1.value}</td>
                <td>${Status.value}</td>
                <td><i onclick="Del(event)" class="fa-solid fa-trash"></i></td>
            </tr>
            `
            
             input.value = "" 
            input1.value = ""
            Name.value =""
            Status.value = ""
        }else{
        alert("Please check your Details filled or not..")
        }
    }else{
        alert("Please Enter Details Peoperly")
    }
}
function Close(){
    bgColor.classList.remove("bg-black")
    container.style = "z-index:1"
    task_Panel.style = "top:-100%;transition:0.5s"
}
function Del(event){
let Del = event.target.parentNode
Del.parentNode.remove()
}



