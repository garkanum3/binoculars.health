import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/styles.css"
import "./assets/css/text.css"
import "./assets/css/forms.css"
import "./assets/css/tables.css"
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navigation/components/Navbar/Navbar';
import PublicRoutes from './navigation/PublicRoutes';

const App = () => {
    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <Navbar />
                <div className="content-wrapper">
                    <PublicRoutes />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
