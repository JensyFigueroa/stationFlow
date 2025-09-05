import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  userRole: "admin" | "manager" | "supervisor" | "quality-control" | "employee" | "user" | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userRole: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        }
    }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;