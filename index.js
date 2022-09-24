// Created Task Array 
var createdTaskArray = []

// Completed Task Array
var completedTaskArray = []

// Add Task to create task array
function addTask() {
    var taskText = document.getElementById('taskText').value

    // add task into array 
    if(taskText.length < 1) {
        alert("Please fill task")
    } else {
        createdTaskArray.push(taskText)
        document.getElementById('created').innerHTML = ""
    }

    showCreatedTask(createdTaskArray)
    document.getElementById('taskText').value = ""
}

// Show created task in created task box 
function showCreatedTask(createdTaskArray) {
    var createdField = document.getElementById('created')

    createdTaskArray.forEach((element, index) => {
        var div = document.createElement('div')
        div.setAttribute('class', 'todotext')

        var textForCreatedField = `
                    <p>${element}</p>
                    <input type="checkbox" placeholder="Task" onclick="addCompletedTask(${index})" >
            `
        div.innerHTML = textForCreatedField
        createdField.append(div)
    });

}

// Mark task as completed
function addCompletedTask(index) {

    completedTaskArray.push(createdTaskArray[index])

    createdTaskArray.splice(index, 1)
    document.getElementById('created').innerHTML = ""

    document.getElementById('completed').innerHTML = ""
    showCreatedTask(createdTaskArray)

    showCompletedTask(completedTaskArray)

}

// Delete completed Task 
function deleteTask(index) {

    completedTaskArray.splice(index, 1)

    document.getElementById('completed').innerHTML = ""
    showCompletedTask(completedTaskArray)
}

// Restore Task to uncomplete box
function restoreTask(index) {
    document.getElementById('created').innerHTML = ""
    createdTaskArray.push(completedTaskArray[index])

    deleteTask(index)

    showCreatedTask(createdTaskArray)
}

// Show completed task in completed task box
function showCompletedTask(completedTaskArray) {
    var createdField = document.getElementById('completed')

    completedTaskArray.forEach((element, index) => {

        var div = document.createElement('div')
        div.setAttribute('class', 'todotext')

        var textForCompletedField = `
                    <p>${element}</p>
                    <button class="deleteButton" onclick="deleteTask(${index})">Delete Task</button>
                    <button class="restoreButton" onclick="restoreTask(${index})">Mark as uncomplete</button>
            `
        div.innerHTML = textForCompletedField

        createdField.append(div)
    });

}
