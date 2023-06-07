import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

const baseURL = `${import.meta.env.VITE_API_DOMAIN}weather`;

export const getCurrentWeather = createAsyncThunk(
  'current/get',
  async (cityName) => {
    const res = await axios.get(
      `${baseURL}?q=${cityName}&units=metric&appid=${apiKey}`
    );

    return res.data;
  }
);
