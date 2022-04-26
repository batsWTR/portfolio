import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import MenuLarge from './components/MenuLarge'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <MenuLarge />
        <div className='content-main'>
          <Filter />
          <div>Contenu cartes</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
