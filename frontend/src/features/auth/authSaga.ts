import { call, put, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} from './authSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import authService from '../../services/authService';

function* handleLogin(action: PayloadAction<{ username: string; password: string }>) {
  try {
    const { token } = yield call(authService.login, action.payload);
    yield put(loginSuccess(token));
  } catch (error: any) {
    yield put(loginFailure(error.message || 'Login failed'));
  }
}

function* handleRegister(action: PayloadAction<{ username: string; password: string }>) {
  try {
    yield call(authService.register, action.payload);
    yield put(registerSuccess());
  } catch (error: any) {
    yield put(registerFailure(error.message || 'Register failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(registerRequest.type, handleRegister);
}
