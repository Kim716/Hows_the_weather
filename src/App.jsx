import styled from 'styled-components';
import ForecastList from './components/ForecastList';
import SearchBar from './components/SearchBar';
import TodayPanel from './components/TodayPanel';
import { GlobalStyle } from './globalStyle';

const StyledDiv = styled.div`
  /* background-color: green; //TODO */
  width: 100vw;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  /* // 只更動下一子層的 div
  > div {
    margin: 10px auto;
  } */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <SearchBar />
        <TodayPanel />
        <ForecastList />
      </StyledDiv>
    </>
  );
}

export default App;
