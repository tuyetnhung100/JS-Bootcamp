const account = {
    name: 'Nina Hoang',
    expenses: [],
    addExpense: function (description, amount) {
        const item = {
            description: description, 
            amount: amount
        }
        this.expenses.push(item)
    },
    // total up all expenses
    getAccountSummary: function () {
        let sum = 0
        this.expenses.forEach(function (element) {
            sum += element.amount
        })
        return `Nina Hoang has $${sum} (${sum * 75}rub.) in expenses`
    },
    sortExpense: function (expenses) {
        this.expenses.sort((a, b) => b.amount - a.amount) // descending order (largest to smallest sort)
    }
}

account.addExpense('Rent', 400)
account.addExpense('Food', 68)
account.addExpense('Boba tea', 21)
account.addExpense('Wifi', 10)
account.addExpense('Phone', 7)
account.addExpense('Pet', 5)
account.addExpense('Shopping', 74)
account.sortExpense(account.expenses)
console.log(account.expenses)
console.log('---------------------------------------------')
console.log(account.getAccountSummary())
