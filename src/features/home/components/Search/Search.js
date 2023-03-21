import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import dummyTreatments from '../../../../data/dummyTreatments';
library.add(faMagnifyingGlass)

const Search = () => {

    const navigate = useNavigate()

    const handleOnSearch = (string, results) => {
        console.log(string, results);
    };

    const handleOnHover = (result) => {
    console.log(result);
    };

    const handleOnSelect = (item) => {
        navigate(`/treatment/${item.identifier}`)
    };

    const handleOnFocus = () => {
    console.log("Focused");
    };

    const handleOnClear = () => {
    console.log("Cleared");
    };

    const formatResult = (item) => {
        return (
          <div className="search-result-wrapper">
            <span className="search-result-span">{item.name}</span>
          </div>
        );
      };

    return (
        <div className="search-container">
            <ReactSearchAutocomplete
                items={dummyTreatments}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                onClear={handleOnClear}
                styling={{ 
                    zIndex: 1,
                    borderRadius: '8px',
                    border: '0px'
                }}
                formatResult={formatResult}
                placeholder="Search for medical condition or treatment..."
                autoFocus
            />
            {/* <input 
                type="text"
                className={`k-input d-inline-block w-100`} 
                placeholder="Search for medical condition or treatment..."
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
            /> */}
            {/* <button
                className="btn btn-primary"
                onClick={() => handleSearch()}
            >
                <FontAwesomeIcon icon={['fal', 'image']} color="#cfcfcf" size="4x" />
            </button> */}
        </div>
    )
}

export default Search 
