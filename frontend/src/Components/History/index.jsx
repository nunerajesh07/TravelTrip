import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Cookies from 'js-cookie'
import './index.css'

const History = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetchTrips();
    }, []);

    const fetchTrips = async () => {
        try {
            const token = Cookies.get('jwt_token');
            const response = await fetch("http://localhost:5000/api/trips", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (response.ok && data.success) {
                setTrips(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch history", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const token = Cookies.get('jwt_token');
            const response = await fetch(`http://localhost:5000/api/trips/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (response.ok && data.success) {
                setTrips(trips.filter(trip => trip._id !== id));
            } else {
                alert(data.message || "Failed to delete trip");
            }
        } catch(error) {
            console.error("Error deleting trip", error);
        }
    }

    const renderHistory = () => {
        if (trips.length === 0) {
            return (
                <div className="no-trips" style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h2>No trip history found.</h2>
                    <p>When you book trips, they will appear here.</p>
                </div>
            )
        }
        else {
            return (
                <div className="trips-list">
                    {trips.map((trip) => (
                        <div key={trip._id} className="trip-list-item">
                            <h3 className="trip-destination">{trip.destination}</h3>

                            <div className="trip-date-info">
                                <span className="date-label">Dates:</span>
                                <span className="date-value">{trip.startDate} to {trip.endDate}</span>
                            </div>
                            
                            <div className="trip-details" style={{ marginTop: '10px' }}>
                                <p><strong>Guests:</strong> {trip.guests?.join(', ')}</p>
                                <p><strong>Status:</strong> <span style={{ color: trip.status === 'booked' ? 'green' : 'gray' }}>{trip.status?.toUpperCase()}</span></p>
                            </div>

                            <button
                                className="btn-cancel"
                                onClick={() => handleDelete(trip._id)}
                                style={{ marginTop: '15px' }}
                            >
                                Delete Record
                            </button>
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className="my-trips-page">
            <Navbar />
            <div className="my-trips-container">
                <h1 className="my-trips-title">Trip History</h1>
                {renderHistory()}
            </div>
        </div>
    )
}

export default History
