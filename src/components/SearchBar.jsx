import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/iconSearch.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm, getCurrentWeather, getGeolocation } from '../store';
import { useEffect } from 'react';

const StyledDiv = styled.div`
  width: 100%;

  form {
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  input {
    margin-right: 10px;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
    color: #111111;

    &:focus {
      outline: 1px solid var(--blue-1);
      outline-offset: -3px;
    }
  }

  button {
    aspect-ratio: 1/1;
    height: 100%;
    background-color: var(--blue-1);
    padding: 5px;
    border: 0;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: var(--blue-2);
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
  const { searchTerm, current } = useSelector((state) => state.weather);

  const handleChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { payload } = await dispatch(getGeolocation(searchTerm));
      dispatch(getCurrentWeather(payload[0].name));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={handleChange}
          placeholder="city name,country"
        />
        <button>
          <SearchIcon />
        </button>
      </form>
    </StyledDiv>
  );
}

export default SearchBar;
