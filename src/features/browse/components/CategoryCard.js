import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CategoryCard = ({ category }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleCategorySelection = (selected) => {
        navigate(`/categories/${selected.identifier}`, { state: { referrer: location.pathname }})
    }

    return (
        <div className="category-card" onClick={() => handleCategorySelection(category)}>
            <img src={category.image} alt={category.name} />
            <h5>{category.name}</h5>
        </div>
    )
}

export default CategoryCard
