import React, { useState } from "react";
import { v4 } from "uuid";
import IFinancialOperation from "../../types/IFinancialOperation";
import Incomes from "../Incomes/Incomes";
import IncomesForm from "../IncomesForm/IncomesForm";
import './IncomeList.css'

interface IIncomeListProps {
    addProfit: (amount: number) => void;
}

const IncomeList = ({addProfit} : IIncomeListProps) => {
    const [incomes, setIncomes] = useState<IFinancialOperation[]>([]);

    const addIncome = (name: string,
                     amount: number) => {
        setIncomes((prevIncomes) => {
            const newIncomes = [...prevIncomes];
            newIncomes.push({ id: v4(), name, amount: amount });
            return newIncomes;
        });
        addProfit(amount);
    };

    const removeIncome = (id: string) => {
        setIncomes((prevIncomes) => {
            const removed = prevIncomes.filter((income) => income.id === id);
            addProfit(-removed[0].amount);
            return prevIncomes.filter((income) => income.id !== id)
        });
    };

    return (
        <div className="IncomeList">
            <h2>Przychody</h2>
            <IncomesForm addIncome={addIncome} />
            <Incomes incomes={incomes}
                     removeIncome={removeIncome} />
        </div>
    );
};

export default IncomeList;
