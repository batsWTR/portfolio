import { isVisible } from '@testing-library/user-event/dist/utils';
import '../styles/Filter.css';
import ButtonFilter from './ButtonFilter';



function Filter(){
    const items = [
        {name:'Tous', isActive: true}, 
        {name:'Expériences', isActive: false}, 
        {name:'Réalisations', isActive: false}, 
        {name:'Diplômes', isActive: false}, 
        {name:'Hobbies', isActive: false}
    ];
    const itemList =[];

    items.map((el,id) =>{
         itemList.push(<ButtonFilter name={ el.name } isActive={ el.isActive} key={el.name+id} />);
    });
    
    function handleClick(ev){
        console.log(ev.target.title);
        console.log(items);
        items.map((el,id,ar)=>{
            if(el.name === ev.target.title){
                ar[id].isActive = true;
            }
        });

        items.map((el,id) =>{
            itemList.push(<ButtonFilter name={ el.name } isActive={ el.isActive} key={el.name+id} />);
       });
    };

    return(
        <div className="filter" onClick={handleClick}>
            { itemList }
        </div>
    );
}


export default Filter