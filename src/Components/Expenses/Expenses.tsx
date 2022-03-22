import React from "react";
import IFinancialOperation from "../../types/IFinancialOperation";
import FinancialOperation from "../FinancialOperation/FinancialOperation";

interface ExpensesProps{
    expenses: IFinancialOperation[];
    removeExpense: (id: string) => void;
}

const Expenses = ({ expenses, removeExpense }: ExpensesProps) => {
    return (
        <div>
            {expenses.map((expense) => (
                <FinancialOperation key={expense.id}
                                    financialOperation={expense}
                                    removeFinancialOperation={removeExpense} />
            ))}
        </div>
    );
};

export default Expenses;
