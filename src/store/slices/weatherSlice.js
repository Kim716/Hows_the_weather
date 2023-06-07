import { createSlice } from '@reduxjs/toolkit';
import { getGeolocation } from '../thunks/getGeolocation';
import { getCurrentWeather } from '../thunks/getCurrentWeather';

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
    // GET Geolocation
    builder.addCase(getGeolocation.pending, (state) => {
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

    // GET Current Weather
    builder.addCase(getCurrentWeather.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current = {
        fullName: `${action.payload.name}, ${action.payload.sys.country}`,
        weather: action.payload.weather[0].main,
        temp: Math.round(action.payload.main.temp),
        humidity: action.payload.main.humidity,
      };
    });
    builder.addCase(getCurrentWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { changeSearchTerm } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
