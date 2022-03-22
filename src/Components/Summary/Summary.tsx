import "./Summary.css"
interface ISummary {
    profit: number;
    summary: number;
    loss: number
}

const Summary = ({profit, summary, loss}: ISummary) => {
    return (
        <div className="Summary">
            <div className="Profit">
                {`Przychody: ${profit}`}
            </div>
            <div className={summary >= 0 ? "Profit" : "Loss"}>
                {`Łącznie ${summary}`}
            </div>
            <div className="Loss">
                {`Wydatki ${loss}`}
            </div>
        </div>
    )
}

export default Summary
