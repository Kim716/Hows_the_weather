import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: var(--gray-1); //TODO
  width: 100%;
  flex-basis: 40%;
  border-radius: 5px;
  overflow: hidden;

  h2 {
    position: relative;
    top: -27px;
    left: -3px;
    color: white;
    font-size: 4rem;
    font-weight: 500;
  }

  .info {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;

    div {
      width: 25%;
      height: 100%;
      color: white;
      font-size: 3rem;
      font-weight: 500;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .temp,
    .probability {
      position: relative;

      p {
        position: absolute;
        top: 0;
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }
`;

function TodayPanel() {
  const { current } = useSelector((state) => state.weather);

  return (
    <StyledDiv>
      <h2>{current.fullName}</h2>
      <div className="info">
        <div className="weather">{current.weather}</div>
        <div className="temp">
          <p>Temp.</p>
          {current.temp}°C
        </div>
        <div className="probability">
          <p>Humidity</p>
          {current.humidity}%
        </div>
      </div>
    </StyledDiv>
  );
}

export default TodayPanel;
