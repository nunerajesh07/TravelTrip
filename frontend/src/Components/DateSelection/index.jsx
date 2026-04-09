import React, { useState } from 'react'
import './index.css'

const DateSelection = ({ nextStep, prevStep, startDate, setStartDate, endDate, setEndDate }) => {
    const [startDateErr, setStartDateErr] = useState("")
    const [endDateErr, setEndDateErr] = useState("")

    const PrevStep = () => {
        setStartDateErr(startDate ? "" : "Please select start date")
        setEndDateErr(endDate ? "" : "Please select end date")

        if (startDate && endDate) {
            prevStep()
        }
    }
    
    const NextStep = () => {
        setStartDateErr(startDate ? "" : "Please select start date")
        setEndDateErr(endDate ? "" : "Please select end date")

        if (startDate && endDate) {
            nextStep()
        }
    }
    
    return (
        <div className="date-container">
            <div className="date-header">
                <h2>Date Selection</h2>
                <p>Select your Start and End Date</p>
            </div>
            
            <div className="date-card">
                <div className="input-group">
                    <label>Start Date</label>
                    <input 
                        type="date" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                    />
                    {startDateErr && <p className="error-message">{startDateErr}</p>}
                </div>
                
                <div className="input-group">
                    <label>End Date</label>
                    <input 
                        type="date" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                    />
                    {endDateErr && <p className="error-message">{endDateErr}</p>}
                </div>
                
                <div className="action-buttons">
                    <button className="btn-previous" onClick={PrevStep}>Previous</button>
                    <button className="btn-next" onClick={NextStep}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default DateSelection