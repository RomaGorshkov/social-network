import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchAuth = createAsyncThunk("auth/fetchUserData", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});

export const fetchMe = createAsyncThunk("auth/fetchMe", async () => {
  const { data } = await axios.get("/auth/me");
  if(data.resultCode === 0) {
    return data
  }
});

const initialState = {
  data: null,
  status: "Loading"
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // Log in
    [fetchAuth.pending]: ( state ) => {
      state.status = "Loading";
      state.data = null;
    },
    [fetchAuth.fulfilled]: ( state, action ) => {
      state.status = "Loaded";
      state.data = action.payload;
    },
    [fetchAuth.rejected]: ( state ) => {
      state.status = "Error";
      state.data = null;
    },
    [fetchMe.pending]: ( state ) => {
      state.status = "Loading";
      state.data = null;
    },
    [fetchMe.fulfilled]: ( state, action ) => {
      state.status = "Loaded";
      state.data = action.payload;
    },
    [fetchMe.rejected]: ( state ) => {
      state.status = "Error";
      state.data = null;
    },
  }
});

export const isAuthCheck = state => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
