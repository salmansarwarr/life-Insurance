'use client'

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit"
import faqReducer from "./slices/FaqSlice" 
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        faqReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;