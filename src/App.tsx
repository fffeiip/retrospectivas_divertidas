import Header from './components/Header';
import { AuthProvider } from './contexts/auth';
import Router from './routes/router';

function App() {
  return (
    <AuthProvider>
      <div className="h-screen flex-col text-white">
        <Header />
        <Router />
      </div>
    </AuthProvider>
  );
}

export default App;
