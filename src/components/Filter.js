import { isVisible } from '@testing-library/user-event/dist/utils';
import '../styles/Filter.css';
import ButtonFilter from './ButtonFilter';



function Filter(){
    const items = ['Tous', 'Expériences', 'Réalisations', 'Diplômes', 'Hobbies'];
    const itemList =[];

    items.map((el,id) =>{
         itemList.push(<ButtonFilter name={ el } key={el+id} />);
    });
    
    function handleClick(ev){
        console.log(ev.target.title);
    };

    return(
        <div className="filter" onClick={handleClick}>
            { itemList }
        </div>
    );
}


export default Filter