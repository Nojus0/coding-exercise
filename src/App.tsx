import './App.css'
import {AgGridReact} from "ag-grid-react";
import {useMemo, useRef, useState} from "react";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {useStudentsSlice} from "./Redux/Slices/StudentsSlice";
import ManageStudent from "./Components/ManageStudent";
import {ColDef, ColGroupDef} from "ag-grid-community";
import {useDispatch} from "react-redux";

function App() {

    const StudentsSlice = useStudentsSlice()
    const GridRef = useRef<AgGridReact>(null)
    const Dispatch = useDispatch()
    const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([
        {
            headerName: "",
            checkboxSelection: true,
            headerCheckboxSelection: true,
            pinned: "left",
            width: 50,
            field: "checkboxBtn"
        },
        {field: 'Name'},
        {field: 'Score', filter: 'agNumberColumnFilter'},
        {field: 'Class', filter: true}
    ])

    const defaultColDefs = useMemo(() => ({
        sortable: true,
        filter: true
    }), [])


    console.log("render")
    return (
        <div className="App">

            <div className="grid-container">
                <ManageStudent GridRef={GridRef}/>

                <div className="ag-theme-alpine" style={{height: 400, width: "100%"}}>
                    <AgGridReact
                        ref={GridRef}
                        animateRows={true}
                        rowSelection="multiple"
                        rowData={StudentsSlice.students}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDefs}
                    >
                    </AgGridReact>
                </div>

            </div>
        </div>
    )
}

export default App
