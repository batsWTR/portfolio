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
  {title:"Belle o natur'elle",image:"#", view:"10K"},
  {title:"O'cado", image:"#", view:"30K"},
  {title:"Armée de terre", image:"#", category:"Expériences", view:"1998-2003"},
  {title:"Technicien télécom Gobé", image:"#", category:"Expériences", view:"2003-2008"},
  {title:"Technicien télécom SDIS", image:"#", category:"Expériences", view:"2009"},
  {title:"Technicien télécom SPIE", image:"#", category:"Expériences", view:"2010-2012"},
  {title:"Technicien radio CERN", image:"#", category:"Expériences", view:"2012-2014"},
  {title:"Technicien boucle locale Eiffage", image:"#", category:"Expériences", view:"2016"},
  {title:"Technicien SAV télécom Alp'com", image:"#", category:"Expériences", view:"2016-2020"}
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
