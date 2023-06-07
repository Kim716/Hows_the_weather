import { createSlice } from '@reduxjs/toolkit';
import { getGeolocation } from '../thunks/getGeolocation';
import { getCurrentWeather } from '../thunks/getCurrentWeather';
import { getForecasts } from '../thunks/getForecasts';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    isLoading: false,
    error: null,
    searchTerm: '',
    placeName: null,
    current: {},
    forecasts: [],
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
      state.error = null;
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
      state.error = null;
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

    // GET Forecasts
    builder.addCase(getForecasts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getForecasts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.forecasts = action.payload.list.filter((el) =>
        el.dt_txt.includes('06:00:00')
      );
    });
    builder.addCase(getForecasts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { changeSearchTerm } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
