import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Cookies from 'js-cookie'
import './index.css'

const MyTrips = () => {
    const [trips, setTrips] = useState([]);
    const [editingTrip, setEditingTrip] = useState(null)
    const [editFormData, setEditFormData] = useState({ destination: '', startDate: '', endDate: '', guests: 1 })

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
            console.error("Failed to fetch trips", error);
        }
    };

    const handleCancel = async (id) => {
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
                const updatedTrips = trips.filter(trip => trip._id !== id);
                setTrips(updatedTrips);
            } else {
                alert(data.message || "Failed to cancel trip");
            }
        } catch(error) {
            console.error("Error cancelling trip", error);
        }
    }

    const handleEditClick = (trip) => {
        setEditingTrip(trip._id)
        setEditFormData({
            destination: trip.destination,
            startDate: trip.startDate,
            endDate: trip.endDate,
            guests: trip.guests && trip.guests.length > 0 ? trip.guests[0] : 1
        })
    }

    const handleEditChange = (e) => {
        setEditFormData({ ...editFormData, [e.target.name]: e.target.value })
    }

    const handleUpdate = async (e, id) => {
        e.preventDefault();
        try {
            const token = Cookies.get('jwt_token');
            const payload = {
                 destination: editFormData.destination,
                 startDate: editFormData.startDate,
                 endDate: editFormData.endDate,
                 guests: [editFormData.guests]
            }

            const response = await fetch(`http://localhost:5000/api/trips/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (response.ok && data.success) {
                setEditingTrip(null)
                fetchTrips()
            } else {
                alert(data.message || "Failed to update trip");
            }
        } catch(error) {
            console.error("Error updating trip", error);
        }
    }

    const renderTrip = () => {
        if (trips.length === 0) {
            return (
                <div className="no-trips">
                    <img
                        src="https://res.cloudinary.com/dszpqatp5/image/upload/v1773207441/Frame_1000003896_ru6kfm.png"
                        alt="no trips"
                        className="no-trips-img"
                    />
                    <h2>No upcoming trips.</h2>
                    <p>When you book a trip, you will see your itinerary here.</p>
                    <a href="/book-new-trip" className="book-link">Book a new trip</a>
                </div>
            )
        }
        else {
            return (
                <div className="trips-list">
                    {trips.map((trip) => {
                        if (editingTrip === trip._id) {
                            return (
                                <form key={trip._id} className="trip-list-item edit-form" onSubmit={(e) => handleUpdate(e, trip._id)}>
                                    <div className="input-group">
                                        <label>Destination:</label>
                                        <input type="text" name="destination" value={editFormData.destination} onChange={handleEditChange} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Start Date:</label>
                                        <input type="date" name="startDate" value={editFormData.startDate} onChange={handleEditChange} required />
                                    </div>
                                    <div className="input-group">
                                        <label>End Date:</label>
                                        <input type="date" name="endDate" value={editFormData.endDate} onChange={handleEditChange} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Guests:</label>
                                        <input type="number" name="guests" min="1" value={editFormData.guests} onChange={handleEditChange} required />
                                    </div>
                                    <div className="action-buttons-edit">
                                        <button type="button" className="btn-cancel" onClick={() => setEditingTrip(null)}>Cancel Edit</button>
                                        <button type="submit" className="btn-save">Save Trip</button>
                                    </div>
                                </form>
                            )
                        }

                        return (
                            <div key={trip._id} className="trip-list-item">
                                <h3 className="trip-destination">{trip.destination}</h3>

                                <div className="trip-date-info">
                                    <span className="date-label">Date</span>
                                    <span className="date-value">{trip.startDate} to {trip.endDate}</span>
                                </div>
                                <div className="trip-guests-info">
                                    <span className="date-label">Guests: {trip.guests?.join(', ')}</span>
                                </div>

                                <div className="action-buttons-trip">
                                    <button
                                        className="btn-edit"
                                        style={{ marginRight: '10px', backgroundColor: '#e0a800', border: 'none', padding: '8px 16px', borderRadius:'4px', color:'white', cursor:'pointer' }}
                                        onClick={() => handleEditClick(trip)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn-cancel"
                                        onClick={() => handleCancel(trip._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    return (
        <div className="my-trips-page">
            <Navbar />
            <div className="my-trips-container">
                <h1 className="my-trips-title">My Trips</h1>
                {renderTrip()}
            </div>
        </div>
    )
}

export default MyTrips