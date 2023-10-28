import './App.css';
import { Footer, Header } from './widgets';
import MainRoutes from './routes/routes';
import { WhatsappContact } from './components';

function App() {
  return (
    <div className="App relative">
      <Header />
      <MainRoutes />
      <WhatsappContact />
      <Footer />
    </div>
  );
}

export default App;
