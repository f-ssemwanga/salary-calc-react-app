
export const ResultCard = ({results}) =>{

    return(
        <div className = "mt-3">
        <h2 className ="text-center">Results</h2>
        <ul className="list-group">
        <li className="list-group-item">Annual Salary: £{results.grossAnnualSalary}</li>
        <li className="list-group-item">Taxable Income: £{results.taxableIncome}</li>
        <li className="list-group-item">Tax Percentage: {results.taxPercentage}%</li>
        <li className="list-group-item">Tax Amount: £{results.taxAmount}</li>
        <li className="list-group-item">Take Home Salary: £{results.takeHomeSalary}</li>
        </ul>
        </div>
    )
}