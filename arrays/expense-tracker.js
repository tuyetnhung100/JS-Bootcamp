const account = {
    name: 'Nina Hoang',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        const item = {
            description: description, 
            amount: amount
        }
        this.expenses.push(item)
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    // total up all expenses
    getAccountSummary: function () {
        let totalExpense = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (element) {
            totalExpense += element.amount
        })

        this.income.forEach(function (element) {
            totalIncome += element.amount
        })

        accountBalance = totalIncome - totalExpense
        
        return `${account.name} has a balance of $${accountBalance}. $${totalIncome} (${totalIncome * 75}rub.) in income. $${totalExpense} (${totalExpense * 75}rub.) in expenses.`
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
account.addIncome('Job', 470)
console.log('---------------------------------------------')
console.log(account.getAccountSummary())
