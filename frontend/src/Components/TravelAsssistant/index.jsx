import React from 'react'
import './index.css'

const TravelAssistance = ({ nextStep, prevStep, assist, setAssist, assistType, setAssistType }) => {

    const handleNext = () => {
        nextStep()
    }

    return (
        <div className="travel-container">
            <div className="travel-header">
                <h2>Travel Assistance</h2>
                <p>Select your Travel Assistance</p>
            </div>
            
            <div className="travel-card">
                <div className="checkbox-group">
                    <input 
                        type="checkbox" 
                        id="assist-check"
                        checked={assist} 
                        onChange={(e) => {
                            setAssist(e.target.checked)
                            if (!e.target.checked) setAssistType("")
                        }} 
                    />
                    <label htmlFor="assist-check">Travel Assistance</label>
                </div>
                
                {assist && (
                    <div className="select-group">
                        <label>Travel Assistance</label>
                        <select 
                            value={assistType} 
                            onChange={(e) => setAssistType(e.target.value)}
                        >
                            <option value="" disabled>Select Type</option>
                            <option value="Car">Car</option>
                            <option value="Flight">Flight</option>
                            <option value="Train">Train</option>
                            <option value="Bus">Bus</option>
                        </select>
                    </div>
                )}
                
                <div className="action-buttons">
                    <button className="btn-previous" onClick={prevStep}>Previous</button>
                    <button className="btn-next" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default TravelAssistance