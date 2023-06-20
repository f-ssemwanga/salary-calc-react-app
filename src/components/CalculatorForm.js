// import { toHaveStyle } from "@testing-library/jest-dom/matchers"
import { useState } from "react"
export const CalculatorForm = ({calculate}) =>{

     //define states for the taxyear and the gross income
     const [taxYear, setTaxYear] = useState("2021/2022")
     const  [grossAnnualSalary, setGrossAnnualSalary] = useState("")
     const [error, setError] = useState("")
  
     //handler functions
     const handleOnChangeTaxYear = (e) =>{
         setTaxYear(e.currentTarget.value)
         }
 
     const handleOnChangeGrossSalary = (e) =>{
         setGrossAnnualSalary(e.currentTarget.value)
         setError("")
         // console.log('handle change gross salary')
        
     }
 
     const handleOnSubmit = (e) =>{
         e.preventDefault()
         // validate the gross salary i.e. if it is truthy/exists
         if(grossAnnualSalary && grossAnnualSalary>0){
             setError("")
             console.log(grossAnnualSalary)
             calculate(taxYear,grossAnnualSalary)
             
         }else{
             // handle error
             setError("Please! Enter your Annual Gross Salary")
         }
     }
        

    return(
    <>
     <div className="border p-3">
            <form onSubmit={handleOnSubmit}>
                <div className="m-3">
                <label htmlFor="taxYear" className="form-label">Select Tax Year</label>
                <select 
                    className="form-select" 
                    id="taxYear" 
                    aria-label="Select Tax Year"
                    //
                    value={taxYear}
                    onChange={handleOnChangeTaxYear}
                    >
                    <option value="2021/2022">2021/2022</option>
                    <option value="2022/2023">2022/2023</option>
                </select>          
                </div>
                <div className ="m-3"> 
                <label htmlFor="grossSalary" 
                className="form-label">
                    Gross Annual Salary</label>
                    <input 
                        type="number" 
                        className="form-control"
                        id="grossSalary"       
                        aria-describedby="gross annual salary"
                        placeholder="Enter your gross" 
                        value={grossAnnualSalary}
                        onChange={handleOnChangeGrossSalary}   
                        />
                </div>
                {/* conditional rendering of the error div */}
                {error &&(
                       <div id="grossSalaryError" className="m-3 text-danger">
                       {error}
                   </div>
                )}
            
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary ms-3 " type="submit">Calculate</button>
                </div>
            </form>
        </div>
    </>
    )
}