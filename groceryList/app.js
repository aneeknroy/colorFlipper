// // Set Initial Count
// let numOfTasks = 0;

// // Set Grocery List
// const groceryList = []

// // Select Value and Buttons
// const task = document.querySelector('#task');
// const btn = document.querySelectorAll('.btn')


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('groceryForm');
    const itemList = document.getElementById('itemList')

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const itemInput = document.getElementById('item');
        const itemValue = itemInput.value.trim();
        if (itemValue !== ''){
            addItem(itemValue);
            itemInput.value = '';
        }
    });

    function addItem(item) {
        const li = document.createElement('li');
        li.textContent = item;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button'); // Add this line to add the class
        deleteButton.addEventListener('click', function() {
            itemList.removeChild(li);
        });
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    }   

});