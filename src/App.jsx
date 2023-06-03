import ForecastList from './components/ForecastList';
import SearchBar from './components/SearchBar';
import TodayPanel from './components/TodayPanel';

function App() {
  return (
    <div>
      <SearchBar />
      <TodayPanel />
      <ForecastList />
    </div>
  );
}

export default App;
