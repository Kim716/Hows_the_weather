import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  flex-basis: 50%;

  table {
    width: 100%;
    border-collapse: collapse;
    letter-spacing: 0.05rem;
    table-layout: auto;
    text-align: center;

    th,
    td {
      padding: 15px 10px 10px;
      border-bottom: 0.5px solid lightgray;
    }

    tr:hover {
      td {
        background: #bdc0ba55;
      }
    }
  }
`;

function ForecastList() {
  const { isLoading, error, forecasts } = useSelector((state) => state.weather);

  let renderedRows;
  if (isLoading) {
    renderedRows = Array(5)
      .fill(0)
      .map(() => {
        return (
          <tr key={nanoid()}>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        );
      });
  } else if (error) {
    renderedRows = Array(5)
      .fill(0)
      .map(() => {
        return (
          <tr key={nanoid()}>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
        );
      });
  } else {
    renderedRows = forecasts.map((el) => {
      return (
        <tr key={el.dt} className="fulfilled">
          <td>{el.dt_txt?.split(' ')[0].split('-').slice(-2).join('/')}</td>
          <td>{el.weather[0].description}</td>
          <td>
            {/* 需和團隊討論是否購買付費版，或是調整資訊呈現 */}
            {Math.round(el.main.temp_max)}/{Math.round(el.main.temp_min)}
          </td>
          <td>{el.main.humidity}%</td>
        </tr>
      );
    });
  }

  return (
    <StyledDiv>
      <table>
        <thead>
          <tr>
            <th>Future</th>
            <th>Weather</th>
            <th>Max/Min Temp.</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </StyledDiv>
  );
}

export default ForecastList;
