import {configureStore} from "@reduxjs/toolkit"
import StudentsReducer from "./Slices/StudentsSlice"

export const store = configureStore({
    reducer: {
        StudentsSlice: StudentsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch