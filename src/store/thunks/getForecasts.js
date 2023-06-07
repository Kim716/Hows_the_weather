import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '81143149998081119abda998ef1c95c7';

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getForecasts = createAsyncThunk(
  'forecasts/get',
  async (cityName) => {
    const res = await axios.get(`${baseURL}?q=${cityName}&appid=${apiKey}`);

    return res.data;
  }
);
