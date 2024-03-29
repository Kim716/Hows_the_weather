import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  to {transform : translateX(100%)}
`;

const StyledDiv = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.blue2};
  width: 100%;
  height: 40%;
  max-height: 250px;
  border-radius: 5px;
  overflow: hidden;

  .loading {
    position: absolute;
    inset: 0px; // 讓 inner div 貼齊 outer div 邊
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.blue2},
      ${({ theme }) => theme.blue1}
    );
    transform: translateX(-100%);
    animation: ${shimmer} 1s infinite;
  }

  .error {
    color: white;
    font-size: 1.5rem;
  }

  h2 {
    position: relative;
    top: -20px;
    left: -3px;
    color: white;
    font-size: 3rem;
    font-weight: 500;
  }

  .info {
    margin-top: 40px;
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
  const { isLoading, error, current } = useSelector((state) => state.weather);

  let content;
  if (isLoading) {
    content = <div className="loading"></div>;
  } else if (error) {
    content = <div className="error">{error.message}</div>;
  } else {
    content = (
      <>
        <h2 className="loading_fulfilled">{current.fullName}</h2>
        <div className="info loading_fulfilled">
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
      </>
    );
  }

  return <StyledDiv>{content}</StyledDiv>;
}

export default TodayPanel;
