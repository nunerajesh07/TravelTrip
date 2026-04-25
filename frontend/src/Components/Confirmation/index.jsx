import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import API_BASE_URL from '../../config'


const Confirmation = ({ prevStep, name, startLocation, endLocation, startDate, endDate, guests, assistType }) => {
    const navigate = useNavigate();

    const handleConfirm = async () => {
        const payload = {
            destination: endLocation,
            startDate,
            endDate,
            guests: [guests],
            userDetails: { name }
        };

        const token = Cookies.get('jwt_token');

        try {
            const response = await fetch(`${API_BASE_URL}/api/trips`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            if (response.ok && data.success) {
                navigate('/my-trips');
            } else {
                alert(data.message || 'Failed to book trip');
            }
        } catch (error) {
            console.error('Error booking trip', error);
            alert('Error booking trip');
        }
    }

    return (
        <div className="confirm-container">
            <div className="confirm-header">
                <h2>Confirmation</h2>
                <p>Confirm your details</p>
            </div>
            
            <div className="confirm-card">
                <div className="confirm-row">
                    <span className="confirm-label">Name:</span>
                    <span className="confirm-value">{name}</span>
                </div>
                
                <div className="confirm-row">
                    <span className="confirm-label">Start Location:</span>
                    <span className="confirm-value">{startLocation}</span>
                </div>
                
                <div className="confirm-row">
                    <span className="confirm-label">End Location:</span>
                    <span className="confirm-value">{endLocation}</span>
                </div>
                
                <div className="confirm-row">
                    <span className="confirm-label">Start Date:</span>
                    <span className="confirm-value">{startDate}</span>
                </div>
                
                <div className="confirm-row">
                    <span className="confirm-label">End Date:</span>
                    <span className="confirm-value">{endDate}</span>
                </div>
                
                <div className="confirm-row">
                    <span className="confirm-label">Guests:</span>
                    <span className="confirm-value">{guests}</span>
                </div>
                
                <div className="confirm-row">
                    <span className="confirm-label">Travel Assistance:</span>
                    <span className="confirm-value">{assistType || 'None'}</span>
                </div>
                
                <div className="action-buttons">
                    <button className="btn-previous" onClick={prevStep}>Cancel</button>
                    <button className="btn-next" onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation