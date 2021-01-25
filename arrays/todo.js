const todos = [{
    text: 'Exercise',
    completed: false 
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Feed the cat',
    completed: true
}, {
    text: 'Buy food',
    completed: false    
}, {
    text: 'Do work',
    completed: true    
}]
// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const deleteTodo = function (todos, todosText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todosText.toLowerCase()
    })

    if(index > -1) {    // if the return index is greater than -1, we know we have a match
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (myTodo, index) {
        return !myTodo.completed    // same as myTodo.completed === false
    })
}

console.log(getThingsToDo(todos))
// deleteTodo(todos, 'buy food')
// console.log(todos)

