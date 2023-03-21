import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmptyState from '../../components/EmptyState/EmptyState'
import TreatmentCard from './components/TreatmentCard'
import dummyCategories from '../../data/dummyCategories'
import dummyTreatments from '../../data/dummyTreatments'
import './Browse.css'

const BrowseCategory = () => {

    const params = useParams()
    const location = useLocation()

    const [category, setCategory] = useState({})
    const [treatments, setTreatments] = useState([])

    useEffect(() => {
        if (params.categoryName) {
            const selectedCategory = dummyCategories.find(c => c.identifier === params.categoryName)
            const associatedTreatments = dummyTreatments.filter(t => t.category === selectedCategory.id.toString())
            setCategory(selectedCategory)
            setTreatments(associatedTreatments)
        }
    }, [params])


    return (
        <div className="content-container">
            {location.state?.referrer && (
                <Link to={location.state?.referrer} className="link-white">
                    <FontAwesomeIcon icon="fa-regular fa-arrow-left" />
                    Back
                </Link>
            )}
            <div className="browse-header">
                <h1 className="white mb-0">{category.name}</h1>
                <div className="browse-stats">
                    <h3 className="white">{treatments.length}</h3>
                    <span className="white">Treatments</span>
                </div>
            </div>

            {treatments.length > 0 ? (
                treatments.map((treatment) => (
                    <TreatmentCard treatment={treatment} />
                )) 
            ) : (
                <EmptyState
                    title="No Treatments Found"
                    text="This category doesn't have to seem to have any treatments associated with it"
                />
            )}
        </div>
    )
}

export default BrowseCategory
