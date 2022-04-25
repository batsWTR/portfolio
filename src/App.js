import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='content-icone'>Icones</div>
        <div className='content-main'>
          <Filter />
          <div>Contenu cartes</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
