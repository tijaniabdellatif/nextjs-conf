"use client";

import store from '../store/store';
import { Provider } from 'react-redux';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const persistor = persistStore(store);

export function ReduxProvider ({children}){

        return <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {children} 
            </PersistGate>
        </Provider>
}