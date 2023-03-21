import React from 'react'
import categories from '../../data/dummyCategories'
import CategoryCard from './components/CategoryCard'
import './Browse.css'

const BrowseMain = () => {

    return (
        <div className="content-container">
            <div className="browse-header">
                <h1 className="white mb-0">All Categories</h1>
            </div>
            <div className="browse-categories-wrapper">
                {categories.map((category) => (
                    <CategoryCard category={category} />
                ))}
            </div>
        </div>
    )
}

export default BrowseMain
