import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {

    const saveExpeneseDataHander = (enteredExpensesData) => {
        const expenseData = {
            ...enteredExpensesData,
            id : Math.random().toString() 
        } ;
        props.onAddExpense(expenseData) ;
    } ;

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpeneseData = {saveExpeneseDataHander} />
        </div>
    ) ;
} ;

export default NewExpense ;