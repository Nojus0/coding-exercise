import {AppDispatch, RootState} from "@Redux/Store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

/**
 * Hooks for vitest testing, so that vitest can test components with redux slices
 */
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector