
export const Calculator = () =>{

    return(
        <div className="border p-2">
            <div className="m-3">
            <label htmlFor="selectTaxYear" className="form-label">Select Tax Year</label>
            <select 
                className="form-select" 
                id="selectTaxYear" 
                aria-label="Select Tax Year"
                value="2021/2022"
                >
                <option value="2021/2022">2021/2022</option>
                <option value="2022/2023">2022/2023</option>
             </select>          
            </div>
            <div> 
               <label htmlFor="grossSalary" 
               className="form-label ms-3 mb-0 ">Gross Annual Salary</label>
                <input 
                    type="number" 
                    className="form-control m-3"
                    id="grossSalary" 
                    placeholder="Enter your gross"               
                    aria-describedby="gross annual salary"/>
            </div>
            <div id="grossSalaryError" className="m-3 text-danger">Please enter your gross annual salary</div>
        
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary ms-3" type="submit">Calculate</button>
            </div>
        </div>
    )
}