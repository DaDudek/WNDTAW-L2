import React, { useState } from "react";

interface IIncomeFormProps {
    addIncome: (name: string,
                amount: number) => void;
}

const IncomesForm = ({ addIncome }: IIncomeFormProps) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);

    const onClick = () => {
        addIncome(name, amount);
    };

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    };

    const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAmount(+e.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={onNameChange} />
            <input type="number" value={amount} onChange={onAmountChange} />
            <button onClick={onClick} className="Button Add-Button">Add</button>
        </div>
    );
};

export default IncomesForm;
