

        const taskInput = document.getElementById('taskInput');

        taskInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                const newTask = document.createElement('ul');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                newTask.appendChild(checkbox);
                const taskLabel = document.createElement('label');
                taskLabel.textContent = taskText;
                newTask.appendChild(taskLabel);
                todolist.appendChild(newTask);

                checkbox.addEventListener('change', function() {
                    if (checkbox.checked) {
                        newTask.classList.add('done');
                    } else {
                        newTask.classList.remove('done');
                    }
                });

                taskInput.value = '';
            }
}
