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

// filters (searchText) will change with a new filter input
const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''     // clears the todos div that holds all the previously 
                                                        // rendered todos bc they don't match the filtered todos
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    
    // You have 2 todos left (p element)
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    // Add a p for each filtered todo above (add the filtered todos in)
    filteredTodos.forEach(function(todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl) 
    })
}

renderTodos(todos, filters)

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log('Add a new todo...')
})

// Listen for todo text (input) change
document.querySelector('#input-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})

// Listen for input-search change
document.querySelector('#input-search').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)     // rerender the latest filtered data
})