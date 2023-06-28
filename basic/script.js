//Récupération des éléments importants
const cardsContainer = document.querySelector(".todoCards");
const todoCard = document.querySelector(".todoCard");
const addTaskBtn = document.querySelector("#btn");
const delBtn = document.querySelector(".delBtn");
const counter = document.querySelector("#count");

addTaskBtn.addEventListener("click", addCard);
delBtn.addEventListener("click", removeCard)
updateCounter();

function addCard(){
    const card = todoCard.cloneNode(true);
    const deleteBtn = card.querySelector(".delBtn");
    deleteBtn.addEventListener("click", removeCard);
    cardsContainer.appendChild(card);
    updateCounter();
}

function removeCard(){
    this.parentNode.remove();
    updateCounter();
}

function updateCounter(){
    counter.textContent = document.querySelectorAll(".task").length;
}

