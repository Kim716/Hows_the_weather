import ForecastList from './components/ForecastList';
import SearchBar from './components/SearchBar';
import TodayPanel from './components/TodayPanel';
import { GlobalStyle } from './globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <SearchBar />
        <TodayPanel />
        <ForecastList />
      </div>
    </>
  );
}

export default App;
