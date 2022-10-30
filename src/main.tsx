import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import {ModuleRegistry} from "@ag-grid-community/core";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {setupStore} from "@Redux/Store";

/**
 * Set-up Ag-Grid Modules,
 * Reduces the bundle size a ton by using modules,
 * instead of importing the whole ag-grid-react and ag-grid-community package
 */
ModuleRegistry.registerModules([
    SetFilterModule,
    ClientSideRowModelModule
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={setupStore()}>
        <App/>
    </Provider>
)
