import React from "react";
import IFinancialOperation from "../../types/IFinancialOperation";
import "./FinancialOperation.css"


interface IFinancialOperationProps {
    financialOperation: IFinancialOperation;
    removeFinancialOperation: (id: string) => void;
}

const FinancialOperation = ({ financialOperation, removeFinancialOperation }: IFinancialOperationProps) => {
    const onClick = () => {
        removeFinancialOperation(financialOperation.id);
    };

    return (
        <div className="Financial-Operation">
            <div className="Financial-Operation-Paragraph">
                {`${financialOperation.name} ${financialOperation.amount}`}
            </div>
            <div className="Financial-Operation-Paragraph">
                <button onClick={onClick}
                        className='Button Remove-Button'>Remove</button>
            </div>
        </div>
    );
};

export default FinancialOperation;
