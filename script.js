//Récupération des éléments importants
const cardsContainer = document.querySelector(".todoCards");
const addTaskBtn = document.querySelector("#btn");


addTaskBtn.addEventListener("click", alsoGenerateCard);
//addTaskBtn.addEventListener("click", generateCard);


//Fonction générant une nouvelle carte
function generateCard(){
    const todoCard = document.createElement('div');
    todoCard.classList.add("todoCard");
    const textArea = document.createElement('textarea');
    textArea.classList.add("task");
    textArea.cols = 20;
    textArea.rows = 15;
    textArea.maxLength = 200;
    textArea.textContent = "New Task";
    todoCard.appendChild(textArea);
    const delBtn = document.createElement('span');
    delBtn.classList.add("delBtn");
    const delIcon = document.createElement("i");
    delIcon.classList.add("fa","fa-trash");
    delIcon.ariaHidden = true;
    delBtn.appendChild(delIcon);
    todoCard.appendChild(delBtn);
    delBtn.addEventListener("click", _ => {
        todoCard.remove();
    })

    cardsContainer.appendChild(todoCard);
}


//Deuxieme version
function alsoGenerateCard(){

    cardsContainer.insertAdjacentHTML('beforeend', `
    <div class="todoCard">
        <textarea class="task" cols="20" rows="15" maxlength="200">New Task</textarea>
        <span class="delBtn" onclick="removeElement(this)">
            <i class="fa fa-trash" aria-hidden></i>
        </span>
    </div>
    `);

}

function removeElement(e){
    e.parentNode.remove();
}