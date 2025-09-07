import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  firstname: string | null;
  lastname: string | null;
  username: string | null;
  isAuthenticated: boolean;
  userRole: "admin" | "manager" | "supervisor" | "quality-control" | "employee" | "user" | null;
  token: string | null;
}

interface LoginPayload {
  firstname: string;
  lastname: string;
  username: string;
  userRole: string;
  token: string;
}

const initialState: AuthState = {
  firstname: null,
  lastname: null,
  username: null,
  isAuthenticated: false,
  userRole: null,
  token: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginPayload>) => {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.userRole = action.payload.userRole as AuthState["userRole"];
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.firstname = null;
            state.lastname = null;
            state.isAuthenticated = false;
            state.userRole = null;
            state.token = null;
            state.username = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;