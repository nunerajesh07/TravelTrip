import React, { useState } from 'react'
import './index.css'

const YourDetails = ({ nextStep, name, setName, startLocation, setStartLocation, endLocation, setEndLocation }) => {
    const [nameErr, setNameErr] = useState("")
    const [startLocationErr, setstartLocationErr] = useState("")
    const [endLocationErr, setEndLocationErr] = useState("")

    const NextBtn = () => {
        setNameErr(name ? "" : "Please enter your name")
        setstartLocationErr(startLocation ? "" : "Please enter your start location")
        setEndLocationErr(endLocation ? "" : "Please enter your end location")

        if (name && startLocation && endLocation) {
            nextStep()
        }
    }
    
    return (
        <div className="details-container">
            <div className="details-header">
                <h2>Your Details</h2>
                <p>Enter your name and location details</p>
            </div>
            
            <div className="details-card">
                <div className="input-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameErr && <p className="error-message">{nameErr}</p>}
                </div>
                
                <div className="input-group">
                    <label>Start Location</label>
                    <input
                        type="text"
                        placeholder="Enter start location"
                        value={startLocation}
                        onChange={(e) => setStartLocation(e.target.value)}
                    />
                    {startLocationErr && <p className="error-message">{startLocationErr}</p>}
                </div>

                <div className="input-group">
                    <label>End Location</label>
                    <input
                        type="text"
                        placeholder="Enter end location"
                        value={endLocation}
                        onChange={(e) => setEndLocation(e.target.value)}
                    />
                    {endLocationErr && <p className="error-message">{endLocationErr}</p>}
                </div>
                
                <div className="action-buttons">
                    <button className="btn-next" onClick={NextBtn}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default YourDetails