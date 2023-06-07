import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/iconSearch.svg';
import { ReactComponent as SpinnerIcon } from '../assets/iconSpinner.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather, getForecasts } from '../store';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const StyledDiv = styled.div`
  width: 100%;

  form {
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .search-btn {
    aspect-ratio: 1/1;
    height: 100%;
    background-color: ${({ theme }) => theme.blue1};
    padding: 5px;
    border: 0;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.blue2};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  svg {
    path {
      fill: white;
    }
  }
`;

function SearchBar() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.weather);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getCurrentWeather(searchTerm))
      .unwrap()
      .then(() => {
        setSearchTerm('');
      });
    dispatch(getForecasts(searchTerm));
  };

  // 初次進入 APP 先顯示台北的天氣
  useEffect(() => {
    dispatch(getCurrentWeather('taipei'));
    dispatch(getForecasts('taipei'));
  }, [dispatch]);

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ marginRight: '10px', width: '250px' }}
          id="outlined-basic"
          label="city name, country"
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
          disabled={isLoading}
        />
        <button className="search-btn" disabled={isLoading}>
          {isLoading ? <SpinnerIcon /> : <SearchIcon />}
        </button>
      </form>
    </StyledDiv>
  );
}

export default SearchBar;
