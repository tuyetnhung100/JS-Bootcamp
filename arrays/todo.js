const todos = [ {
    text: 'Eat breakfast',
    completed: true
}, {
    text: 'Feed the cat',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do laundry',
    completed: false
} ]

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const deleteTodo = function (myTodos, todosText) {
    const todosIndex = todos.findIndex( function (todo) {
        return todo.text.toLowerCase() === todosText.toLowerCase()
    })

    if (todosIndex > -1) {
        todos.splice(todosIndex, 1)
    }
}

deleteTodo(todos, 'buy food')
console.log(todos)

