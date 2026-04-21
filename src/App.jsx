import GlobalStyles from './components/GlobalStyles';
import PageBoard from './components/PageBoard/PageBoard';
import eventsData from './upcoming-events.json';

function App() {
  return (
    <>
      <GlobalStyles />
      <PageBoard events={eventsData} />
    </>
  );
}

export default App;