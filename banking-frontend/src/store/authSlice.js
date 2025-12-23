// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthenticated: false,
//   user: null,   // { email, name }
//   role: null,   // "ADMIN" | "EMPLOYEE" | "CUSTOMER"
//   token: null,  // JWT token
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       // Backend should return: { token, role, email, name }
//       const { token, role, email, name } = action.payload;
//       state.isAuthenticated = true;
//       state.user = { email, name };
//       state.role = role;
//       state.token = token;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//       state.role = null;
//       state.token = null;
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: true,        // temporary for frontend
    user: { name: "User" },
    role: "CUSTOMER",             // ADMIN | EMPLOYEE | CUSTOMER
    token: "mock-token",
  },
  reducers: {
    loginSuccess: (state, action) => {
      const { token, role, email, name } = action.payload;
      state.isAuthenticated = true;
      state.user = { email, name };
      state.role = role;
      state.token = token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.token = null;
    },
  },
});

// named exports (optional)
export const { loginSuccess, logout } = authSlice.actions;

// DEFAULT EXPORT (THIS FIXES YOUR ERROR)
export default authSlice.reducer;
