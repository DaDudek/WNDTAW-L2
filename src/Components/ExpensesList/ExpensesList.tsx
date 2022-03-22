import React, { useState } from "react";
import { v4 } from "uuid";
import IFinancialOperation from "../../types/IFinancialOperation";
import ExpensesForm from "../ExpensesForm/ExpensesForm";
import Expenses from "../Expenses/Expenses";
import './ExpansesList.css';


interface IExpansesListProps {
    addLoss: (amount: number) => void;
}

const ExpensesList = ({addLoss} : IExpansesListProps) => {
    const [expenses, setExpenses] = useState<IFinancialOperation[]>([]);

    const addExpanse = (name: string,
                       amount: number) => {
        setExpenses((prevExpenses) => {
            const newExpenses = [...prevExpenses];
            newExpenses.push({ id: v4(), name, amount: amount });
            return newExpenses;
        });
        addLoss(amount);
    };

    const removeExpanse = (id: string) => {
        setExpenses((prevExpenses) => {
            const removed = prevExpenses.filter((expense) => expense.id === id);
            addLoss(-removed[0].amount);
            return prevExpenses.filter((expense) => expense.id !== id)
        });
    };

    return (
        <div className="ExpansesList">
            <h2>Wydatki</h2>
            <ExpensesForm addExpanse={addExpanse} />
            <Expenses expenses={expenses}
                      removeExpense={removeExpanse} />
        </div>
    );
};

export default ExpensesList;
