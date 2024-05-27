"use strict";
/*Create a 'to-do list' array of objects where each object has properties task and completed
(a boolean). Write a function to log only the tasks that are not yet completed.*/
function yetToDo(array) {
    let obj = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]["completed"] === false) {
            obj.push({
                id: array[i].id,
                task: array[i].task,
                dueDate: array[i].dueDate,
                completed: array[i].completed
            });
        }
    }
    return obj;
}
let to_do_list = [
    {
        id: '1',
        task: 'Task 1',
        dueDate: '24/05/24',
        completed: false
    },
    {
        id: '2',
        task: 'Task 2',
        dueDate: '25/05/24',
        completed: true
    },
    {
        id: '3',
        task: 'Task 3',
        dueDate: '14/06/24',
        completed: true
    },
    {
        id: '4',
        task: 'Task 4',
        dueDate: '30/05/24',
        completed: false
    },
    {
        id: '5',
        task: 'Task 5',
        dueDate: '23/05/24',
        completed: true
    }
];
console.log("Tasks that are yet to do are:", yetToDo(to_do_list));
