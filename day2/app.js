const taskNodeList = document.querySelectorAll('.list-item');


Array.from(taskNodeList).forEach(function (taskLi) {

    taskLi.addEventListener('click', function (event) {

        if (event.target.matches('.del-btn')) {
            // Delete buttn clicked

            if (confirm('Are you sure about that?')) {
                //    delete the task

                event.target.parentElement.remove();
            }

        }
        else if (event.target.matches('.list-item :first-child ')) {
            // Task name clicked

            event.target.classList.toggle('mark-done');
        }

    });

})


document.querySelector('form').addEventListener('submit', function (event) {

    event.preventDefault();


});