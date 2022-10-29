import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./Redux/Store";

import {ModuleRegistry} from "@ag-grid-community/core";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";

ModuleRegistry.registerModules([
    SetFilterModule,
    ClientSideRowModelModule
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
