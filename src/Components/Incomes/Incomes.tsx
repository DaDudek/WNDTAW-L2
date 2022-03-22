import React from "react";
import IFinancialOperation from "../../types/IFinancialOperation";
import FinancialOperation from "../FinancialOperation/FinancialOperation";

interface IncomesProps{
    incomes: IFinancialOperation[];
    removeIncome: (id: string) => void;
}

const Incomes = ({ incomes, removeIncome }: IncomesProps) => {
    return (
        <div>
            {incomes.map((income) => (
                <FinancialOperation key={income.id}
                                    financialOperation={income}
                                    removeFinancialOperation={removeIncome} />
            ))}
        </div>
    );
};

export default Incomes;
