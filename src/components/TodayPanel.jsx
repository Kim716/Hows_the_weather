import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: var(--gray-1); //TODO
  width: 100%;
  height: 40%;
  border-radius: 5px;
  overflow: hidden;

  h2 {
    position: relative;
    top: -23px;
    left: -5px;
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
  return (
    <StyledDiv>
      <h2>今日</h2>
      <div className="info">
        <div className="weather">陰</div>
        <div className="temp">
          <p>氣溫</p>32°C
        </div>
        <div className="probability">
          <p>降雨率</p>30%
        </div>
      </div>
    </StyledDiv>
  );
}

export default TodayPanel;
