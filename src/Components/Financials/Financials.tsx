import IncomeList from "../IncomeList/IncomeList";
import ExpensesList from "../ExpensesList/ExpensesList";
import {useEffect, useState} from "react";
import './Financials.css';
import Summary from "../Summary/Summary";

const Financials = () => {
    const [profit, setProfit] = useState(0)
    const [loss, setLoss] = useState(0)
    const [summary, setSummary]= useState(0);

    useEffect(() => {
        setSummary(profit - loss)
    },[profit, loss])

    const addProfit = (amount : number) => {
        setProfit((prevAmount) => {
            return prevAmount + amount;
        });
    }

    const addLoss = (amount : number) => {
        setLoss((prevLoss) => {
            return prevLoss + amount;
        });
    }

    return (
        <div>
            <div className="Financials">
                <IncomeList addProfit={addProfit}/>
                <ExpensesList addLoss={addLoss}/>
            </div>
            <div className="Financials">
                <Summary profit={profit}
                         summary={summary}
                         loss={loss} />
            </div>
        </div>
    )
}

export default Financials;
