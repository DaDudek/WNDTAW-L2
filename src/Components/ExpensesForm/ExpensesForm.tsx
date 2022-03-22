import React, { useState } from "react";

interface IExpanseFormProps {
    addExpanse: (name: string,
                amount: number) => void;
}

const ExpensesForm = ({ addExpanse }: IExpanseFormProps) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);

    const onClick = () => {
        addExpanse(name, amount);
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

export default ExpensesForm;
