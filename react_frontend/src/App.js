import './App.css';
import ListGuest from './components/ListGuest'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
        <div className="container">
          <ListGuest />
        </div>
        <Footer />
    </div>

  );
}

export default App;
