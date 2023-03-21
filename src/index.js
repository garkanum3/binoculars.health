import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import mixpanel from "mixpanel-browser";
import { Spinner } from 'react-bootstrap'

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers/rootReducer";
import reduxPromise from "redux-promise";
import reduxThunk from 'redux-thunk'

// Redux-persist stuff
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { PersistGate } from "redux-persist/lib/integration/react";

const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    blacklist: [
        "companyQuickApplyData",
        "newKpiData",
        "siteModal",
        "currentEntityType",
        "messages",
        "updateManagingEntityInLeftRail",
        "contacts",
        "dataRoomAccess",
        "siteRefs",
        "genericRightRail",
        "notificationCount",
    ],
};

const pReducer = persistReducer(persistConfig, reducers);
const middleware = applyMiddleware(reduxPromise, reduxThunk);
const theStore = middleware(createStore);
const theStoreWithMiddlewareAndReducers = theStore(pReducer);
const persistor = persistStore(theStoreWithMiddlewareAndReducers);

// Initialize Mixpanel
const mixpanelDev = "a31c5a195dedf9827f448d18d81635c7";
const mixpanelProd = "87a01665a63f086a14868bb869eaa614";
mixpanel.init(window.env === "prod" ? mixpanelProd : mixpanelDev);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={theStoreWithMiddlewareAndReducers}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </PersistGate>
    </Provider>
);
