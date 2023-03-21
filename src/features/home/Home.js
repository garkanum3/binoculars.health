import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import categories from '../../data/dummyCategories';
import Search from './components/Search/Search';
import './Home.css'
import CategoryCard from '../browse/components/CategoryCard';

const Home = () => {

    return (
        <div className="home-wrapper">
            <div className="home-container">
                <h1 className="mb-3 text-center">Find the cost for any medical treatment</h1>
                <Search />
                <div className="horizontal-separator my-4">or</div>
                <div className="featured-category-header">
                    <h5 className="gray-strong mb-0">Browse Categories</h5>
                    <Link to={'/categories'} className="link">View All</Link>
                </div>
                <div className="featured-category-container">
                    {categories.slice(0,4).map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
