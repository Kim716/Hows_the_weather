import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer, changeSearchTerm } from './slices/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export { store, changeSearchTerm };
export * from './thunks/getGeolocation';
