import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import MenuLarge from './components/MenuLarge'


const items = [
  {name:'Tous', isActive: true}, 
  {name:'Expériences', isActive: false}, 
  {name:'Réalisations', isActive: false}, 
  {name:'Diplômes', isActive: false}, 
  {name:'Hobbies', isActive: false}
];


function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <MenuLarge />
        <div className='content-main'>
          <div>
            <Filter items={ items }/>
          </div>
          <div>Contenu cartes</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
