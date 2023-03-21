import React from 'react'
import './EmptyState.css'

const EmptyState = ({ image, title, text }) => (
    <div className="empty-state-container">
        {image && (<img src={image} alt={title} />)}
        <h4 className="gray-strong mb-0">{title}</h4>
        <p className="gray-middlest">{text}</p>
    </div>
)

export default EmptyState
