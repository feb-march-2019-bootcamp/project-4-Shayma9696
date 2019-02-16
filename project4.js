let AddnewTask = document.querySelector('.AddNewTask');
let Btn = document.querySelector('#btn');
let Btndelete = document.querySelector('#delete');
let leftPart = document.querySelector(".leftPart ul");
let rightPart = document.querySelector(".rightPart ul");
let list = document.createElement("li");
let checkBox = document.createElement("input");
let label = document.createElement("label");

function create(text) {
    [text]
        .flat()
        .map((text) => {
            Btn.addEventListener("click", function () {
                let li = document.createElement("li");
                let lbl=document.createElement("label")
                lbl.innerHTML = text;
                ul.appendChild(label);
                checkBox.type = "checkbox";
                list.appendChild(checkBox);
                list.appendChild(label);
            });

            return list;
        });
    }

 function  removeDelete(item, deleteBtn){
     

        let deleteBtn = item.querySelector("#delete");
        
        deleteBtn.onclick = deleteBtn;
        
        
        };
        
function Deleted(){
list.appendChild(deleteBtn);
var checkBox = list.querySelector("input[type=checkbox]");
checkBox.remove();

rightPart.appendChild(list); 
removeDelete(list, Btndelete);
}

create(AddnewTask);
Deleted();

let Add = document.getElementById('.leftPart ul');

const addBtn = document.getElementById('#btn')

addBtn.addEventListener('click', () => {

    const text = Add.value;

    newTodoText.value = '';
    create(text ,Add);
})
