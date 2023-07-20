"use client";

import { Faq } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface State {
    faqs: Faq[];
    faq: Faq | null;
}

const initialState: State = {
    faqs: [],
    faq: null,
};

export const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        getAll: (state, action) => { state.faqs = action.payload }
    }
})

export const {getAll} = faqSlice.actions;
export default faqSlice.reducer;
