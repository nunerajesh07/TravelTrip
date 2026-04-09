import React from 'react'
import './index.css'

const StepSidebar = ({ step }) => {
    const stepsList = [
        { id: 1, label: 'Your Details' },
        { id: 2, label: 'Date Selection' },
        { id: 3, label: 'Guests' },
        { id: 4, label: 'Travel Assistance' },
        { id: 5, label: 'Confirmation' }
    ]

    return (
        <div className="sidebar-container">
            {stepsList.map((s) => {
                const isActive = s.id === step;
                const isCompleted = s.id < step;

                return (
                    <div key={s.id} className={`sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                        <div className="step-circle">
                            {isCompleted ? '✓' : s.id}
                        </div>
                        <span className="step-label">{s.label}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default StepSidebar