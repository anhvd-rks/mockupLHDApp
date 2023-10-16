import { createSlice } from "@reduxjs/toolkit";

interface checkAuth {
    username: string,
    email: string,
    loggedIn: boolean
}

const initialState: checkAuth = {
    username: '',
    email: '',
    loggedIn: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers:{
        authen: (state, action) => {
            state = action.payload
        }
    }
})

export const {authen} = authSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default authSlice.reducer;