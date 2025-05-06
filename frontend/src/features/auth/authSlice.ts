import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<{ username: string; password: string }>) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    registerRequest(state, action: PayloadAction<{ username: string; password: string }>) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state) {
      state.loading = false;
    },
    registerFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
