let newText = document.querySelector('.message'),
addButton = document.querySelector('.add'),
listToDo = document.querySelector('.todo');

let toDoList = [];
addButton.addEventListener('click', function (){
        addNewToDo();
    

});
document.addEventListener('keydown', function(event) {
if (event.key === 'Enter' && document.activeElement === newText) {
    addNewToDo();
}
});

function addNewToDo() {
    let newto = newText.value.trim();
    if(newto !== '' && newto !== ' '){
       let newToDo = {
        listToDo: newText.value,
        checked: false,
    };
    toDoList.push(newToDo);
    displayMessages();    
    }
 

    newText.value = '';
}
listToDo.addEventListener('click', function(event) {
if (event.target.classList.contains('removeButton')) {
    const indexToRemove = event.target.getAttribute('data-index');
    toDoList.splice(indexToRemove, 1);
    displayMessages();
}   
});
function displayMessages(){
let displayNewText = "";
toDoList.forEach(function (item, i){
    displayNewText += `
    <li>
        <input type="checkbox" id="item_${i}">
        <label for="item_${i}">${item.listToDo}</label>
        <button class="removeButton" data-index="${i}">Remove</button>
    </li>
    `;
});
listToDo.innerHTML = displayNewText;
}
