import {combineReducers, configureStore, PreloadedState} from "@reduxjs/toolkit"
import StudentsReducer from "./Slices/StudentsSlice"

/**
 * Root Reducer
 */
const rootReducer = combineReducers({
    StudentsSlice: StudentsReducer
});

/**
 * Store setup function
 */
export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]