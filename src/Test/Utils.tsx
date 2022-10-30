/* eslint-disable import/export */
import {cleanup, render, RenderOptions} from '@testing-library/react'
import {afterEach} from 'vitest'
import {Provider} from "react-redux"
import {AppStore, RootState, setupStore} from "@Redux/Store";
import {PropsWithChildren} from "react";
import {PreloadedState} from "@reduxjs/toolkit";

afterEach(() => {
    cleanup()
})


interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
}

export function renderWithProviders(ui: React.ReactElement, options: ExtendedRenderOptions = {}) {
    const {preloadedState = {}, store = setupStore(preloadedState), ...renderOptions} = options;

    function ProviderWrapper({children}: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }

    return {
        store,
        ...render(ui, {wrapper: ProviderWrapper, ...renderOptions}),
    };
}

export * from '@testing-library/react'
export {default as userEvent} from '@testing-library/user-event'
// override render export
