import styles from './App.module.css'
// import {AgGridReact} from "ag-grid-react";
import {useMemo, useRef, useState} from "react";
import '@ag-grid-community/styles/ag-grid.css';
import {AgGridReact} from "@ag-grid-community/react"
import '@ag-grid-community/styles/ag-theme-alpine.css';
import {setDeleteButtonVisibility, useStudentsSlice} from "./Redux/Slices/StudentsSlice";
import ManageStudent from "./Components/ManageStudent";
import {ColDef, ColGroupDef, SelectionChangedEvent} from "@ag-grid-community/core";
import {useDispatch} from "react-redux";
import {SetFilter} from "@ag-grid-enterprise/set-filter"

function App() {
    const studentSlice = useStudentsSlice()
    const gridRef = useRef<AgGridReact>(null)
    const dispatch = useDispatch()

    const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([
        {
            headerName: "",
            checkboxSelection: true,
            headerCheckboxSelection: true,
            pinned: "left",
            width: 50,
            field: "checkboxBtn"
        },
        {field: "Name", filter: "agTextColumnFilter", menuTabs: ["filterMenuTab"]},
        {field: 'Score', filter: 'agNumberColumnFilter', menuTabs: ["filterMenuTab"]},
        {
            field: 'Class',
            filter: SetFilter,
            menuTabs: ["filterMenuTab"]
        }
    ])

    const defaultColDefs = useMemo(() => ({
        sortable: true,
        filter: true
    }), [])

    function onSelectionChanged(e: SelectionChangedEvent) {
        const rows = e.api.getSelectedRows()
        dispatch(setDeleteButtonVisibility(rows.length > 0))
    }

    return (
        <div className={styles.app}>

            <div className={styles.gridContainer}>
                <ManageStudent GridRef={gridRef}/>

                <div className="ag-theme-alpine" style={{height: 400, width: "100%"}}>
                    <AgGridReact
                        ref={gridRef}
                        onSelectionChanged={onSelectionChanged}
                        animateRows={true}
                        rowSelection="multiple"
                        rowData={studentSlice.students}
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
