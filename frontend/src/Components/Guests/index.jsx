import React from 'react'
import './index.css'

const Guests = ({ nextStep, prevStep, adults, setAdults, children, setChildren, infants, setInfants }) => {
    const Increment = (type) => {
        if (type === 'adults') setAdults(adults + 1)
        if (type === 'children') setChildren(children + 1)
        if (type === 'infants') setInfants(infants + 1)
    }

    const Decrement = (type) => {
        if (type === 'adults' && adults > 1) setAdults(adults - 1)
        if (type === 'children' && children > 0) setChildren(children - 1)
        if (type === 'infants' && infants > 0) setInfants(infants - 1)
    }

    return (
        <div className="guests-container">
            <div className="guests-header">
                <h2>Guests</h2>
                <p>Select your Guests</p>
            </div>

            <div className="guests-card">
                <div className="guest-row">
                    <div className="guest-info">
                        <h3>Adults</h3>
                        <p>Age 13 or above</p>
                    </div>
                    <div className="guest-controls">
                        <button className="control-btn" onClick={() => Decrement('adults')}>-</button>
                        <span className="count">{adults}</span>
                        <button className="control-btn" onClick={() => Increment('adults')}>+</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="guest-row">
                    <div className="guest-info">
                        <h3>Children</h3>
                        <p>Age 2-12</p>
                    </div>
                    <div className="guest-controls">
                        <button className="control-btn" onClick={() => Decrement('children')}>-</button>
                        <span className="count">{children}</span>
                        <button className="control-btn" onClick={() => Increment('children')}>+</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="guest-row">
                    <div className="guest-info">
                        <h3>Infants</h3>
                        <p>Under 2</p>
                    </div>
                    <div className="guest-controls">
                        <button className="control-btn" onClick={() => Decrement('infants')}>-</button>
                        <span className="count">{infants}</span>
                        <button className="control-btn" onClick={() => Increment('infants')}>+</button>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="btn-previous" onClick={prevStep}>Previous</button>
                    <button className="btn-next" onClick={nextStep}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Guests