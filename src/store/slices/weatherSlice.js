import { createSlice } from '@reduxjs/toolkit';
import { getGeolocation } from '../thunks/getGeolocation';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    isLoading: false,
    error: null,
    searchTerm: '',
    placeName: null,
    current: {},
    forecast: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getGeolocation.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getGeolocation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.placeName = action.payload[0].name;
      state.searchTerm = '';
    });
    builder.addCase(getGeolocation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { changeSearchTerm } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
