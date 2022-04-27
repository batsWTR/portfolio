import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import MenuLarge from './components/MenuLarge';
import Card from './components/Card';


const items = [
  {name:'Tous', isActive: true}, 
  {name:'Expériences', isActive: false}, 
  {name:'Réalisations', isActive: false}, 
  {name:'Diplômes', isActive: false}, 
  {name:'Hobbies', isActive: false}
];

const cards = [
  {title:"Belle o natur'elle", view:"10K"},
  {title:"O'cado", view:"30K"}
]


function App() {
  const cardList = []

  cards.map(el =>{
    cardList.push(<Card info={ el } />)
  })

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <MenuLarge />
        <div className='content-main'>
          <div>
            <Filter items={ items }/>
          </div>
          <div className='content-cards'>
            { cardList }
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
