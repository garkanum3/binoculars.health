import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from "@fortawesome/pro-regular-svg-icons";
import dummyTreatments from '../../data/dummyTreatments'
import './Treatment.css'
library.add(faArrowLeft)

const Treatment = () => {
    
    const params = useParams()
    const location = useLocation()

    const [treatment, setTreatment] = useState({})

    useEffect(() => {
        if (params.treatmentName) {
            setTreatment(dummyTreatments.find((t) => t.identifier === params.treatmentName))
        }
    }, [params])

    return (
        <div className="content-container">
            {location.state?.referrer && (
                <Link to={location.state?.referrer} className="link-white mb-2">
                    <FontAwesomeIcon icon={['far', 'arrow-left']} size="1x" />
                    Back
                </Link>
            )}
            <div className="treatment-header">
                <h1 className="white">{treatment.name}</h1>
            </div>
            <div className="card mb-4">
                <h2 className="card-title">Treatment Overview</h2>
                <p className="gray-strong mb-0">{treatment.summary}</p>
            </div>
            <div className="card mb-4">
                <h2 className="card-title mb-0">Provided Price History</h2>
                <p className="gray-middlest">The provided price is the price that the provider reports</p>
                <table className="h-table h-table-light no-hover">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {treatment?.prices?.length > 0 ? (
                            treatment.prices.map((price, i) => (
                                <tr key={`provider-price-${i}`}>
                                    <td>{price.date}</td>
                                    <td>${price.price.toLocaleString()}</td>
                                    <td>{price.hospital}</td>
                                </tr>
                            ))
                        ) : (
                            <div className="table-empty-state">
                                <h4>No Provided Prices</h4>
                                <p>Providers don't seem to be transparent in reporting these prices</p>
                            </div>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="card mb-4">
                <h2 className="card-title mb-0">User Price History</h2>
                <p className="gray-middlest">User prices are submitted by users and represent their amount paid</p>
                <table className="h-table h-table-light no-hover">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {treatment?.userPrices?.length > 0 ? (
                            treatment?.userPrices.map((price, i) => (
                                <tr key={`user-price-${i}`}>
                                    <td>{price.date}</td>
                                    <td>${price.price.toLocaleString()}</td>
                                    <td>{price.hospital}</td>
                                </tr>
                            ))
                        ) : (
                            <div className="table-empty-state">
                                <h4>No User Prices</h4>
                                <p>No one has reported what they paid for this treatment</p>
                            </div>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Treatment
