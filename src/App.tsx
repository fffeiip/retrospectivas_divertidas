import Header from './components/Header'
import Router from './router';

function App() {
  return (
    <div className="h-screen flex-col text-white">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
