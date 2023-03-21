import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const TreatmentCard = ({ treatment }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const [providerAvg, setProviderAvg] = useState('')
    const [userAvg, setUserAvg] = useState('')

    useEffect(() => {
        calculateAvgs()

    }, [treatment])

    const calculateAvgs = () => {
        const userSum = treatment.userPrices?.reduce((prev,next) => prev + next.price, 0) || 0
        const userCount = treatment.userPrices?.length
        const providerSum = treatment.prices?.reduce((prev,next) => prev + next.price, 0) || 0
        const providerCount = treatment.prices?.length

        const tempUserAvg = userSum !== 0 ? `$${(userSum / userCount).toLocaleString("en", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })}` : '-'
        const tempProviderAvg = providerSum !== 0 ? `$${(providerSum / providerCount).toLocaleString("en", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })}` : '-'

        setUserAvg(tempUserAvg)
        setProviderAvg(tempProviderAvg)
    }

    const handleNavigate = () => {
        navigate(`/treatment/${treatment.identifier}`, { state: { referrer: location.pathname } })
    }

    return (
        <div className="card treatment-card" onClick={() => handleNavigate()}>
            <div className="treatment-card-info">
                <h5 className="gray-strong mb-0">{treatment.name}</h5>
                <p className="gray-middlest mb-0">{treatment.summary}</p>
            </div>
            <div className="treatment-card-prices">
                <div className="treatment-card-stats">
                    <h2>{providerAvg}</h2>
                    <p>Provider-Reported</p>
                </div>
                <div className="treatment-card-stats">
                    <h2>{userAvg}</h2>
                    <p>User-Reported</p>
                </div>
            </div>
        </div>
    )
}

export default TreatmentCard
