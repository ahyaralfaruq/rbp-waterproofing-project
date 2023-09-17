import './App.css';
import { Header } from './widgets';
import MainRoutes from './routes/routes';
import { WhatsappContact } from './components';

function App() {
  return (
    <div className="App relative">
      <Header />
      <MainRoutes />
      <WhatsappContact />
    </div>
  );
}

export default App;
