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
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) // solution 3 
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    // for this to work, change 'const' filteredTodos above to 'let' 
    // filteredTodos = filteredTodos.filter(function (todo) {
    //     return !filters.hideCompleted || !todo.completed // solution 2 (1 line)
    //     // if (filters.hideCompleted) {   // solution 1 
    //     //     return !todo.completed
    //     // } else {
    //     //     return true
    //     // }
    // })

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

// Listen for input search-text change
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)     // rerender the latest filtered data
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()                      // cancel the default action
    todos.push({                            // push the data onto the todos array
        text: e.target.elements.todoText.value,
        completed: false
    })                     
    renderTodos(todos, filters)             // rerender the app, make sure the latest data shows up
    e.target.elements.todoText.value = ''   // clear the input field value
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked   
    renderTodos(todos, filters)
})