let myAccount = {
    name: 'Nina Hoang',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, incomeAmount) {
    account.income = account.income + incomeAmount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}, $${account.income} in income, $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 2.50)
//let accountSummary = getAccountSummary(myAccount)
//console.log(accountSummary)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))