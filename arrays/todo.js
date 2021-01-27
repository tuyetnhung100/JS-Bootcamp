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

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1   // returns less than 0, sort a to an index lower than b (i.e. a comes first).
        } else if (!b.completed && a.completed) {
            return 1    // returns greater than 0, sort b to an index lower than a (i.e. b comes first).
        } else {
            return 0    // returns 0, leave a and b unchanged with respect to each other.
        }
    })
}

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

sortTodos(todos)
console.log(todos)
// console.log(getThingsToDo(todos))
// deleteTodo(todos, 'buy food')
// console.log(todos)

