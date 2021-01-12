const taskArray = [];
const ULlist = document.querySelector('.list ul');

function updateTaskArray({ index, action }) {
    if (action === 'del') {

        taskArray.splice(index, 1);

    } else {
        taskArray[index].isDone = !taskArray[index].isDone;
    }

    // console.log(taskArray);
    renderUI();
}


function attachEventHandlers() {
    const taskNodeList = document.querySelectorAll('.list-item');

    Array.from(taskNodeList).forEach(function (taskLi) {

        taskLi.addEventListener('click', function (event) {

            if (event.target.matches('.del-btn')) {
                // Delete buttn clicked

                if (confirm('Are you sure about that?')) {
                    //    delete the task

                    updateTaskArray({
                        index: event.target.parentElement.dataset.li,
                        action: 'del'
                    });

                    // event.target.parentElement.remove();
                }

            }
            else if (event.target.matches('.list-item :first-child ')) {
                // Task name clicked

                updateTaskArray({
                    index: event.target.parentElement.dataset.li,
                    action: 'mod'
                });

                // event.target.classList.toggle('mark-done');
            }

        });

    })
}


function renderUI() {
    let listContentStr = '';

    taskArray.forEach(function (value, index) {
        listContentStr += `
        
                <li class="list-item" data-li="${index}">
                    <span class="${value.isDone ? 'mark-done' : ''}">${value.name}</span>
                    <span class="del-btn">&times; </span>
                </li>
        
        `;
    });

    ULlist.innerHTML = listContentStr;
    attachEventHandlers();
}


function addTask(event) {
    event.preventDefault();

    const taskValue = document.querySelector('input[type="text"]').value.trim();

    if (taskValue === '') {
        alert('Please add a task');
        return;
    }

    taskArray.push({
        name: taskValue,
        isDone: false
    });

    renderUI();
}


document.querySelector('form a').addEventListener('click', function (event) {
    addTask(event);
});

document.querySelector('form').addEventListener('submit', function (event) {
    addTask(event);
});
