import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BrowseMain from '../features/browse/BrowseMain';
import BrowseCategory from '../features/browse/BrowseCategory';

import Home from '../features/home/Home';
import Treatment from '../features/treatment/Treatment';

const PublicRoutes = () => {

    return (
        <Routes>
            <Route path="/categories" element={<BrowseMain />} />
            <Route path="/categories/:categoryName" element={<BrowseCategory />} />
            <Route path="/treatment/:treatmentName" element={<Treatment />} />

            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default PublicRoutes
