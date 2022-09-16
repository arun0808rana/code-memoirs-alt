import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (
            state,
            { payload: { user, token } }
        ) => {
            state.user = user;
            state.token = token;
        }
    },
    extraReducers: (builder) => { }
});

export const { setCredentials } = loginSlice.actions;

export const selectCurrentUser = (state) => state?.login?.user;