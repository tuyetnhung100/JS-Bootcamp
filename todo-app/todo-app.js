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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

// You have 2 todos left (p element)
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

// Add a p for each todo above (use text value)
todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

