// --- INCOME DESCRIPTION ---
let incomeDescription = document.getElementById('income-description') //Input
let incomeDescriptionValue = incomeDescription.value // input value
let incomeDescriptionBtn = document.getElementById('income-description-btn') // button
// --- INCOME AMOUNT INCOME
let incomeAmount = document.getElementById('income-amount');
let incomeAmountValue = incomeAmount.value // input value 

// TOTAL INCOME
let totalIncome = document.getElementById('total-income')// input field
let incomeDescriptionList = document.getElementById('income-description-list') // list
let tAmount = 0;
// --EXPENSE DESCRIPTION
let expenseDescription = document.getElementById('expense-description') // input
let expenseDescriptionValue = expenseDescription.value
let expenseDescriptionBtn = document.getElementById('expense-description-btn')//button 
//------
//----- EXPENSE AMOUNT
let expenseAmount = document.getElementById('expense-amount');
let expenseAmountValue = expenseAmount.value

//--- TOTAL EXPENSE 
let totalExpense = document.getElementById('total-expense')
let eAmount = 0;
let expenseDescriptionList = document.getElementById('expense-description-list');

//----- TOTAL BUDGET
let totalBudget = document.getElementById('total-budget')
let totalBudgetValue = totalBudget.value


class Budget {
    constructor() { // This links my properties to my methods
        this.incomeDescription = document.getElementById('income-description');
        this.incomeDescriptionValue = incomeDescription.value
        this.incomeAmount = document.getElementById('income-amount');
        this.incomeAmountValue = incomeAmount.value;
        this.incomeDescriptionList = document.getElementById('income-description-list');
        this.totalIncome = document.getElementById('total-income');
        ///---- expense this below
        this.expenseDescription = document.getElementById('expense-description');
        this.expenseDescriptionValue = expenseDescription.value;
        this.expenseAmount = document.getElementById('expense-amount');
        this.expenseAmountValue = expenseAmount.value;
        this.expenseDescriptionList = document.getElementById('expense-description-list');
        //-- budget this below 
        this.totalBudget = document.getElementById('total-budget');
        this.totalBudgetValue = totalBudget.value;


    } 

    addIncome() {
        let li = document.createElement('li');
        li.innerHTML =  this.incomeDescriptionValue + ' ' + this.incomeAmountValue;
        this.incomeDescriptionList.appendChild(li)
        if (this.incomeDescriptionValue === '') {
            return this.incomeDescription.value = 'INPUTS REQUIRED'
        }
        if (this.incomeAmount.value === ''){
            return this.incomeAmount.value = 'INPUTS REQUIRED'
        }
        
    }

    incomeTotal() {
        let amount = Number(this.incomeAmountValue);
        tAmount = tAmount + amount
        this.totalIncome.value = tAmount
        if(this.totalIncome.value === '0'){
            return this.totalIncome.value = 'INPUTS REQUIRED'
        }
        
    }

    addExpense() {// create li element and adds user input as value
        let liExpense = document.createElement('li');
        liExpense.innerHTML = this.expenseDescriptionValue + ' ' + this.expenseAmountValue;
        this.expenseDescriptionList.appendChild(liExpense)
        if(this.expenseDescription.value === '') {
            return this.expenseDescription.value = 'INPUTS REQUIRED'
        }
        if (this.expenseAmount.value === '') {
            return this.expenseAmount.value = 'INPUTS REQUIRED'
        }
    }

    expenseTotal() {// create li element and adds user input as value
        let amount = Number(this.expenseAmountValue);
        eAmount = eAmount + amount;
        totalExpense.value = eAmount
        if(totalExpense.value === '0' || totalExpense.value === '') {
            return totalExpense.value = 'INPUTS REQUIRED'
        } 
    }

    budgetTotal() {// create li element and adds user input as value
        this.totalBudget.value = tAmount - eAmount;

        if (this.totalBudget.value === '0') {
            return this.totalBudget.value = 'INPUTS REQUIRED'
        } else if (this.totalBudget.value === 'NaN'){
            return this.totalBudget.value = 'FIX VALUES '
        }
        ;
    }

}



function addIncome() { // calls methods
    let incomeBudget = new Budget();
    incomeBudget.addIncome();
    incomeBudget.incomeTotal();
    incomeBudget.budgetTotal()
    console.log('btn works')
}

function addExpense() {//calls methods
    let expenseBudget = new Budget();
    expenseBudget.addExpense();
    expenseBudget.expenseTotal();
    expenseBudget.budgetTotal()
}

incomeDescriptionBtn.addEventListener('click', addIncome)// listens for events
expenseDescriptionBtn.addEventListener('click',addExpense)