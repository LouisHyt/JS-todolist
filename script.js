const addTodo = document.querySelector("#btn");
//const todoCard = document.querySelector(".todoCard");
const templateCard = document.querySelector(".templateCard");
const todoCardsContainer = document.querySelector(".todoCards");

addTodo.addEventListener("click", () => {
    let newTodo = templateCard.content.cloneNode(true);
    todoCardsContainer.appendChild(newTodo);
    button.addEventListener("click", () => {
        newTodo.remove();
    })
})