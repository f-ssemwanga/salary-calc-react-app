
import {useState} from "react"
import {CalculatorForm} from "./CalculatorForm"
import { ResultCard } from "./ResultCard"

export const Calculator = () =>{
    const [results, setResults] = useState()

    // to pass results from the calculatorForm i.e. child component of calculator
    //Pass this function as a prop to the calc form
    //while in the form pass it the taxYear and GrossAnnualSalary
    //prep the calculator function to accept the two variables from the form
    const calculate = (taxYear, grossAnnualSalary) =>{
       console.log(grossAnnualSalary);
       console.log(taxYear);
       
       
    // Calculations

    //deduct personal tax allowange from gross annual salary
    const taxableIncome = grossAnnualSalary - 12500;
        
    // get the tax percentage
    const taxPercentage =40;

    //calculate the tax applied
    const taxAmount = (taxPercentage* taxableIncome)/100;
    
    // Take home salary
    const takeHomeSalary = grossAnnualSalary - taxAmount;
    
    //set results as an object so it can be passed down to the Results card as a prop
    setResults({
        grossAnnualSalary,
        taxableIncome,
        taxPercentage,
        taxAmount,
        takeHomeSalary});
    };


    return(
        <div className="border p-3">
          <CalculatorForm calculate={calculate}/>
          {/* conditionally render the results card based on a truthy results state */}
          {results && <ResultCard results = {results}/>}
        </div>
    )
}