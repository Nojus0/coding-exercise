import {useMemo, useRef, useState} from "react";
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import {AgGridReact} from "@ag-grid-community/react"
import {setDeleteButtonVisibility, useStudentsSlice,} from "@Redux/Slices/StudentsSlice";
import ManageStudent from "@Components/ManageStudent";
import {ColDef, ColGroupDef, SelectionChangedEvent} from "@ag-grid-community/core";
import {SetFilter} from "@ag-grid-enterprise/set-filter"
import Layout from "@Components/Layout";
import {useAppDispatch, useAppSelector} from "@Redux/Hooks";

function App() {
    const studentSlice = useStudentsSlice()
    const gridRef = useRef<AgGridReact>(null)
    const dispatch = useAppDispatch()

    /**
     * Set-up Column fields and filters.
     */
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
        {field: 'Class', filter: SetFilter, menuTabs: ["filterMenuTab"]}
    ])

    const defaultColDefs = useMemo(() => ({
        sortable: true,
        filter: true
    }), [])

    /**
     * Hide the delete button if not rows are selected
     */
    function onSelectionChanged(e: SelectionChangedEvent) {
        const rows = e.api.getSelectedRows()
        dispatch(setDeleteButtonVisibility(rows.length > 0))
    }

    return (
        <Layout>
            <ManageStudent gridRef={gridRef}/>
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
        </Layout>
    )
}

export default App
