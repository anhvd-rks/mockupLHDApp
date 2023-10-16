import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Components/features/userSlice';
import authReducer from './Components/features/authSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    }
})