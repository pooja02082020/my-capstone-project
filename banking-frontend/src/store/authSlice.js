import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  role: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const payload = action.payload;

      const newState = {
        isAuthenticated: true,
        token: payload.token,
        role: payload.role,
        user: {
          name: payload.name,
          email: payload.email,
        },
      };

      localStorage.setItem("auth", JSON.stringify(newState));
      return newState;
    },

    logout: () => {
      localStorage.removeItem("auth");
      return initialState;
    },

    restoreSession: () => {
      const saved = localStorage.getItem("auth");
      return saved ? JSON.parse(saved) : initialState;
    },
  },
});

export const { loginSuccess, logout, restoreSession } = authSlice.actions;
export default authSlice.reducer;
