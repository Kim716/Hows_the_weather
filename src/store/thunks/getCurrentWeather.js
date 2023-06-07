import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '81143149998081119abda998ef1c95c7';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

export const getCurrentWeather = createAsyncThunk(
  'current/get',
  async (cityName) => {
    const res = await axios.get(
      `${baseURL}?q=${cityName}&lang=zh_tw&units=metric&appid=${apiKey}`
    );

    return res.data;
  }
);
