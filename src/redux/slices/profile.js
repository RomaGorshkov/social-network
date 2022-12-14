import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  status: "loading",
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    
  }
})