import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;

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
  }
`;

function ForecastList() {
  const renderedRows = [1, 2, 3, 4, 5].map((el) => {
    return (
      <tr key={el}>
        <td>3/29</td>
        <td>Clouds</td>
        <td>27/32</td>
        <td>20%</td>
      </tr>
    );
  });

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
