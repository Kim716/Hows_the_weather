import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '81143149998081119abda998ef1c95c7';

const baseURL = `http://api.openweathermap.org/geo/1.0/direct`;

export const getGeolocation = createAsyncThunk(
  'geolocation/get',
  async (searchTerm) => {
    const res = await axios.get(`${baseURL}?q=${searchTerm}&appid=${apiKey}`);

    return res.data;
  }
);
